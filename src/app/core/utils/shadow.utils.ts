import { ThemeStyleProps } from '@/app/types';
import { converter, formatHsl } from 'culori';

export interface ShadowStyles {
	'shadow-color': string;
	'shadow-opacity': string;
	'shadow-blur': string;
	'shadow-spread': string;
	'shadow-offset-x': string;
	'shadow-offset-y': string;
}

const DEFAULT_SHADOW_STYLES: ShadowStyles = {
	'shadow-color': '#000000',
	'shadow-opacity': '0.1',
	'shadow-blur': '3px',
	'shadow-spread': '0px',
	'shadow-offset-x': '0',
	'shadow-offset-y': '1px',
};

/**
 * Converts a color to HSL format for use in shadow calculations
 * Returns space-separated values like "0 100% 50%" for modern CSS syntax
 */
function colorToHsl(color: string): string {
	try {
		const hslConverter = converter('hsl');
		const hslColor = hslConverter(color);
		if (hslColor) {
			const formatted = formatHsl(hslColor);
			// Extract just the values without "hsl(" and ")"
			const regex = /hsl\(([^)]+)\)/;
			const match = regex.exec(formatted ?? '');
			if (match?.[1]) {
				// Remove commas for modern CSS syntax: "0, 100%, 50%" -> "0 100% 50%"
				return match[1].replaceAll(',', '');
			}
		}
	} catch {
		// Fallback for invalid colors
	}
	return '0 0% 0%';
}

/**
 * Generates a shadow map with all shadow variants based on the current shadow settings
 */
export function getShadowMap(styles: Partial<ThemeStyleProps>): Record<string, string> {
	const shadowStyles: ShadowStyles = {
		'shadow-color': styles['shadow-color'] || DEFAULT_SHADOW_STYLES['shadow-color'],
		'shadow-opacity': styles['shadow-opacity'] || DEFAULT_SHADOW_STYLES['shadow-opacity'],
		'shadow-blur': styles['shadow-blur'] || DEFAULT_SHADOW_STYLES['shadow-blur'],
		'shadow-spread': styles['shadow-spread'] || DEFAULT_SHADOW_STYLES['shadow-spread'],
		'shadow-offset-x': styles['shadow-offset-x'] || DEFAULT_SHADOW_STYLES['shadow-offset-x'],
		'shadow-offset-y': styles['shadow-offset-y'] || DEFAULT_SHADOW_STYLES['shadow-offset-y'],
	};

	const shadowColor = shadowStyles['shadow-color'];
	const hsl = colorToHsl(shadowColor);

	// Ensure values have proper px units
	const ensurePx = (value: string): string => {
		if (value === '0' || value === '') return '0';
		if (value.endsWith('px')) return value;
		return `${value}px`;
	};

	const offsetX = ensurePx(shadowStyles['shadow-offset-x']);
	const offsetY = ensurePx(shadowStyles['shadow-offset-y']);
	const blur = ensurePx(shadowStyles['shadow-blur']);
	const spread = ensurePx(shadowStyles['shadow-spread']);
	const opacity = Number.parseFloat(shadowStyles['shadow-opacity']);

	const color = (opacityMultiplier: number): string => `hsl(${hsl} / ${(opacity * opacityMultiplier).toFixed(2)})`;

	const secondLayer = (fixedOffsetY: string, fixedBlur: string): string => {
		const offsetX2 = offsetX;
		const offsetY2 = fixedOffsetY;
		const blur2 = fixedBlur;
		const spreadValue = Number.parseFloat(spread.replace('px', '') ?? '0') - 1;
		const spread2 = `${spreadValue}px`;
		const color2 = color(1);

		return `${offsetX2} ${offsetY2} ${blur2} ${spread2} ${color2}`;
	};

	// Map shadow names to their CSS variable string structures
	const shadowMap: Record<string, string> = {
		// Single layer shadows
		'shadow-2xs': `${offsetX} ${offsetY} ${blur} ${spread} ${color(0.5)}`,
		'shadow-xs': `${offsetX} ${offsetY} ${blur} ${spread} ${color(0.5)}`,
		'shadow-2xl': `${offsetX} ${offsetY} ${blur} ${spread} ${color(2.5)}`,

		// Two layer shadows
		'shadow-sm': `${offsetX} ${offsetY} ${blur} ${spread} ${color(1)}, ${secondLayer('1px', '2px')}`,
		shadow: `${offsetX} ${offsetY} ${blur} ${spread} ${color(1)}, ${secondLayer('1px', '2px')}`,
		'shadow-md': `${offsetX} ${offsetY} ${blur} ${spread} ${color(1)}, ${secondLayer('2px', '4px')}`,
		'shadow-lg': `${offsetX} ${offsetY} ${blur} ${spread} ${color(1)}, ${secondLayer('4px', '6px')}`,
		'shadow-xl': `${offsetX} ${offsetY} ${blur} ${spread} ${color(1)}, ${secondLayer('8px', '10px')}`,
	};

	return shadowMap;
}

/**
 * Applies shadow CSS variables to an HTML element (typically document.documentElement)
 */
export function applyShadowVariablesToElement(element: HTMLElement, styles: Partial<ThemeStyleProps>): void {
	const shadows = getShadowMap(styles);
	for (const [name, value] of Object.entries(shadows)) {
		element.style.setProperty(`--${name}`, value);
	}
}
