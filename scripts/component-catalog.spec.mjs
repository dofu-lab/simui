import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import ts from 'typescript';
import { componentCatalog } from '../src/app/features/component-showcase/category-catalog.ts';

const showcaseRoot = new URL('../src/app/features/component-showcase/', import.meta.url);

function readSource(path) {
	return ts.createSourceFile(path, readFileSync(new URL(path, showcaseRoot), 'utf8'), ts.ScriptTarget.Latest, true);
}

test('category navigation does not load examples or thumbnails', () => {
	const source = readSource('category-catalog.ts');
	const imports = source.statements.filter(ts.isImportDeclaration);
	assert.ok(imports.every((statement) => statement.importClause?.isTypeOnly));
	const badges = readFileSync(new URL('shared/component-badges.component.ts', showcaseRoot), 'utf8');
	assert.ok(!badges.includes('home-catalog'));
});

test('home thumbnails cover every category', () => {
	const source = readSource('home-catalog.ts');
	for (const statement of source.statements.filter(ts.isImportDeclaration)) {
		assert.doesNotMatch(statement.moduleSpecifier.text, /\.registry|\/examples/);
	}
	const paths = [];
	function visit(node) {
		if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.name)) paths.push(node.name.text);
		ts.forEachChild(node, visit);
	}
	visit(source);
	assert.deepEqual(paths.sort(), componentCatalog.map((category) => category.path).sort());
});

test('feature routes use dynamic imports instead of eager feature imports', () => {
	const source = readSource('../../app.routes.ts');
	for (const statement of source.statements.filter(ts.isImportDeclaration)) {
		assert.ok(statement.importClause?.isTypeOnly || !statement.moduleSpecifier.text.startsWith('@features/'));
	}
	assert.ok(!source.text.includes('Promise.resolve('));
});

for (const category of componentCatalog) {
	test(`${category.name} count matches its registered examples`, () => {
		const slug = category.path.split('/').at(-1);
		const file = slug === 'event-calendar' ? `${slug}.page.ts` : `${slug}.registry.ts`;
		const source = readSource(`categories/${slug}/${file}`);
		const ids = [];
		function visit(node) {
			if (ts.isPropertyAssignment(node) && node.name.getText(source) === 'id' && ts.isStringLiteral(node.initializer)) {
				ids.push(node.initializer.text);
			}
			ts.forEachChild(node, visit);
		}
		visit(source);
		assert.equal(new Set(ids).size, ids.length, 'example IDs must be unique');
		assert.equal(category.compNumber, ids.length, 'update category-catalog.ts when changing registered examples');
	});
}
