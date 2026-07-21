import type { ColorPickerPreset } from './type';

export const COLOR_PICKER_DEFAULT_PRESETS: readonly ColorPickerPreset[] = [
	'#ffffff',
	'#f43f5e',
	'#f97316',
	'#facc15',
	'#22c55e',
	'#06b6d4',
	'#3b82f6',
	'#7f56d9',
	'#d946ef',
	'#111827',
] as const;

export const COLOR_PICKER_KEYBOARD_STEP = 1;
export const COLOR_PICKER_KEYBOARD_LARGE_STEP = 10;
