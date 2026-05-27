import { readdirSync } from 'fs';
import { join } from 'path';

const REGISTRY_DIR = join(process.cwd(), 'public/registry');

function getIds(prefix: string): string[] {
	try {
		return readdirSync(REGISTRY_DIR)
			.filter((f) => !f.startsWith('.') && f.startsWith(`${prefix}-`) && f.endsWith('.json'))
			.map((f) => f.replace('.json', ''))
			.sort();
	} catch {
		return [];
	}
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
	slider: getIds('slider'),
	switch: getIds('switch'),
	tabs: getIds('tabs'),
};
