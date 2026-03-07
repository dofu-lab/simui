import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

// Basic auth guard for non-production environments (e.g. integration)
// Set BASIC_AUTH_USER and BASIC_AUTH_PASSWORD in Netlify env vars to enable.
if (process.env['BASIC_AUTH_USER'] && process.env['BASIC_AUTH_PASSWORD']) {
  app.use((req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
      const encoded = authHeader.split(' ')[1];
      const [user, pass] = Buffer.from(encoded, 'base64').toString().split(':');
      if (user === process.env['BASIC_AUTH_USER'] && pass === process.env['BASIC_AUTH_PASSWORD']) {
        return next();
      }
    }
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted"');
    res.status(401).send('Unauthorized');
  });
}

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
	'**',
	express.static(browserDistFolder, {
		maxAge: '1y',
		index: 'index.html',
	}),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
	const { protocol, originalUrl, baseUrl, headers } = req;

	commonEngine
		.render({
			bootstrap,
			documentFilePath: indexHtml,
			url: `${protocol}://${headers.host}${originalUrl}`,
			publicPath: browserDistFolder,
			providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
		})
		.then((html) => res.send(html))
		.catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
	const port = process.env['PORT'] || 4000;
	app.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
	return await render(commonEngine);
}

export default app;
