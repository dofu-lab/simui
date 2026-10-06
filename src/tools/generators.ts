import { createHash } from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { buildMcpCatalog, validateMcpCatalog } from './mcp-catalog';

export type RegistryChangelogEntryType = 'feature' | 'improvement' | 'fix' | 'breaking';

export interface RegistryChangelogEntry {
	id: string;
	date: string;
	spartanVersion: string;
	type: RegistryChangelogEntryType;
	title: string;
	description: string;
}

export interface RegistryRelease {
	version: string;
	publishedAt: string;
	indexPath: string;
	components: string[];
}

export interface RegistryManifest {
	schemaVersion: 5;
	latest: string;
	releases: RegistryRelease[];
	comparisons: RegistryReleaseComparison[];
	changelog: RegistryChangelogEntry[];
}

export interface RegistryReleaseComparison {
	fromVersion: string;
	toVersion: string;
	added: string[];
	updated: string[];
	removed: string[];
}

export interface RegistryReleaseIndex {
	schemaVersion: 1;
	version: string;
	files: Record<string, string>;
}

export interface PublicationFileSystem {
	renameSync(source: string, destination: string): void;
}

export interface PublishRegistryOptions {
	rootDir?: string;
	now?: Date;
	fileSystem?: PublicationFileSystem;
	log?: (message: string) => void;
}

interface LegacyRelease {
	version: string;
	publishedAt: string;
	basePath: string;
	components: string[];
}

interface ExistingManifest {
	latest: string;
	releases: Array<RegistryRelease | LegacyRelease>;
	comparisons: RegistryReleaseComparison[];
	changelog: RegistryChangelogEntry[];
}

const EXACT_VERSION_PATTERN =
	/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;
const COMPONENT_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REGISTRY_PATH_PATTERN = /^[a-z0-9]+(?:[._-][a-z0-9]+)*(?:\/[a-z0-9]+(?:[._-][a-z0-9]+)*)*$/;
const CONTENT_HASH_PATTERN = /^[a-f0-9]{64}$/;
const UTC_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const CHANGELOG_ID_PATTERN = /^\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const CHANGELOG_ENTRY_TYPES = new Set<RegistryChangelogEntryType>(['feature', 'improvement', 'fix', 'breaking']);

export function isExactRegistryVersion(value: unknown): value is string {
	return typeof value === 'string' && EXACT_VERSION_PATTERN.test(value);
}

export function validateManifest(value: unknown): RegistryManifest {
	if (!isRecord(value) || value['schemaVersion'] !== 5) {
		throw new Error('Registry manifest must use schema version 5.');
	}
	return validateCurrentManifest(value);
}

export function resolveSpartanVersion(packageJson: unknown): string {
	if (!isRecord(packageJson)) {
		throw new Error('package.json must contain a JSON object.');
	}

	const dependencies = packageJson['dependencies'];
	const devDependencies = packageJson['devDependencies'];
	const brainVersion = isRecord(dependencies) ? dependencies['@spartan-ng/brain'] : undefined;
	const cliVersion = isRecord(devDependencies) ? devDependencies['@spartan-ng/cli'] : undefined;

	if (!isExactRegistryVersion(brainVersion) || !isExactRegistryVersion(cliVersion)) {
		throw new Error(
			'Registry publication requires exact @spartan-ng/brain and @spartan-ng/cli versions in dependencies and devDependencies.',
		);
	}
	if (brainVersion !== cliVersion) {
		throw new Error(`SpartanUI dependency versions must match exactly (brain: ${brainVersion}, cli: ${cliVersion}).`);
	}
	return brainVersion;
}

export function publishRegistry(options: PublishRegistryOptions = {}): RegistryManifest {
	const rootDir = path.resolve(options.rootDir ?? process.cwd());
	const componentsDir = path.join(rootDir, 'src/app/features/component-showcase/categories');
	const simDir = path.join(rootDir, 'src/libs/sim');
	const publicDir = path.join(rootDir, 'public');
	const registryDir = path.join(publicDir, 'registry');
	const manifestPath = path.join(registryDir, 'manifest.json');
	const changelogPath = path.join(rootDir, 'src/tools/registry-changelog.json');
	const mcpCatalogPath = path.join(rootDir, 'src/tools/mcp-component-catalog.json');
	const packageJson = readJson(path.join(rootDir, 'package.json'));
	const version = resolveSpartanVersion(packageJson);
	const changelog = validateChangelogSource(readJson(changelogPath));
	const existing = fs.existsSync(manifestPath) ? validateExistingManifest(readJson(manifestPath)) : null;
	const token = `${version}-${process.pid}-${Date.now()}`;
	const stageDir = path.join(publicDir, `.registry-stage-${token}`);
	const backupDir = path.join(publicDir, `.registry-backup-${token}`);
	const renameSync = options.fileSystem?.renameSync ?? fs.renameSync;
	const log = options.log ?? console.log;

	requireDirectory(componentsDir, 'Component source');
	requireDirectory(simDir, 'Sim library source');

	try {
		fs.mkdirSync(publicDir, { recursive: true });
		fs.mkdirSync(stageDir);

		const releaseIndexes = new Map<string, RegistryReleaseIndex>();
		for (const release of existing?.releases ?? []) {
			releaseIndexes.set(release.version, importExistingRelease(registryDir, release, stageDir));
		}

		const currentIndex = generateReleaseIndex(version, componentsDir, simDir, stageDir);
		releaseIndexes.set(version, currentIndex);
		const currentRelease: RegistryRelease = {
			version,
			publishedAt: (options.now ?? new Date()).toISOString().slice(0, 10),
			indexPath: `/registry/releases/${version}.json`,
			components: componentIds(currentIndex),
		};
		const releases = [
			currentRelease,
			...(existing?.releases.filter((release) => release.version !== version).map(toCurrentRelease) ?? []),
		];

		for (const release of releases) {
			const index = releaseIndexes.get(release.version);
			if (!index) {
				throw new Error(`Registry release ${release.version} is missing its content index.`);
			}
			writeJson(path.join(stageDir, 'releases', `${release.version}.json`), index);
		}
		removeUnreferencedBlobs(stageDir, releases, releaseIndexes);

		const manifest = validateCurrentManifest({
			schemaVersion: 5,
			latest: version,
			releases,
			comparisons: generateComparisons(releases, releaseIndexes),
			changelog,
		});
		const mcpCatalog = buildMcpCatalog({
			source: readJson(mcpCatalogPath),
			registryVersion: version,
			spartanVersion: version,
			releases,
			releaseIndexes,
			packageJson,
			readRegistrySource(registryPath, releaseVersion) {
				const index = releaseIndexes.get(releaseVersion);
				const hash = index?.files[registryPath];
				if (!hash) {
					throw new Error(`Registry release ${releaseVersion} does not contain "${registryPath}".`);
				}
				return validateBlob(readJson(blobPath(stageDir, hash)), hash).content;
			},
		});
		writeJson(path.join(stageDir, 'manifest.json'), manifest);
		writeJson(path.join(stageDir, 'mcp', 'catalog.json'), mcpCatalog);
		validateStagedRegistry(stageDir, manifest);

		if (fs.existsSync(registryDir)) {
			renameSync(registryDir, backupDir);
		}
		try {
			renameSync(stageDir, registryDir);
		} catch (error) {
			if (fs.existsSync(backupDir) && !fs.existsSync(registryDir)) {
				fs.renameSync(backupDir, registryDir);
			}
			throw error;
		}
		if (fs.existsSync(backupDir)) {
			fs.rmSync(backupDir, { recursive: true, force: true });
		}

		const uniqueBlobs = countFiles(path.join(registryDir, 'blobs'));
		log(
			`Published SpartanUI registry ${version} with ${currentRelease.components.length} components and ${uniqueBlobs} unique blobs.`,
		);
		return manifest;
	} finally {
		for (const temporaryPath of [stageDir, backupDir]) {
			if (fs.existsSync(temporaryPath)) {
				fs.rmSync(temporaryPath, { recursive: true, force: true });
			}
		}
	}
}

function generateReleaseIndex(
	version: string,
	componentsDir: string,
	simDir: string,
	stageDir: string,
): RegistryReleaseIndex {
	const sources = new Map<string, string>();
	for (const filePath of walkFiles(componentsDir)) {
		if (!filePath.endsWith('.component.ts')) continue;
		const componentId = path.basename(filePath, '.component.ts');
		if (!isRegistryComponentId(componentId)) {
			throw new Error(`Invalid component registry ID derived from ${filePath}.`);
		}
		addSource(sources, componentId, filePath);
	}
	if (![...sources.keys()].some((registryPath) => isRegistryComponentId(registryPath))) {
		throw new Error('Component source generation produced no registry files.');
	}

	let simCount = 0;
	for (const filePath of walkFiles(simDir)) {
		if (!filePath.endsWith('.ts')) continue;
		const relativePath = path.relative(simDir, filePath).replace(/\.ts$/, '').split(path.sep).join('/');
		addSource(sources, `sim/${relativePath}`, filePath);
		simCount++;
	}
	if (!simCount) {
		throw new Error('Sim library source generation produced no registry files.');
	}

	const files: Record<string, string> = {};
	for (const [registryPath, content] of [...sources].sort(([left], [right]) => left.localeCompare(right))) {
		const hash = contentHash(content);
		files[registryPath] = hash;
		writeBlob(stageDir, hash, content);
	}
	return validateReleaseIndex({ schemaVersion: 1, version, files }, version);
}

function importExistingRelease(
	registryDir: string,
	release: RegistryRelease | LegacyRelease,
	stageDir: string,
): RegistryReleaseIndex {
	if ('indexPath' in release) {
		const index = validateReleaseIndex(readJson(resolvePublicPath(registryDir, release.indexPath)), release.version);
		for (const hash of Object.values(index.files)) {
			const sourceBlob = blobPath(registryDir, hash);
			const data = validateBlob(readJson(sourceBlob), hash);
			writeBlob(stageDir, hash, data.content);
		}
		return index;
	}

	const snapshotDir = resolvePublicPath(registryDir, release.basePath);
	requireDirectory(snapshotDir, `Historical registry ${release.version}`);
	const files: Record<string, string> = {};
	for (const filePath of walkFiles(snapshotDir)) {
		if (!filePath.endsWith('.json')) continue;
		const registryPath = path
			.relative(snapshotDir, filePath)
			.replace(/\.json$/, '')
			.split(path.sep)
			.join('/');
		if (!isRegistryPath(registryPath)) {
			throw new Error(`Historical registry ${release.version} contains an invalid path "${registryPath}".`);
		}
		const value = readJson(filePath);
		if (!isRecord(value) || typeof value['content'] !== 'string') {
			throw new Error(`Historical registry ${release.version} contains invalid source at "${registryPath}".`);
		}
		const hash = contentHash(value['content']);
		files[registryPath] = hash;
		writeBlob(stageDir, hash, value['content']);
	}
	return validateReleaseIndex({ schemaVersion: 1, version: release.version, files }, release.version);
}

function addSource(sources: Map<string, string>, registryPath: string, sourcePath: string): void {
	if (!isRegistryPath(registryPath) || sources.has(registryPath)) {
		throw new Error(`Duplicate or invalid registry output path "${registryPath}".`);
	}
	sources.set(registryPath, fs.readFileSync(sourcePath, 'utf8').trim());
}

function writeBlob(stageDir: string, hash: string, content: string): void {
	const outputPath = blobPath(stageDir, hash);
	if (fs.existsSync(outputPath)) {
		const existing = validateBlob(readJson(outputPath), hash);
		if (existing.content !== content) {
			throw new Error(`Registry content hash collision for ${hash}.`);
		}
		return;
	}
	writeJson(outputPath, { content });
}

function validateStagedRegistry(stageDir: string, manifest: RegistryManifest): void {
	const releaseIndexes = new Map<string, RegistryReleaseIndex>();
	for (const release of manifest.releases) {
		const index = validateReleaseIndex(readJson(resolvePublicPath(stageDir, release.indexPath)), release.version);
		releaseIndexes.set(release.version, index);
		if (!arraysEqual(componentIds(index), release.components)) {
			throw new Error(`Registry release ${release.version} component list does not match its index.`);
		}
		for (const hash of Object.values(index.files)) {
			validateBlob(readJson(blobPath(stageDir, hash)), hash);
		}
	}
	const catalog = validateMcpCatalog(readJson(path.join(stageDir, 'mcp', 'catalog.json')));
	const latestRelease = manifest.releases.find((release) => release.version === manifest.latest);
	const latestIndex = releaseIndexes.get(manifest.latest);
	if (!latestRelease || !latestIndex || catalog.registryVersion !== manifest.latest) {
		throw new Error('Generated MCP catalog does not match the latest registry release.');
	}
	if (
		!arraysEqual(
			catalog.components.map((component) => component.id),
			latestRelease.components,
		)
	) {
		throw new Error('Generated MCP catalog component IDs do not match the latest registry release.');
	}
	for (const component of catalog.components) {
		const expectedVersions = manifest.releases
			.filter((release) => release.components.includes(component.id))
			.map((release) => release.version);
		if (
			!arraysEqual(
				component.versions.map((entry) => entry.version),
				expectedVersions,
			)
		) {
			throw new Error(`Generated MCP catalog component "${component.id}" has incomplete release support.`);
		}
		for (const entry of component.versions) {
			if (releaseIndexes.get(entry.version)?.files[component.registryPath] !== entry.sourceHash) {
				throw new Error(`Generated MCP catalog component "${component.id}" has an invalid source hash.`);
			}
		}
		for (const registryPath of component.relatedRegistryFiles) {
			if (!(registryPath in latestIndex.files)) {
				throw new Error(`Generated MCP catalog component "${component.id}" references a missing registry file.`);
			}
		}
		if (component.simDependencies.some((registryPath) => !component.relatedRegistryFiles.includes(registryPath))) {
			throw new Error(`Generated MCP catalog component "${component.id}" has an invalid direct Sim dependency.`);
		}
	}
}

function removeUnreferencedBlobs(
	stageDir: string,
	releases: RegistryRelease[],
	indexes: Map<string, RegistryReleaseIndex>,
): void {
	const referenced = new Set(releases.flatMap((release) => Object.values(indexes.get(release.version)?.files ?? {})));
	const blobsDir = path.join(stageDir, 'blobs');
	if (!fs.existsSync(blobsDir)) return;
	for (const filePath of walkFiles(blobsDir)) {
		const hash = path.basename(filePath, '.json');
		if (!referenced.has(hash)) fs.rmSync(filePath);
	}
	for (const prefix of fs.readdirSync(blobsDir)) {
		const prefixDir = path.join(blobsDir, prefix);
		if (fs.statSync(prefixDir).isDirectory() && !fs.readdirSync(prefixDir).length) fs.rmdirSync(prefixDir);
	}
}

function validateCurrentManifest(value: Record<string, unknown>): RegistryManifest {
	if (
		value['schemaVersion'] !== 5 ||
		!isExactRegistryVersion(value['latest']) ||
		!Array.isArray(value['releases']) ||
		!value['releases'].length
	) {
		throw new Error('Registry manifest must define schema version 5, a latest version, and releases.');
	}
	const versions = new Set<string>();
	const releases = value['releases'].map((release, index) => validateCurrentRelease(release, index, versions));
	if (!versions.has(value['latest'])) {
		throw new Error(`Registry manifest latest version "${value['latest']}" is not published.`);
	}
	return {
		schemaVersion: 5,
		latest: value['latest'],
		releases,
		comparisons: validateComparisons(value['comparisons'], releases),
		changelog: validateChangelog(value['changelog'], versions),
	};
}

function validateExistingManifest(value: unknown): ExistingManifest {
	if (!isRecord(value) || ![1, 2, 3, 4, 5].includes(value['schemaVersion'] as number)) {
		throw new Error('Registry manifest must use a supported schema version.');
	}
	if (value['schemaVersion'] === 5) {
		return validateCurrentManifest(value);
	}
	if (!isExactRegistryVersion(value['latest']) || !Array.isArray(value['releases']) || !value['releases'].length) {
		throw new Error('Registry manifest must define a valid latest version and releases.');
	}
	const versions = new Set<string>();
	const releases = value['releases'].map((release, index) => validateLegacyRelease(release, index, versions));
	if (!versions.has(value['latest'])) {
		throw new Error(`Registry manifest latest version "${value['latest']}" is not published.`);
	}
	return {
		latest: value['latest'],
		releases,
		comparisons:
			value['schemaVersion'] === 1 ? [] : validateComparisons(value['comparisons'], releases.map(toCurrentRelease)),
		changelog: value['schemaVersion'] === 4 ? validateChangelog(value['changelog'], versions) : [],
	};
}

function validateCurrentRelease(value: unknown, index: number, versions: Set<string>): RegistryRelease {
	const common = validateReleaseCommon(value, index, versions);
	if (!isRecord(value) || value['indexPath'] !== `/registry/releases/${common.version}.json`) {
		throw new Error(`Registry release "${common.version}" has an invalid index path.`);
	}
	return { ...common, indexPath: value['indexPath'] };
}

function validateLegacyRelease(value: unknown, index: number, versions: Set<string>): LegacyRelease {
	const common = validateReleaseCommon(value, index, versions);
	if (!isRecord(value) || value['basePath'] !== `/registry/versions/${common.version}`) {
		throw new Error(`Registry release "${common.version}" has an invalid base path.`);
	}
	return { ...common, basePath: value['basePath'] };
}

function validateReleaseCommon(
	value: unknown,
	index: number,
	versions: Set<string>,
): Pick<RegistryRelease, 'version' | 'publishedAt' | 'components'> {
	if (!isRecord(value) || !isExactRegistryVersion(value['version'])) {
		throw new Error(`Registry release at index ${index} has an invalid exact version.`);
	}
	const version = value['version'];
	if (versions.has(version)) throw new Error(`Registry manifest contains duplicate version "${version}".`);
	versions.add(version);
	if (!isNormalizedUtcDate(value['publishedAt']) || !Array.isArray(value['components'])) {
		throw new Error(`Registry release "${version}" has invalid metadata.`);
	}
	const components = value['components'];
	if (!components.every(isRegistryComponentId) || !isSorted(components)) {
		throw new Error(`Registry release "${version}" component IDs must be valid, unique, and sorted.`);
	}
	return { version, publishedAt: value['publishedAt'], components: [...components] };
}

function validateReleaseIndex(value: unknown, expectedVersion: string): RegistryReleaseIndex {
	if (
		!isRecord(value) ||
		value['schemaVersion'] !== 1 ||
		value['version'] !== expectedVersion ||
		!isRecord(value['files'])
	) {
		throw new Error(`Registry release ${expectedVersion} has an invalid content index.`);
	}
	const files: Record<string, string> = {};
	for (const registryPath of Object.keys(value['files']).sort((left, right) => left.localeCompare(right))) {
		const hash = value['files'][registryPath];
		if (!isRegistryPath(registryPath) || typeof hash !== 'string' || !CONTENT_HASH_PATTERN.test(hash)) {
			throw new Error(`Registry release ${expectedVersion} has an invalid indexed file.`);
		}
		files[registryPath] = hash;
	}
	if (!Object.keys(files).length) throw new Error(`Registry release ${expectedVersion} has an empty content index.`);
	return { schemaVersion: 1, version: expectedVersion, files };
}

function validateBlob(value: unknown, expectedHash: string): { content: string } {
	if (!isRecord(value) || typeof value['content'] !== 'string' || contentHash(value['content']) !== expectedHash) {
		throw new Error(`Registry blob ${expectedHash} is invalid.`);
	}
	return { content: value['content'] };
}

function validateChangelogSource(value: unknown): RegistryChangelogEntry[] {
	if (!isRecord(value) || !Array.isArray(value['entries'])) {
		throw new Error('Registry changelog must be a JSON object containing an entries array.');
	}
	return validateChangelog(value['entries']);
}

function validateChangelog(value: unknown, publishedVersions?: Set<string>): RegistryChangelogEntry[] {
	if (!Array.isArray(value) || !value.length) {
		throw new Error('Registry changelog must define at least one chronological entry.');
	}
	const ids = new Set<string>();
	const versionsWithEntries = new Set<string>();
	const entries = value.map((entry, index) => {
		if (
			!isRecord(entry) ||
			typeof entry['id'] !== 'string' ||
			!CHANGELOG_ID_PATTERN.test(entry['id']) ||
			!isNormalizedUtcDate(entry['date']) ||
			!entry['id'].startsWith(`${entry['date']}-`) ||
			!isExactRegistryVersion(entry['spartanVersion']) ||
			typeof entry['type'] !== 'string' ||
			!CHANGELOG_ENTRY_TYPES.has(entry['type'] as RegistryChangelogEntryType) ||
			typeof entry['title'] !== 'string' ||
			entry['title'] !== entry['title'].trim() ||
			!entry['title'] ||
			typeof entry['description'] !== 'string' ||
			entry['description'] !== entry['description'].trim() ||
			!entry['description'] ||
			ids.has(entry['id']) ||
			(publishedVersions && !publishedVersions.has(entry['spartanVersion']))
		) {
			throw new Error(`Registry changelog has an invalid entry at index ${index}.`);
		}
		ids.add(entry['id']);
		versionsWithEntries.add(entry['spartanVersion']);
		return {
			id: entry['id'],
			date: entry['date'],
			spartanVersion: entry['spartanVersion'],
			type: entry['type'] as RegistryChangelogEntryType,
			title: entry['title'],
			description: entry['description'],
		};
	});
	if (entries.some((entry, index) => index > 0 && entries[index - 1].date < entry.date)) {
		throw new Error('Registry changelog entries must be ordered newest date first.');
	}
	for (const version of publishedVersions ?? []) {
		if (!versionsWithEntries.has(version)) {
			throw new Error(`Registry changelog must contain at least one entry for published SpartanUI ${version}.`);
		}
	}
	return entries;
}

function generateComparisons(
	releases: RegistryRelease[],
	indexes: Map<string, RegistryReleaseIndex>,
): RegistryReleaseComparison[] {
	return releases.slice(0, -1).map((toRelease, index) => {
		const fromRelease = releases[index + 1];
		const fromIndex = indexes.get(fromRelease.version);
		const toIndex = indexes.get(toRelease.version);
		if (!fromIndex || !toIndex) throw new Error('Cannot compare a release without a content index.');
		const fromIds = new Set(fromRelease.components);
		const toIds = new Set(toRelease.components);
		return {
			fromVersion: fromRelease.version,
			toVersion: toRelease.version,
			added: toRelease.components.filter((id) => !fromIds.has(id)),
			updated: toRelease.components.filter((id) => fromIds.has(id) && fromIndex.files[id] !== toIndex.files[id]),
			removed: fromRelease.components.filter((id) => !toIds.has(id)),
		};
	});
}

function validateComparisons(value: unknown, releases: RegistryRelease[]): RegistryReleaseComparison[] {
	if (!Array.isArray(value) || value.length !== Math.max(0, releases.length - 1)) {
		throw new Error('Registry manifest must define one comparison for each adjacent release pair.');
	}
	return value.map((comparison, index) => {
		const toRelease = releases[index];
		const fromRelease = releases[index + 1];
		if (
			!isRecord(comparison) ||
			comparison['fromVersion'] !== fromRelease.version ||
			comparison['toVersion'] !== toRelease.version
		) {
			throw new Error(`Registry comparison at index ${index} must match its adjacent releases.`);
		}
		const added = validateComparisonIds(comparison['added']);
		const updated = validateComparisonIds(comparison['updated']);
		const removed = validateComparisonIds(comparison['removed']);
		const fromIds = new Set(fromRelease.components);
		const toIds = new Set(toRelease.components);
		if (
			!arraysEqual(
				added,
				toRelease.components.filter((id) => !fromIds.has(id)),
			) ||
			!arraysEqual(
				removed,
				fromRelease.components.filter((id) => !toIds.has(id)),
			) ||
			updated.some((id) => !fromIds.has(id) || !toIds.has(id))
		) {
			throw new Error(`Registry comparison ${fromRelease.version} → ${toRelease.version} is invalid.`);
		}
		return { fromVersion: fromRelease.version, toVersion: toRelease.version, added, updated, removed };
	});
}

function validateComparisonIds(value: unknown): string[] {
	if (!Array.isArray(value) || !value.every(isRegistryComponentId) || !isSorted(value)) {
		throw new Error('Registry comparison component IDs must be valid, unique, and sorted.');
	}
	return [...value];
}

function toCurrentRelease(release: RegistryRelease | LegacyRelease): RegistryRelease {
	return {
		version: release.version,
		publishedAt: release.publishedAt,
		indexPath: `/registry/releases/${release.version}.json`,
		components: [...release.components],
	};
}

function componentIds(index: RegistryReleaseIndex): string[] {
	return Object.keys(index.files).filter(isRegistryComponentId);
}

function contentHash(content: string): string {
	return createHash('sha256').update(content, 'utf8').digest('hex');
}

function blobPath(root: string, hash: string): string {
	if (!CONTENT_HASH_PATTERN.test(hash)) throw new Error(`Invalid registry content hash "${hash}".`);
	return path.join(root, 'blobs', hash.slice(0, 2), `${hash}.json`);
}

function resolvePublicPath(registryRoot: string, publicPath: string): string {
	const prefix = '/registry/';
	if (!publicPath.startsWith(prefix)) throw new Error(`Invalid registry public path "${publicPath}".`);
	const resolved = path.resolve(registryRoot, publicPath.slice(prefix.length));
	const relative = path.relative(path.resolve(registryRoot), resolved);
	if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
		throw new Error(`Registry public path escapes its root: ${publicPath}`);
	}
	return resolved;
}

function walkFiles(rootDir: string): string[] {
	const files: string[] = [];
	for (const entry of fs.readdirSync(rootDir).sort((left, right) => left.localeCompare(right))) {
		const entryPath = path.join(rootDir, entry);
		const stat = fs.statSync(entryPath);
		if (stat.isDirectory()) files.push(...walkFiles(entryPath));
		else if (stat.isFile()) files.push(entryPath);
	}
	return files;
}

function countFiles(rootDir: string): number {
	return fs.existsSync(rootDir) ? walkFiles(rootDir).length : 0;
}

function writeJson(filePath: string, value: unknown): void {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, `${JSON.stringify(value, null, '\t')}\n`);
}

function readJson(filePath: string): unknown {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf8')) as unknown;
	} catch (error) {
		throw new Error(`Unable to read valid JSON from ${filePath}.`, { cause: error });
	}
}

function requireDirectory(directory: string, label: string): void {
	if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
		throw new Error(`${label} directory not found: ${directory}`);
	}
}

function isRegistryPath(value: unknown): value is string {
	return typeof value === 'string' && REGISTRY_PATH_PATTERN.test(value);
}

function isRegistryComponentId(value: unknown): value is string {
	return typeof value === 'string' && COMPONENT_ID_PATTERN.test(value);
}

function isNormalizedUtcDate(value: unknown): value is string {
	if (typeof value !== 'string' || !UTC_DATE_PATTERN.test(value)) return false;
	const date = new Date(`${value}T00:00:00.000Z`);
	return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

function isSorted(values: string[]): boolean {
	return values.every((value, index) => index === 0 || values[index - 1].localeCompare(value) < 0);
}

function arraysEqual(left: string[], right: string[]): boolean {
	return left.length === right.length && left.every((value, index) => value === right[index]);
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

if (require.main === module) {
	try {
		publishRegistry();
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
		process.exitCode = 1;
	}
}
