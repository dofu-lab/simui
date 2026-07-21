import { converter, parse } from 'culori';
import type { ColorPickerFormat, ColorPickerHsva } from './type';

const toHsv = converter('hsv');
const toRgb = converter('rgb');
const toHsl = converter('hsl');
const toOklch = converter('oklch');

export function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

export function normalizeHue(hue: number): number {
	if (!Number.isFinite(hue)) return 0;
	return ((hue % 360) + 360) % 360;
}

export function clampHsva(color: ColorPickerHsva): ColorPickerHsva {
	return {
		h: normalizeHue(color.h),
		s: clamp(color.s, 0, 100),
		v: clamp(color.v, 0, 100),
		a: clamp(color.a, 0, 1),
	};
}

export function parseColor(value: string, fallbackHue = 0): ColorPickerHsva | null {
	try {
		const parsed = parse(value.trim());
		if (!parsed) return null;

		const hsv = toHsv(parsed);
		/* istanbul ignore next -- Culori converts every color mode returned by parse() to HSV. */
		if (!hsv) return null;

		return clampHsva({
			h: hsv.h ?? fallbackHue,
			s: hsv.s * 100,
			v: hsv.v * 100,
			a: hsv.alpha ?? 1,
		});
	} catch {
		return null;
	}
}

/** Formats a normalized HSVA color as one of the color picker's public formats. */
export function formatColor(color: ColorPickerHsva, format: ColorPickerFormat): string {
	const hsva = clampHsva(color);
	const culoriColor = {
		mode: 'hsv' as const,
		h: hsva.h,
		s: hsva.s / 100,
		v: hsva.v / 100,
		alpha: hsva.a,
	};

	switch (format) {
		case 'hex': {
			const rgb = toRgb(culoriColor);
			/* istanbul ignore next -- A normalized HSV color is always convertible to RGB. */
			if (!rgb) return '#000000';
			const channels = [rgb.r, rgb.g, rgb.b].map((channel) => toHexByte(channel * 255)).join('');
			const alpha = hsva.a < 1 ? toHexByte(hsva.a * 255) : '';
			return `#${channels}${alpha}`.toUpperCase();
		}
		case 'rgb': {
			const rgb = toRgb(culoriColor);
			/* istanbul ignore next -- A normalized HSV color is always convertible to RGB. */
			if (!rgb) return 'rgb(0 0 0)';
			const channels = [rgb.r, rgb.g, rgb.b].map((channel) => Math.round(clamp(channel, 0, 1) * 255));
			return `rgb(${channels.join(' ')}${formatAlpha(hsva.a)})`;
		}
		case 'hsl': {
			const hsl = toHsl(culoriColor);
			/* istanbul ignore next -- A normalized HSV color is always convertible to HSL. */
			if (!hsl) return 'hsl(0 0% 0%)';
			return `hsl(${round(hsl.h ?? hsva.h, 1)} ${round(hsl.s * 100, 1)}% ${round(hsl.l * 100, 1)}%${formatAlpha(hsva.a)})`;
		}
		case 'oklch': {
			const oklch = toOklch(culoriColor);
			/* istanbul ignore next -- A normalized HSV color is always convertible to OKLCH. */
			if (!oklch) return 'oklch(0 0 0)';
			return `oklch(${round(oklch.l, 4)} ${round(oklch.c, 4)} ${round(oklch.h ?? 0, 2)}${formatAlpha(hsva.a)})`;
		}
	}
}

export function colorsEqual(left: ColorPickerHsva, right: ColorPickerHsva, tolerance = 0.01): boolean {
	return (
		hueDistance(left.h, right.h) <= tolerance &&
		Math.abs(left.s - right.s) <= tolerance &&
		Math.abs(left.v - right.v) <= tolerance &&
		Math.abs(left.a - right.a) <= tolerance
	);
}

function hueDistance(left: number, right: number): number {
	const distance = Math.abs(normalizeHue(left) - normalizeHue(right));
	return Math.min(distance, 360 - distance);
}

function formatAlpha(alpha: number): string {
	return alpha < 1 ? ` / ${round(alpha, 3)}` : '';
}

function toHexByte(value: number): string {
	return Math.round(clamp(value, 0, 255))
		.toString(16)
		.padStart(2, '0');
}

function round(value: number, precision: number): string {
	return Number(value.toFixed(precision)).toString();
}
