export const SEO_SITE_NAME = 'SimUI';
export const SEO_SITE_ORIGIN = 'https://simui.dev';
export const SEO_DEFAULT_IMAGE = '/assets/logos/logo-with-bg.png';
export const SEO_DEFAULT_TITLE = 'SimUI - Angular UI Components Built With Spartan UI';
export const SEO_DEFAULT_DESCRIPTION =
	'SimUI is a free, open-source collection of copy-paste Angular UI components built with Spartan UI and Tailwind CSS.';
export const SEO_DEFAULT_KEYWORDS =
	'simui, angular components, spartan ui, angular ui components, angular component collection, tailwind css, shadcn angular, copy paste components';

export const SEO_ORGANIZATION_SCHEMA = {
	'@type': 'Organization',
	'@id': `${SEO_SITE_ORIGIN}/#organization`,
	name: SEO_SITE_NAME,
	url: SEO_SITE_ORIGIN,
	logo: `${SEO_SITE_ORIGIN}${SEO_DEFAULT_IMAGE}`,
	sameAs: ['https://github.com/dofu-lab/simui', 'https://x.com/PhuongTranDong', 'https://spartan.ng/'],
};

export const SEO_SOURCE_CODE_SCHEMA = {
	'@type': 'SoftwareSourceCode',
	'@id': `${SEO_SITE_ORIGIN}/#source-code`,
	name: `${SEO_SITE_NAME} Angular component collection`,
	codeRepository: 'https://github.com/dofu-lab/simui',
	programmingLanguage: ['TypeScript', 'HTML', 'CSS'],
	runtimePlatform: 'Angular',
	license: 'https://github.com/dofu-lab/simui/blob/main/LICENSE',
	description: SEO_DEFAULT_DESCRIPTION,
};
