export const REGISTRY_MANIFEST_SCHEMA_VERSION = 5 as const;
export const REGISTRY_RELEASE_INDEX_SCHEMA_VERSION = 1 as const;

export type RegistryChangelogEntryType = 'feature' | 'improvement' | 'fix' | 'breaking';

export interface RegistryChangelogEntry {
	id: string;
	date: string;
	spartanVersion: string;
	type: RegistryChangelogEntryType;
	title: string;
	description: string;
}

export interface RegistryManifest {
	schemaVersion: typeof REGISTRY_MANIFEST_SCHEMA_VERSION;
	latest: string;
	releases: RegistryRelease[];
	comparisons: RegistryReleaseComparison[];
	changelog: RegistryChangelogEntry[];
}

export interface RegistryRelease {
	version: string;
	publishedAt: string;
	indexPath: string;
	components: string[];
}

export interface RegistryReleaseIndex {
	schemaVersion: typeof REGISTRY_RELEASE_INDEX_SCHEMA_VERSION;
	version: string;
	files: Record<string, string>;
}

export interface RegistryReleaseComparison {
	fromVersion: string;
	toVersion: string;
	added: string[];
	updated: string[];
	removed: string[];
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

export function isRegistryComponentId(value: unknown): value is string {
	return typeof value === 'string' && COMPONENT_ID_PATTERN.test(value);
}

export function isRegistryContentHash(value: unknown): value is string {
	return typeof value === 'string' && CONTENT_HASH_PATTERN.test(value);
}

export function validateRegistryReleaseIndex(value: unknown, expectedVersion: string): RegistryReleaseIndex {
	if (
		!isRecord(value) ||
		value['schemaVersion'] !== REGISTRY_RELEASE_INDEX_SCHEMA_VERSION ||
		value['version'] !== expectedVersion ||
		!isRecord(value['files'])
	) {
		throw new Error(`Registry release ${expectedVersion} has an invalid content index.`);
	}

	const files: Record<string, string> = {};
	for (const registryPath of Object.keys(value['files']).sort((left, right) => left.localeCompare(right))) {
		const hash = value['files'][registryPath];
		if (!REGISTRY_PATH_PATTERN.test(registryPath) || !isRegistryContentHash(hash)) {
			throw new Error(`Registry release ${expectedVersion} has an invalid indexed file.`);
		}
		files[registryPath] = hash;
	}
	if (!Object.keys(files).length) {
		throw new Error(`Registry release ${expectedVersion} has an empty content index.`);
	}
	return { schemaVersion: REGISTRY_RELEASE_INDEX_SCHEMA_VERSION, version: expectedVersion, files };
}

export function validateRegistryManifest(value: unknown): RegistryManifest {
	if (!isRecord(value) || value['schemaVersion'] !== REGISTRY_MANIFEST_SCHEMA_VERSION) {
		throw new Error(`Registry manifest must use schema version ${REGISTRY_MANIFEST_SCHEMA_VERSION}.`);
	}

	if (!isExactRegistryVersion(value['latest']) || !Array.isArray(value['releases']) || !value['releases'].length) {
		throw new Error('Registry manifest must define a valid latest version and at least one release.');
	}

	const versions = new Set<string>();
	const releases = value['releases'].map((release, index) => validateRelease(release, index, versions));
	if (!versions.has(value['latest'])) {
		throw new Error(`Registry manifest latest version "${value['latest']}" is not published.`);
	}
	const comparisons = validateComparisons(value['comparisons'], releases);
	const changelog = validateChangelog(value['changelog'], versions);

	return {
		schemaVersion: REGISTRY_MANIFEST_SCHEMA_VERSION,
		latest: value['latest'],
		releases,
		comparisons,
		changelog,
	};
}

function validateRelease(value: unknown, index: number, versions: Set<string>): RegistryRelease {
	if (!isRecord(value) || !isExactRegistryVersion(value['version'])) {
		throw new Error(`Registry release at index ${index} has an invalid exact version.`);
	}

	const version = value['version'];
	if (versions.has(version)) {
		throw new Error(`Registry manifest contains duplicate version "${version}".`);
	}
	versions.add(version);

	if (value['indexPath'] !== `/registry/releases/${version}.json`) {
		throw new Error(`Registry release "${version}" has an invalid index path.`);
	}
	if (!isNormalizedUtcDate(value['publishedAt'])) {
		throw new Error(`Registry release "${version}" has an invalid publication date.`);
	}
	if (!Array.isArray(value['components'])) {
		throw new Error(`Registry release "${version}" must define component IDs.`);
	}
	const components = value['components'];
	const componentIds = new Set<string>();
	for (const componentId of components) {
		if (!isRegistryComponentId(componentId)) {
			throw new Error(`Registry release "${version}" contains an invalid component ID.`);
		}
		if (componentIds.has(componentId)) {
			throw new Error(`Registry release "${version}" contains duplicate component ID "${componentId}".`);
		}
		componentIds.add(componentId);
	}
	if (!isSorted(components)) {
		throw new Error(`Registry release "${version}" component IDs must be sorted.`);
	}

	return {
		version,
		publishedAt: value['publishedAt'],
		indexPath: value['indexPath'],
		components: [...components],
	};
}

function validateChangelog(value: unknown, publishedVersions: Set<string>): RegistryChangelogEntry[] {
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
			!publishedVersions.has(entry['spartanVersion']) ||
			typeof entry['type'] !== 'string' ||
			!CHANGELOG_ENTRY_TYPES.has(entry['type'] as RegistryChangelogEntryType) ||
			typeof entry['title'] !== 'string' ||
			!entry['title'].trim() ||
			entry['title'] !== entry['title'].trim() ||
			typeof entry['description'] !== 'string' ||
			!entry['description'].trim() ||
			entry['description'] !== entry['description'].trim()
		) {
			throw new Error(`Registry changelog has an invalid entry at index ${index}.`);
		}
		if (ids.has(entry['id'])) {
			throw new Error(`Registry changelog contains duplicate entry ID "${entry['id']}".`);
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
	for (const version of publishedVersions) {
		if (!versionsWithEntries.has(version)) {
			throw new Error(`Registry changelog must contain at least one entry for published SpartanUI ${version}.`);
		}
	}
	return entries;
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

		const added = validateChangeIds(
			comparison['added'],
			`comparison ${fromRelease.version} → ${toRelease.version} added`,
		);
		const updated = validateChangeIds(
			comparison['updated'],
			`comparison ${fromRelease.version} → ${toRelease.version} updated`,
		);
		const removed = validateChangeIds(
			comparison['removed'],
			`comparison ${fromRelease.version} → ${toRelease.version} removed`,
		);
		const fromIds = new Set(fromRelease.components);
		const toIds = new Set(toRelease.components);
		const expectedAdded = toRelease.components.filter((componentId) => !fromIds.has(componentId));
		const expectedRemoved = fromRelease.components.filter((componentId) => !toIds.has(componentId));

		if (!arraysEqual(added, expectedAdded) || !arraysEqual(removed, expectedRemoved)) {
			throw new Error(
				`Registry comparison ${fromRelease.version} → ${toRelease.version} has invalid structural changes.`,
			);
		}
		if (updated.some((componentId) => !fromIds.has(componentId) || !toIds.has(componentId))) {
			throw new Error(
				`Registry comparison ${fromRelease.version} → ${toRelease.version} has an invalid updated component.`,
			);
		}

		return {
			fromVersion: fromRelease.version,
			toVersion: toRelease.version,
			added,
			updated,
			removed,
		};
	});
}

function validateChangeIds(value: unknown, label: string): string[] {
	if (!Array.isArray(value) || value.some((componentId) => !isRegistryComponentId(componentId))) {
		throw new Error(`Registry ${label} list contains an invalid component ID.`);
	}
	if (!isSorted(value)) {
		throw new Error(`Registry ${label} component IDs must be unique and sorted.`);
	}
	return [...value];
}

function isNormalizedUtcDate(value: unknown): value is string {
	if (typeof value !== 'string' || !UTC_DATE_PATTERN.test(value)) {
		return false;
	}

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
