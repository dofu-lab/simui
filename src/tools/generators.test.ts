import * as assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { afterEach, describe, it } from 'node:test';
import {
	isExactRegistryVersion,
	publishRegistry,
	resolveSpartanVersion,
	validateManifest,
	type PublicationFileSystem,
	type RegistryManifest,
	type RegistryReleaseIndex,
} from './generators';
import { buildMcpCatalog, type McpCatalogSource } from './mcp-catalog';

const fixtureRoots: string[] = [];

afterEach(() => {
	for (const fixtureRoot of fixtureRoots.splice(0)) {
		fs.rmSync(fixtureRoot, { recursive: true, force: true });
	}
});

describe('registry publication configuration', () => {
	it('accepts matching exact versions and rejects unsafe version declarations', () => {
		assert.equal(
			resolveSpartanVersion({
				dependencies: { '@spartan-ng/brain': '1.0.2' },
				devDependencies: { '@spartan-ng/cli': '1.0.2' },
			}),
			'1.0.2',
		);
		for (const value of ['^1.0.2', '~1.0.2', 'latest', 'workspace:*', 'file:../brain', ' 1.0.2', '1.0.2/next']) {
			assert.equal(isExactRegistryVersion(value), false, value);
		}
	});

	it('rejects missing, ranged, and mismatched dependency versions', () => {
		assert.throws(() => resolveSpartanVersion({ dependencies: {}, devDependencies: {} }), /requires exact/);
		assert.throws(
			() =>
				resolveSpartanVersion({
					dependencies: { '@spartan-ng/brain': '^1.0.2' },
					devDependencies: { '@spartan-ng/cli': '1.0.2' },
				}),
			/requires exact/,
		);
		assert.throws(
			() =>
				resolveSpartanVersion({
					dependencies: { '@spartan-ng/brain': '1.0.2' },
					devDependencies: { '@spartan-ng/cli': '1.0.3' },
				}),
			/brain: 1\.0\.2, cli: 1\.0\.3/,
		);
	});

	it('rejects invalid manifest paths, duplicates, and latest references', () => {
		const release = {
			version: '1.0.2',
			publishedAt: '2026-07-26',
			indexPath: '/registry/releases/1.0.2.json',
			components: ['button-01'],
		};
		const changelog = [
			{
				id: '2026-07-26-versioned-registry',
				date: '2026-07-26',
				spartanVersion: '1.0.2',
				type: 'feature',
				title: 'Versioned registry',
				description: 'Choose component source for a supported SpartanUI version.',
			},
		];
		assert.throws(
			() => validateManifest({ schemaVersion: 5, latest: '1.0.3', releases: [release], comparisons: [], changelog }),
			/not published/,
		);
		assert.throws(
			() =>
				validateManifest({
					schemaVersion: 5,
					latest: '1.0.2',
					releases: [release, release],
					comparisons: [],
					changelog,
				}),
			/duplicate version/,
		);
		assert.throws(
			() =>
				validateManifest({
					schemaVersion: 5,
					latest: '1.0.2',
					releases: [{ ...release, indexPath: 'https://example.com/registry' }],
					comparisons: [],
					changelog,
				}),
			/invalid index path/,
		);
		assert.throws(
			() =>
				validateManifest({
					schemaVersion: 5,
					latest: '1.0.2',
					releases: [{ ...release, components: ['button-01', 'button-01'] }],
					comparisons: [],
					changelog,
				}),
			/unique/,
		);
	});

	it('requires chronological changelog entries in schema version 5 manifests', () => {
		const release = {
			version: '1.0.2',
			publishedAt: '2026-07-26',
			indexPath: '/registry/releases/1.0.2.json',
			components: ['button-01'],
		};
		assert.throws(
			() =>
				validateManifest({
					schemaVersion: 5,
					latest: '1.0.2',
					releases: [release],
					comparisons: [],
					changelog: [],
				}),
			/at least one chronological entry/,
		);
	});
});

describe('checked-in registry artifacts', () => {
	it('keeps the manifest, MCP catalog, current release, and blobs coherent', () => {
		const registryRoot = path.join(process.cwd(), 'public/registry');
		const manifest = JSON.parse(fs.readFileSync(path.join(registryRoot, 'manifest.json'), 'utf8')) as RegistryManifest;
		const catalog = JSON.parse(fs.readFileSync(path.join(registryRoot, 'mcp/catalog.json'), 'utf8')) as {
			registryVersion: string;
			releaseIndexPath: string;
			components: Array<{
				id: string;
				registryPath: string;
				versions: Array<{ version: string; sourceHash: string }>;
			}>;
		};

		assert.equal(catalog.registryVersion, manifest.latest);
		assert.equal(catalog.releaseIndexPath, `/registry/releases/${manifest.latest}.json`);

		const release = JSON.parse(
			fs.readFileSync(path.join(registryRoot, 'releases', `${manifest.latest}.json`), 'utf8'),
		) as RegistryReleaseIndex;
		assert.equal(release.version, manifest.latest);

		for (const component of catalog.components) {
			const catalogRelease = component.versions.find((entry) => entry.version === manifest.latest);
			assert.ok(catalogRelease, `${component.id} is missing current release metadata`);
			assert.equal(catalogRelease.sourceHash, release.files[component.registryPath], component.id);

			const blobPath = path.join(
				registryRoot,
				'blobs',
				catalogRelease.sourceHash.slice(0, 2),
				`${catalogRelease.sourceHash}.json`,
			);
			const blob = JSON.parse(fs.readFileSync(blobPath, 'utf8')) as { content: string };
			assert.equal(createHash('sha256').update(blob.content).digest('hex'), catalogRelease.sourceHash, component.id);
		}
	});
});

describe('transactional registry publication', () => {
	it('publishes deterministic release indexes and deduplicated content blobs without a legacy alias', () => {
		const rootDir = createFixture();
		const manifest = publishRegistry({
			rootDir,
			now: new Date('2026-07-26T14:30:00.000Z'),
			log: () => undefined,
		});

		assert.deepEqual(manifest, {
			schemaVersion: 5,
			latest: '1.0.2',
			releases: [
				{
					version: '1.0.2',
					publishedAt: '2026-07-26',
					indexPath: '/registry/releases/1.0.2.json',
					components: ['button-01', 'card-01'],
				},
			],
			comparisons: [],
			changelog: [
				{
					id: '2026-07-26-versioned-registry',
					date: '2026-07-26',
					spartanVersion: '1.0.2',
					type: 'feature',
					title: 'Versioned registry',
					description: 'Choose component source for a supported SpartanUI version.',
				},
			],
		});
		const index = JSON.parse(read('public/registry/releases/1.0.2.json', rootDir)) as {
			files: Record<string, string>;
		};
		assert.deepEqual(Object.keys(index.files), ['button-01', 'card-01', 'sim/demo/index']);
		assert.equal(index.files['button-01'].length, 64);
		assert.equal(fs.existsSync(path.join(rootDir, 'public/registry/button-01.json')), false);
		assert.equal(countRegistryBlobs(rootDir), 3);
		const catalog = JSON.parse(read('public/registry/mcp/catalog.json', rootDir)) as {
			schemaVersion: number;
			registryVersion: string;
			components: Array<{ id: string; simDependencies: string[]; versions: Array<{ version: string }> }>;
		};
		assert.equal(catalog.schemaVersion, 1);
		assert.equal(catalog.registryVersion, '1.0.2');
		assert.deepEqual(
			catalog.components.map((component) => component.id),
			['button-01', 'card-01'],
		);
		assert.deepEqual(catalog.components[0]?.simDependencies, ['sim/demo/index']);
		assert.deepEqual(catalog.components[0]?.versions, [{ version: '1.0.2', sourceHash: index.files['button-01'] }]);
		assert.equal(fs.existsSync(path.join(rootDir, 'public/registry/stale.json')), false);
		assert.deepEqual(toolArtifacts(rootDir), []);
	});

	it('publishes the MCP catalog deterministically', () => {
		const rootDir = createFixture();
		const now = new Date('2026-07-26T14:30:00.000Z');
		publishRegistry({ rootDir, now, log: () => undefined });
		const firstCatalog = read('public/registry/mcp/catalog.json', rootDir);

		publishRegistry({ rootDir, now, log: () => undefined });

		assert.equal(read('public/registry/mcp/catalog.json', rootDir), firstCatalog);
		assert.deepEqual(toolArtifacts(rootDir), []);
	});

	it('rejects missing, stale, duplicate, and invalid component metadata', () => {
		const cases: Array<[string, (source: McpCatalogSource) => void, RegExp]> = [
			[
				'missing',
				(source) => {
					source.categories.shift();
				},
				/missing: button-01/,
			],
			[
				'stale',
				(source) => {
					source.categories[0]!.componentIds.push('button-99');
				},
				/stale: button-99/,
			],
			[
				'duplicate',
				(source) => {
					source.categories[1]!.componentIds.unshift('button-01');
				},
				/duplicate component ID "button-01"/,
			],
			[
				'preview path',
				(source) => {
					source.categories[0]!.previewPath = '/components/not-button';
				},
				/invalid preview path/,
			],
		];

		for (const [label, mutate, expected] of cases) {
			const rootDir = createFixture();
			const source = catalogSource();
			mutate(source);
			write('src/tools/mcp-component-catalog.json', JSON.stringify(source), rootDir);
			assert.throws(() => publishRegistry({ rootDir, log: () => undefined }), expected, label);
			assert.equal(fs.existsSync(path.join(rootDir, 'public/registry/manifest.json')), false);
		}
	});

	it('rejects unresolved and undeclared component dependencies', () => {
		for (const [source, expected] of [
			["import '@sim/missing'; export class Button01Component {}", /does not resolve in registry/],
			["import 'unlisted-package'; export class Button01Component {}", /without a package\.json dependency/],
		] as const) {
			const rootDir = createFixture();
			write('src/app/features/component-showcase/categories/button/examples/button-01.component.ts', source, rootDir);
			assert.throws(() => publishRegistry({ rootDir, log: () => undefined }), expected);
			assert.equal(fs.existsSync(path.join(rootDir, 'public/registry/manifest.json')), false);
		}
	});

	it('rejects catalog components without support for the current release', () => {
		assert.throws(
			() =>
				buildMcpCatalog({
					source: catalogSource(),
					registryVersion: '1.0.2',
					spartanVersion: '1.0.2',
					releases: [],
					releaseIndexes: new Map([
						[
							'1.0.2',
							{
								version: '1.0.2',
								files: {
									'button-01': 'button-hash',
									'card-01': 'card-hash',
								},
							},
						],
					]),
					packageJson: {},
					readRegistrySource: () => '',
				}),
			/does not support the current registry version/,
		);
	});

	it('refuses publication when the chronological changelog is empty', () => {
		const rootDir = createFixture();
		write('src/tools/registry-changelog.json', '{"entries":[]}', rootDir);

		assert.throws(() => publishRegistry({ rootDir, log: () => undefined }), /at least one chronological entry/);
		assert.equal(fs.existsSync(path.join(rootDir, 'public/registry/manifest.json')), false);
	});

	it('generates added, updated, and removed component changes from the previous release', () => {
		const rootDir = createFixture();
		seedHistoricalRelease(rootDir);

		const manifest = publishRegistry({
			rootDir,
			now: new Date('2026-07-26T00:00:00.000Z'),
			log: () => undefined,
		});

		assert.deepEqual(manifest.comparisons, [
			{
				fromVersion: '0.9.0',
				toVersion: '1.0.2',
				added: ['card-01'],
				updated: ['button-01'],
				removed: ['alert-01'],
			},
		]);
	});

	it('replaces an existing version and garbage-collects blobs no longer referenced by a release', () => {
		const rootDir = createFixture();
		publishRegistry({ rootDir, now: new Date('2026-07-26T00:00:00.000Z'), log: () => undefined });
		write(
			'src/app/features/component-showcase/categories/button/examples/button-01.component.ts',
			'export class UpdatedButton01Component {}',
			rootDir,
		);

		const manifest = publishRegistry({
			rootDir,
			now: new Date('2026-07-27T00:00:00.000Z'),
			log: () => undefined,
		});

		assert.equal(manifest.releases.length, 1);
		assert.equal(manifest.releases[0].publishedAt, '2026-07-27');
		const index = JSON.parse(read('public/registry/releases/1.0.2.json', rootDir)) as {
			files: Record<string, string>;
		};
		const blob = read(
			`public/registry/blobs/${index.files['button-01'].slice(0, 2)}/${index.files['button-01']}.json`,
			rootDir,
		);
		assert.match(blob, /UpdatedButton01Component/);
		assert.equal(countRegistryBlobs(rootDir), 3);
		assert.deepEqual(toolArtifacts(rootDir), []);
	});

	it('restores an existing version when replacement fails during commit', () => {
		const rootDir = createFixture();
		publishRegistry({ rootDir, now: new Date('2026-07-26T00:00:00.000Z'), log: () => undefined });
		const before = snapshotRegistry(rootDir);
		write(
			'src/app/features/component-showcase/categories/button/examples/button-01.component.ts',
			'export class UpdatedButton01Component {}',
			rootDir,
		);
		let renameCount = 0;
		const fileSystem: PublicationFileSystem = {
			renameSync(source, destination) {
				renameCount++;
				if (renameCount === 2) {
					throw new Error('injected replacement failure');
				}
				fs.renameSync(source, destination);
			},
		};

		assert.throws(() => publishRegistry({ rootDir, fileSystem, log: () => undefined }), /injected replacement failure/);
		assert.deepEqual(snapshotRegistry(rootDir), before);
		assert.deepEqual(toolArtifacts(rootDir), []);
	});

	it('rolls back the registry after an injected atomic replacement failure', () => {
		const rootDir = createFixture();
		seedHistoricalRelease(rootDir, ['button-01']);
		const before = snapshotRegistry(rootDir);
		let renameCount = 0;
		const fileSystem: PublicationFileSystem = {
			renameSync(source, destination) {
				renameCount++;
				if (renameCount === 2) {
					throw new Error('injected rename failure');
				}
				fs.renameSync(source, destination);
			},
		};

		assert.throws(
			() => publishRegistry({ rootDir, fileSystem, now: new Date('2026-07-26T00:00:00.000Z'), log: () => undefined }),
			/injected rename failure/,
		);
		assert.deepEqual(snapshotRegistry(rootDir), before);
		assert.deepEqual(toolArtifacts(rootDir), []);
	});
});

function createFixture(): string {
	const rootDir = fs.mkdtempSync(path.join(os.tmpdir(), 'simui-registry-'));
	fixtureRoots.push(rootDir);
	write(
		'package.json',
		JSON.stringify({
			dependencies: { '@spartan-ng/brain': '1.0.2' },
			devDependencies: { '@spartan-ng/cli': '1.0.2' },
		}),
		rootDir,
	);
	write(
		'src/app/features/component-showcase/categories/button/examples/button-01.component.ts',
		'import \'@sim/demo\'; const template = \'<x [startDate]="from" [endDate]="value">\'; export class Button01Component {}',
		rootDir,
	);
	write(
		'src/app/features/component-showcase/categories/card/examples/card-01.component.ts',
		'export class Card01Component {}',
		rootDir,
	);
	write('src/libs/sim/demo/index.ts', 'export const demo = true;', rootDir);
	write(
		'src/tools/registry-changelog.json',
		JSON.stringify({
			entries: [
				{
					id: '2026-07-26-versioned-registry',
					date: '2026-07-26',
					spartanVersion: '1.0.2',
					type: 'feature',
					title: 'Versioned registry',
					description: 'Choose component source for a supported SpartanUI version.',
				},
			],
		}),
		rootDir,
	);
	write('src/tools/mcp-component-catalog.json', JSON.stringify(catalogSource()), rootDir);
	write('public/registry/stale.json', '{"content":"stale"}', rootDir);
	return rootDir;
}

function catalogSource(): McpCatalogSource {
	return {
		schemaVersion: 1,
		categories: [
			{
				id: 'button',
				label: 'Button',
				description: 'An interactive control that triggers an action.',
				tags: ['action', 'button'],
				useCases: ['Form actions'],
				searchAliases: ['trigger'],
				previewPath: '/components/button',
				setupNotes: ['Use a native button interaction.'],
				componentIds: ['button-01'],
			},
			{
				id: 'card',
				label: 'Card',
				description: 'A bounded surface that groups related content.',
				tags: ['card', 'surface'],
				useCases: ['Content summaries'],
				searchAliases: ['panel'],
				previewPath: '/components/card',
				setupNotes: ['Preserve a clear heading hierarchy.'],
				componentIds: ['card-01'],
			},
		],
	};
}

function seedHistoricalRelease(rootDir: string, components = ['alert-01', 'button-01']): void {
	const release = {
		version: '0.9.0',
		publishedAt: '2026-06-01',
		basePath: '/registry/versions/0.9.0',
		components,
	};
	write(
		'public/registry/manifest.json',
		JSON.stringify({
			schemaVersion: 1,
			latest: '0.9.0',
			releases: [release],
		}),
		rootDir,
	);
	write(
		'src/tools/registry-changelog.json',
		JSON.stringify({
			entries: [
				{
					id: '2026-07-26-versioned-registry',
					date: '2026-07-26',
					spartanVersion: '1.0.2',
					type: 'feature',
					title: 'Versioned registry',
					description: 'Choose component source for a supported SpartanUI version.',
				},
				{
					id: '2026-06-01-initial-registry',
					date: '2026-06-01',
					spartanVersion: '0.9.0',
					type: 'improvement',
					title: 'Initial registry',
					description: 'Established the first preserved registry snapshot.',
				},
			],
		}),
		rootDir,
	);
	for (const componentId of components) {
		write(
			`public/registry/versions/0.9.0/${componentId}.json`,
			JSON.stringify({ content: `export class Historical${componentId} {}` }),
			rootDir,
		);
	}
}

function write(relativePath: string, content: string, rootDir: string): void {
	const filePath = path.join(rootDir, relativePath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, content);
}

function read(relativePath: string, rootDir: string): string {
	return fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
}

function toolArtifacts(rootDir: string): string[] {
	return fs
		.readdirSync(path.join(rootDir, 'public'))
		.filter((entry) => entry.startsWith('.registry-'))
		.sort();
}

function countRegistryBlobs(rootDir: string): number {
	const blobsDir = path.join(rootDir, 'public/registry/blobs');
	return fs
		.readdirSync(blobsDir)
		.flatMap((prefix) => fs.readdirSync(path.join(blobsDir, prefix)))
		.filter((file) => file.endsWith('.json')).length;
}

function snapshotRegistry(rootDir: string): Record<string, string> {
	const registryDir = path.join(rootDir, 'public/registry');
	const snapshot: Record<string, string> = {};
	const visit = (directory: string): void => {
		for (const entry of fs.readdirSync(directory).sort()) {
			const filePath = path.join(directory, entry);
			if (fs.statSync(filePath).isDirectory()) {
				visit(filePath);
			} else {
				snapshot[path.relative(registryDir, filePath)] = fs.readFileSync(filePath, 'utf8');
			}
		}
	};
	visit(registryDir);
	return snapshot;
}
