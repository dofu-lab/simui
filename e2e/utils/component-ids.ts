import { readFileSync } from 'fs';
import { join } from 'path';

const manifest = JSON.parse(readFileSync(join(process.cwd(), 'public/registry/manifest.json'), 'utf8')) as {
	latest: string;
	releases: { version: string; components: string[] }[];
};
const latestRelease = manifest.releases.find((release) => release.version === manifest.latest);
if (!latestRelease?.components.length) throw new Error('The latest registry release must contain component IDs.');

function getIds(prefix: string): string[] {
	return latestRelease!.components.filter((id) => id.startsWith(`${prefix}-`)).sort();
}

export const COMPONENT_IDS = {
	accordion: getIds('accordion'),
	alert: getIds('alert'),
	avatar: getIds('avatar'),
	badge: getIds('badge'),
	banner: getIds('banner'),
	breadcrumb: getIds('breadcrumb'),
	button: getIds('button'),
	calendar: getIds('calendar'),
	card: getIds('card'),
	checkbox: getIds('checkbox'),
	'color-picker': getIds('color-picker'),
	dialog: getIds('dialog'),
	dropdown: getIds('dropdown'),
	'event-calendar': getIds('event-calendar'),
	'file-upload': getIds('file-upload'),
	'image-cropper': getIds('image-cropper'),
	input: getIds('input'),
	notification: getIds('notification'),
	pagination: getIds('pagination'),
	popover: getIds('popover'),
	radio: getIds('radio'),
	select: getIds('select'),
	sidebar: getIds('sidebar'),
	slider: getIds('slider'),
	switch: getIds('switch'),
	tabs: getIds('tabs'),
};
