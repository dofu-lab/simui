import assert from 'node:assert/strict';
import { once } from 'node:events';
import { readdirSync, readFileSync } from 'node:fs';
import { after, before, test } from 'node:test';
import app, { netlifyAppEngineHandler } from '../dist/simui/server/server.mjs';

let server;
let origin;

before(async () => {
	server = app.listen(0, '127.0.0.1');
	await once(server, 'listening');
	origin = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
	server.closeAllConnections();
	await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
});

test('public documents retain prerendered content and revalidate', async () => {
	const response = await fetch(`${origin}/components/button`);
	assert.equal(response.status, 200);
	assert.match(response.headers.get('cache-control'), /no-cache|max-age=0/);
	const html = await response.text();
	assert.match(html, /ngh=/);
	assert.match(html, /id="button-01"/);
});

for (const path of ['/profile', '/auth/google/callback?code=unused-test-code', '/payment/success']) {
	test(`${path} serves a private client shell without a build-time redirect`, async () => {
		const response = await fetch(`${origin}${path}`, { redirect: 'manual' });
		assert.equal(response.status, 200);
		assert.match(response.headers.get('cache-control'), /no-store/);
		const html = await response.text();
		assert.doesNotMatch(html, /http-equiv="refresh"/);
		assert.doesNotMatch(html, /ngh=/);
	});
}

test('protected routes are absent from the prerender manifest', () => {
	const { routes } = JSON.parse(
		readFileSync(new URL('../dist/simui/prerendered-routes.json', import.meta.url), 'utf8'),
	);
	assert.ok(routes['/components/button']);
	for (const path of ['/profile', '/auth/google/callback', '/payment/success']) assert.ok(!routes[path]);
});

test('mutable registry metadata revalidates while hashed assets are immutable', async () => {
	const manifest = await fetch(`${origin}/registry/manifest.json`);
	assert.equal(manifest.status, 200);
	assert.match(manifest.headers.get('cache-control'), /no-cache|max-age=0/);
	const file = readdirSync(new URL('../dist/simui/browser/', import.meta.url)).find((name) =>
		/^main-.*\.js$/.test(name),
	);
	assert.ok(file);
	const asset = await fetch(`${origin}/${file}`);
	assert.equal(asset.status, 200);
	assert.match(asset.headers.get('cache-control'), /max-age=31536000, immutable/);
});

test('silent refresh remains available as a static HTML asset', async () => {
	const response = await fetch(`${origin}/silent-refresh.html`);
	assert.equal(response.status, 200);
	assert.match(await response.text(), /postMessage/);
});

test('unmatched routes return 404 rather than failing host validation', async () => {
	const response = await fetch(`${origin}/__ssr-review-missing-route__`);
	assert.equal(response.status, 404);
});

test('the Netlify web handler supports client routes and rejects unapproved hosts', async () => {
	const client = await netlifyAppEngineHandler(new Request('http://localhost/profile'));
	assert.equal(client.status, 200);
	assert.match(client.headers.get('cache-control'), /no-store/);
	const unknown = await netlifyAppEngineHandler(new Request('http://localhost/__ssr-review-missing-route__'));
	assert.equal(unknown.status, 404);
	const rejected = await netlifyAppEngineHandler(new Request('https://unapproved.invalid/profile'));
	assert.equal(rejected.status, 400);
});
