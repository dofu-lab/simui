const fs = require('node:fs');
const path = require('node:path');

const SITE_ORIGIN = 'https://simui.dev';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const HOME_CONSTANT = path.join(process.cwd(), 'src/app/features/component-showcase/home-catalog.ts');
const OUTPUT_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

const STATIC_ROUTES = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/introduction', changefreq: 'monthly', priority: '0.9' },
	{ path: '/changelog', changefreq: 'monthly', priority: '0.8' },
	{ path: '/theme-editor', changefreq: 'weekly', priority: '0.8' },
	{ path: '/pricing', changefreq: 'monthly', priority: '0.5' },
	{ path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.2' },
	{ path: '/privacy-policy', changefreq: 'yearly', priority: '0.2' },
];

function readComponentRoutes() {
	const source = fs.readFileSync(HOME_CONSTANT, 'utf8');
	const routes = [...source.matchAll(/path:\s*'components\/([^']+)'/g)]
		.map((match) => match[1])
		.sort((a, b) => a.localeCompare(b));

	return [...new Set(routes)].map((route) => ({
		path: `/components/${route}`,
		changefreq: 'monthly',
		priority: '0.7',
	}));
}

function xmlEscape(value) {
	return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function renderUrl({ path: routePath, changefreq, priority }) {
	return `  <url>
    <loc>${xmlEscape(`${SITE_ORIGIN}${routePath}`)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
	const urls = [...STATIC_ROUTES, ...readComponentRoutes()];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(renderUrl).join('\n')}
</urlset>
`;

	fs.mkdirSync(PUBLIC_DIR, { recursive: true });
	fs.writeFileSync(OUTPUT_PATH, xml);
	console.log(`Generated ${OUTPUT_PATH} with ${urls.length} URLs.`);
}

main();
