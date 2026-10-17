import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { createWebRequestFromNodeRequest, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import { getAllowedHosts, getContext, getTrustProxyHeaders } from '@netlify/angular-runtime/app-engine.js';
import express from 'express';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const isNetlify = !!process.env['DEPLOY_URL'] && process.env['DEPLOY_URL'] !== 'undefined';
const configuredHosts =
	process.env['NG_ALLOWED_HOSTS']
		?.split(',')
		.map((host) => host.trim())
		.filter(Boolean) ?? [];
const trustProxyHeaders = isNetlify
	? getTrustProxyHeaders()
	: (process.env['NG_TRUST_PROXY_HEADERS']
			?.split(',')
			.map((header) => header.trim())
			.filter(Boolean) ?? false);
const angularAppEngine = new AngularAppEngine({
	allowedHosts: [
		'localhost',
		'127.0.0.1',
		'[::1]',
		'simui.dev',
		'www.simui.dev',
		...(isNetlify ? getAllowedHosts() : []),
		...configuredHosts,
	],
	trustProxyHeaders,
});

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
	const response = await angularAppEngine.handle(request, getContext());
	if (!response) return new Response('Not found', { status: 404, headers: { 'Cache-Control': 'no-cache' } });

	// Revalidate documents after deployments. Preserve private client-route policies.
	if (!response.headers.has('Cache-Control')) response.headers.set('Cache-Control', 'no-cache');
	return response;
}

// Web-standard entry point used by the Angular CLI and Netlify runtime.
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);

const app = express();
const staticAssets = express.static(browserDistFolder, {
	index: false,
	redirect: false,
	setHeaders: (res, filePath) => {
		const fingerprinted = /-[a-z0-9]{8}\.(?:js|css|woff2?)$/i.test(basename(filePath));
		res.setHeader('Cache-Control', fingerprinted ? 'public, max-age=31536000, immutable' : 'no-cache');
	},
});

// Directory requests go through Angular so it can select the correct rendering mode.
app.use(staticAssets);

app.use((req, res, next) => {
	netlifyAppEngineHandler(createWebRequestFromNodeRequest(req, trustProxyHeaders))
		.then((response) => writeResponseToNodeResponse(response, res))
		.catch(next);
});

if (isMainModule(import.meta.url)) {
	const port = process.env['PORT'] || 4000;
	app.listen(port, () => console.log(`Node Express server listening on http://localhost:${port}`));
}

export default app;
