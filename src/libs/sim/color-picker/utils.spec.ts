import { clamp, clampHsva, colorsEqual, formatColor, normalizeHue, parseColor } from './utils';

describe('color picker utilities', () => {
	it('parses supported CSS colors and alpha', () => {
		expect(parseColor('#7f56d9')).toEqual(jasmine.objectContaining({ a: 1 }));
		expect(parseColor('#0f08')?.a).toBeCloseTo(0.533, 2);
		expect(parseColor('rgb(255 0 0 / 25%)')?.a).toBeCloseTo(0.25, 4);
		expect(parseColor('oklch(0.7 0.15 250)')).not.toBeNull();
	});

	it('rejects malformed values without throwing', () => {
		expect(parseColor('')).toBeNull();
		expect(parseColor('not-a-color')).toBeNull();
		expect(() => parseColor('rgb(nope)')).not.toThrow();
	});

	it('preserves the fallback hue for achromatic colors', () => {
		expect(parseColor('#808080', 217)?.h).toBe(217);
	});

	it('clamps channels and wraps hue', () => {
		expect(clampHsva({ h: 370, s: -5, v: 120, a: 2 })).toEqual({ h: 10, s: 0, v: 100, a: 1 });
		expect(clamp(Number.NaN, 5, 10)).toBe(5);
		expect(normalizeHue(Number.POSITIVE_INFINITY)).toBe(0);
	});

	it('compares hues across the zero-degree boundary', () => {
		expect(colorsEqual({ h: 359.9, s: 100, v: 100, a: 1 }, { h: 0.1, s: 100, v: 100, a: 1 }, 0.3)).toBeTrue();
		expect(colorsEqual({ h: 0, s: 0, v: 0, a: 1 }, { h: 1, s: 0, v: 0, a: 1 })).toBeFalse();
	});

	it('returns null when string normalization throws', () => {
		const value = {
			trim: () => {
				throw new Error('invalid string');
			},
		};
		expect(parseColor(value as unknown as string)).toBeNull();
	});

	it('formats all public output formats with normalized alpha', () => {
		const color = { h: 0, s: 100, v: 100, a: 0.5 };
		expect(formatColor(color, 'hex')).toBe('#FF000080');
		expect(formatColor(color, 'rgb')).toBe('rgb(255 0 0 / 0.5)');
		expect(formatColor(color, 'hsl')).toBe('hsl(0 100% 50% / 0.5)');
		expect(formatColor(color, 'oklch')).toMatch(/^oklch\(.+ \/ 0\.5\)$/);
	});

	it('uses six-digit hex at full opacity and survives a round trip', () => {
		const output = formatColor({ h: 258, s: 62, v: 85, a: 1 }, 'hex');
		expect(output).toMatch(/^#[0-9A-F]{6}$/);
		expect(parseColor(output)).not.toBeNull();
	});

	it('uses stable fallback hues when formatting achromatic colors', () => {
		const gray = { h: 217, s: 0, v: 50, a: 1 };
		expect(formatColor(gray, 'hsl')).toContain('217');
		expect(formatColor(gray, 'oklch')).toMatch(/ 0\)$/);
	});
});
