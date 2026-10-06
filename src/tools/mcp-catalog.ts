import * as path from 'node:path';
import * as ts from 'typescript';

export interface McpCatalogSource {
	schemaVersion: 1;
	categories: McpCatalogCategorySource[];
}

export interface McpCatalogCategorySource {
	id: string;
	label: string;
	description: string;
	tags: string[];
	useCases: string[];
	searchAliases: string[];
	previewPath: string;
	setupNotes: string[];
	componentIds: string[];
}

export interface McpPackageRequirement {
	name: string;
	version: string;
}

export interface McpSpartanRequirements {
	version: string;
	helm: string[];
	brain: string[];
}

export interface McpCatalogComponentVersion {
	version: string;
	sourceHash: string;
}

export interface McpCatalogComponent {
	id: string;
	name: string;
	description: string;
	category: string;
	tags: string[];
	useCases: string[];
	searchAliases: string[];
	previewPath: string;
	registryPath: string;
	versions: McpCatalogComponentVersion[];
	packageRequirements: McpPackageRequirement[];
	spartanRequirements: McpSpartanRequirements;
	simDependencies: string[];
	relatedRegistryFiles: string[];
	setupNotes: string[];
}

export interface McpCatalog {
	schemaVersion: 1;
	registryVersion: string;
	manifestPath: '/registry/manifest.json';
	releaseIndexPath: string;
	components: McpCatalogComponent[];
}

export interface McpCatalogRelease {
	version: string;
	indexPath: string;
	components: string[];
}

export interface McpCatalogReleaseIndex {
	version: string;
	files: Record<string, string>;
}

export interface BuildMcpCatalogOptions {
	source: unknown;
	registryVersion: string;
	spartanVersion: string;
	releases: McpCatalogRelease[];
	releaseIndexes: Map<string, McpCatalogReleaseIndex>;
	packageJson: unknown;
	readRegistrySource(registryPath: string, version: string): string;
}

interface DependencyAnalysis {
	packageNames: Set<string>;
	helm: Set<string>;
	brain: Set<string>;
	directSimDependencies: Set<string>;
	relatedRegistryFiles: Set<string>;
}

const CATEGORY_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const COMPONENT_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*-\d{2}$/;
const CONTENT_HASH_PATTERN = /^[a-f0-9]{64}$/;

export function buildMcpCatalog(options: BuildMcpCatalogOptions): McpCatalog {
	const source = validateMcpCatalogSource(options.source);
	const packageVersions = packageVersionMap(options.packageJson);
	const currentIndex = options.releaseIndexes.get(options.registryVersion);
	if (!currentIndex) {
		throw new Error(`MCP catalog cannot find registry release ${options.registryVersion}.`);
	}

	const expectedComponentIds = Object.keys(currentIndex.files)
		.filter((registryPath) => isComponentId(registryPath))
		.sort((left, right) => left.localeCompare(right));
	const metadataByComponentId = new Map<string, McpCatalogCategorySource>();
	for (const category of source.categories) {
		for (const componentId of category.componentIds) {
			if (metadataByComponentId.has(componentId)) {
				throw new Error(`MCP catalog metadata contains duplicate component ID "${componentId}".`);
			}
			metadataByComponentId.set(componentId, category);
		}
	}

	const metadataIds = [...metadataByComponentId.keys()].sort((left, right) => left.localeCompare(right));
	const missingIds = expectedComponentIds.filter((componentId) => !metadataByComponentId.has(componentId));
	const staleIds = metadataIds.filter((componentId) => !(componentId in currentIndex.files));
	if (missingIds.length || staleIds.length) {
		throw new Error(
			`MCP catalog metadata does not match the current registry (missing: ${formatIds(missingIds)}; stale: ${formatIds(staleIds)}).`,
		);
	}

	const components = expectedComponentIds.map((componentId): McpCatalogComponent => {
		const category = metadataByComponentId.get(componentId)!;
		if (!componentId.startsWith(`${category.id}-`)) {
			throw new Error(`MCP catalog component "${componentId}" does not belong to category "${category.id}".`);
		}
		const sourceText = options.readRegistrySource(componentId, options.registryVersion);
		const dependencies = analyzeDependencies(
			componentId,
			sourceText,
			currentIndex,
			options.registryVersion,
			options.readRegistrySource,
		);
		const packageRequirements = [...dependencies.packageNames]
			.sort((left, right) => left.localeCompare(right))
			.map((name) => {
				const version = packageVersions.get(name);
				if (!version) {
					throw new Error(
						`MCP catalog component "${componentId}" imports package "${name}" without a package.json dependency.`,
					);
				}
				return { name, version };
			});
		const versions = options.releases
			.filter((release) => release.components.includes(componentId))
			.map((release) => {
				const index = options.releaseIndexes.get(release.version);
				const sourceHash = index?.files[componentId];
				if (!sourceHash) {
					throw new Error(
						`MCP catalog component "${componentId}" is declared for ${release.version} without indexed source.`,
					);
				}
				return { version: release.version, sourceHash };
			});
		if (!versions.length || versions[0]?.version !== options.registryVersion) {
			throw new Error(`MCP catalog component "${componentId}" does not support the current registry version.`);
		}

		const variant = componentId.slice(category.id.length + 1);
		return {
			id: componentId,
			name: `${category.label} ${variant}`,
			description: `${category.description} Variant ${variant} provides a copy-ready implementation.`,
			category: category.id,
			tags: [...category.tags],
			useCases: [...category.useCases],
			searchAliases: [...new Set([componentId, category.label.toLocaleLowerCase('en-US'), ...category.searchAliases])],
			previewPath: category.previewPath,
			registryPath: componentId,
			versions,
			packageRequirements,
			spartanRequirements: {
				version: options.spartanVersion,
				helm: [...dependencies.helm].sort((left, right) => left.localeCompare(right)),
				brain: [...dependencies.brain].sort((left, right) => left.localeCompare(right)),
			},
			simDependencies: [...dependencies.directSimDependencies].sort((left, right) => left.localeCompare(right)),
			relatedRegistryFiles: [...dependencies.relatedRegistryFiles].sort((left, right) => left.localeCompare(right)),
			setupNotes: [...category.setupNotes],
		};
	});

	return validateMcpCatalog({
		schemaVersion: 1,
		registryVersion: options.registryVersion,
		manifestPath: '/registry/manifest.json',
		releaseIndexPath: `/registry/releases/${options.registryVersion}.json`,
		components,
	});
}

export function validateMcpCatalogSource(value: unknown): McpCatalogSource {
	if (!isRecord(value) || value['schemaVersion'] !== 1 || !Array.isArray(value['categories'])) {
		throw new Error('MCP catalog source must define schema version 1 and a categories array.');
	}
	if (!value['categories'].length) {
		throw new Error('MCP catalog source must define at least one category.');
	}

	const categoryIds = new Set<string>();
	const categories = value['categories'].map((entry, index): McpCatalogCategorySource => {
		if (!isRecord(entry) || typeof entry['id'] !== 'string' || !CATEGORY_ID_PATTERN.test(entry['id'])) {
			throw new Error(`MCP catalog category at index ${index} has an invalid ID.`);
		}
		const id = entry['id'];
		if (categoryIds.has(id)) throw new Error(`MCP catalog source contains duplicate category "${id}".`);
		categoryIds.add(id);
		const label = requiredText(entry['label'], `category "${id}" label`);
		const description = requiredText(entry['description'], `category "${id}" description`);
		const tags = requiredStringArray(entry['tags'], `category "${id}" tags`);
		const useCases = requiredStringArray(entry['useCases'], `category "${id}" use cases`);
		const searchAliases = requiredStringArray(entry['searchAliases'], `category "${id}" search aliases`, true);
		const setupNotes = requiredStringArray(entry['setupNotes'], `category "${id}" setup notes`);
		if (entry['previewPath'] !== `/components/${id}`) {
			throw new Error(`MCP catalog category "${id}" has an invalid preview path.`);
		}
		if (
			!Array.isArray(entry['componentIds']) ||
			!entry['componentIds'].length ||
			!entry['componentIds'].every(
				(componentId) => typeof componentId === 'string' && COMPONENT_ID_PATTERN.test(componentId),
			) ||
			!isSortedUnique(entry['componentIds'])
		) {
			throw new Error(`MCP catalog category "${id}" component IDs must be valid, unique, and sorted.`);
		}
		return {
			id,
			label,
			description,
			tags,
			useCases,
			searchAliases,
			previewPath: entry['previewPath'],
			setupNotes,
			componentIds: [...entry['componentIds']],
		};
	});
	if (!isSortedUnique(categories.map((category) => category.id))) {
		throw new Error('MCP catalog categories must be sorted by ID.');
	}
	return { schemaVersion: 1, categories };
}

export function validateMcpCatalog(value: unknown): McpCatalog {
	if (
		!isRecord(value) ||
		value['schemaVersion'] !== 1 ||
		typeof value['registryVersion'] !== 'string' ||
		value['manifestPath'] !== '/registry/manifest.json' ||
		value['releaseIndexPath'] !== `/registry/releases/${value['registryVersion']}.json` ||
		!Array.isArray(value['components']) ||
		!value['components'].length
	) {
		throw new Error('Generated MCP catalog is invalid.');
	}
	const componentIds = value['components'].map((component) => {
		if (
			!isRecord(component) ||
			typeof component['id'] !== 'string' ||
			!isComponentId(component['id']) ||
			typeof component['category'] !== 'string' ||
			!CATEGORY_ID_PATTERN.test(component['category']) ||
			!component['id'].startsWith(`${component['category']}-`) ||
			component['previewPath'] !== `/components/${component['category']}` ||
			component['registryPath'] !== component['id'] ||
			!Array.isArray(component['versions']) ||
			!component['versions'].length ||
			!Array.isArray(component['packageRequirements']) ||
			!isRecord(component['spartanRequirements']) ||
			!Array.isArray(component['simDependencies']) ||
			!Array.isArray(component['relatedRegistryFiles'])
		) {
			throw new Error('Generated MCP catalog contains an invalid component.');
		}
		requiredText(component['name'], `component "${component['id']}" name`);
		requiredText(component['description'], `component "${component['id']}" description`);
		requiredStringArray(component['tags'], `component "${component['id']}" tags`);
		requiredStringArray(component['useCases'], `component "${component['id']}" use cases`);
		requiredStringArray(component['searchAliases'], `component "${component['id']}" search aliases`);
		requiredStringArray(component['setupNotes'], `component "${component['id']}" setup notes`);
		const versions = component['versions'].map((entry) => {
			if (
				!isRecord(entry) ||
				typeof entry['version'] !== 'string' ||
				!entry['version'] ||
				typeof entry['sourceHash'] !== 'string' ||
				!CONTENT_HASH_PATTERN.test(entry['sourceHash'])
			) {
				throw new Error(`Generated MCP catalog component "${component['id']}" has an invalid release reference.`);
			}
			return entry['version'];
		});
		if (versions[0] !== value['registryVersion'] || new Set(versions).size !== versions.length) {
			throw new Error(`Generated MCP catalog component "${component['id']}" has invalid release support.`);
		}
		const packageNames = component['packageRequirements'].map((entry) => {
			if (
				!isRecord(entry) ||
				typeof entry['name'] !== 'string' ||
				!entry['name'] ||
				typeof entry['version'] !== 'string' ||
				!entry['version']
			) {
				throw new Error(`Generated MCP catalog component "${component['id']}" has an invalid package requirement.`);
			}
			return entry['name'];
		});
		if (!isSortedUnique(packageNames)) {
			throw new Error(`Generated MCP catalog component "${component['id']}" package requirements must be sorted.`);
		}
		const spartanRequirements = component['spartanRequirements'];
		if (
			typeof spartanRequirements['version'] !== 'string' ||
			!spartanRequirements['version'] ||
			!Array.isArray(spartanRequirements['helm']) ||
			!isSortedUniqueStringArray(spartanRequirements['helm']) ||
			!Array.isArray(spartanRequirements['brain']) ||
			!isSortedUniqueStringArray(spartanRequirements['brain']) ||
			!isSortedUniqueStringArray(component['simDependencies']) ||
			!isSortedUniqueStringArray(component['relatedRegistryFiles'])
		) {
			throw new Error(`Generated MCP catalog component "${component['id']}" has invalid dependency metadata.`);
		}
		return component['id'];
	});
	if (!isSortedUnique(componentIds)) {
		throw new Error('Generated MCP catalog component IDs must be unique and sorted.');
	}
	return value as unknown as McpCatalog;
}

function analyzeDependencies(
	componentId: string,
	source: string,
	index: McpCatalogReleaseIndex,
	version: string,
	readRegistrySource: (registryPath: string, version: string) => string,
): DependencyAnalysis {
	const analysis: DependencyAnalysis = {
		packageNames: new Set<string>(),
		helm: new Set<string>(),
		brain: new Set<string>(),
		directSimDependencies: new Set<string>(),
		relatedRegistryFiles: new Set<string>(),
	};
	const visitedSimFiles = new Set<string>();

	const visit = (registryPath: string, content: string, isComponentSource: boolean): void => {
		for (const specifier of importSpecifiers(content)) {
			if (specifier.startsWith('@spartan-ng/helm/')) {
				analysis.helm.add(specifier);
				continue;
			}
			if (specifier.startsWith('@spartan-ng/brain/')) {
				analysis.brain.add(specifier);
				continue;
			}
			const localHelm = /^@\/libs\/ui\/([^/]+)\/src(?:\/.*)?$/.exec(specifier);
			if (localHelm) {
				analysis.helm.add(`@spartan-ng/helm/${localHelm[1]}`);
				continue;
			}
			const simPath = resolveSimImport(specifier, registryPath, index);
			if (simPath) {
				if (isComponentSource) analysis.directSimDependencies.add(simPath);
				if (visitedSimFiles.has(simPath)) continue;
				visitedSimFiles.add(simPath);
				analysis.relatedRegistryFiles.add(simPath);
				visit(simPath, readRegistrySource(simPath, version), false);
				continue;
			}
			if (specifier.startsWith('.') || specifier.startsWith('@/') || specifier.startsWith('@sim/')) {
				throw new Error(
					`MCP catalog dependency "${specifier}" from "${registryPath}" does not resolve in registry ${version}.`,
				);
			}
			analysis.packageNames.add(packageName(specifier));
		}
	};

	visit(componentId, source, true);
	return analysis;
}

function resolveSimImport(specifier: string, fromRegistryPath: string, index: McpCatalogReleaseIndex): string | null {
	let candidate: string | null = null;
	if (specifier.startsWith('@sim/')) {
		candidate = `sim/${specifier.slice('@sim/'.length)}`;
	} else if (specifier.startsWith('@/libs/sim/')) {
		candidate = `sim/${specifier.slice('@/libs/sim/'.length)}`;
	} else if (specifier.startsWith('.') && fromRegistryPath.startsWith('sim/')) {
		candidate = path.posix.normalize(path.posix.join(path.posix.dirname(fromRegistryPath), specifier));
	}
	if (!candidate) return null;
	candidate = candidate.replace(/\.(?:ts|js)$/, '');
	if (candidate in index.files) return candidate;
	if (`${candidate}/index` in index.files) return `${candidate}/index`;
	return null;
}

function importSpecifiers(source: string): string[] {
	return ts.preProcessFile(source, true, true).importedFiles.map((importedFile) => importedFile.fileName);
}

function packageVersionMap(value: unknown): Map<string, string> {
	if (!isRecord(value)) throw new Error('package.json must contain a JSON object.');
	const versions = new Map<string, string>();
	for (const sectionName of ['dependencies', 'devDependencies']) {
		const section = value[sectionName];
		if (!isRecord(section)) continue;
		for (const [name, version] of Object.entries(section)) {
			if (typeof version === 'string') versions.set(name, version);
		}
	}
	return versions;
}

function packageName(specifier: string): string {
	if (!specifier.startsWith('@')) return specifier.split('/')[0]!;
	const [scope, name] = specifier.split('/');
	if (!scope || !name) throw new Error(`Invalid package import "${specifier}".`);
	return `${scope}/${name}`;
}

function requiredText(value: unknown, label: string): string {
	if (typeof value !== 'string' || !value || value !== value.trim()) {
		throw new Error(`MCP catalog ${label} must be non-empty and trimmed.`);
	}
	return value;
}

function requiredStringArray(value: unknown, label: string, allowEmpty = false): string[] {
	if (
		!Array.isArray(value) ||
		(!allowEmpty && !value.length) ||
		!value.every((entry) => typeof entry === 'string' && entry && entry === entry.trim()) ||
		new Set(value).size !== value.length
	) {
		throw new Error(`MCP catalog ${label} must contain unique, trimmed strings.`);
	}
	return [...value];
}

function isComponentId(value: string): boolean {
	return COMPONENT_ID_PATTERN.test(value);
}

function isSortedUnique(values: string[]): boolean {
	return values.every((value, index) => index === 0 || values[index - 1]!.localeCompare(value) < 0);
}

function isSortedUniqueStringArray(value: unknown[]): value is string[] {
	return value.every((entry) => typeof entry === 'string' && entry.length > 0) && isSortedUnique(value as string[]);
}

function formatIds(ids: string[]): string {
	return ids.length ? ids.join(', ') : 'none';
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}
