export type ColorPickerFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

export interface ColorPickerHsva {
	readonly h: number;
	readonly s: number;
	readonly v: number;
	readonly a: number;
}

export type ColorPickerPreset = string;
