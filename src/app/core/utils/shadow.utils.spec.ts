import { getShadowMap, applyShadowVariablesToElement, ShadowStyles } from './shadow.utils';
import { ThemeStyleProps } from '@/app/types';

describe('Shadow Utils', () => {
	describe('getShadowMap', () => {
		it('should return a shadow map with all shadow variants', () => {
			const result = getShadowMap({});

			expect(result).toBeDefined();
			expect(result['shadow-2xs']).toBeDefined();
			expect(result['shadow-xs']).toBeDefined();
			expect(result['shadow-sm']).toBeDefined();
			expect(result['shadow']).toBeDefined();
			expect(result['shadow-md']).toBeDefined();
			expect(result['shadow-lg']).toBeDefined();
			expect(result['shadow-xl']).toBeDefined();
			expect(result['shadow-2xl']).toBeDefined();
		});

		it('should use default values when no styles are provided', () => {
			const result = getShadowMap({});

			// Default shadow-color is #000000, which converts to "0 0% 0%" in HSL
			expect(result['shadow-xs']).toContain('hsl(0 0% 0%');
		});

		it('should use custom shadow color when provided', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': '#ff0000',
			};
			const result = getShadowMap(styles);

			// Red in HSL is approximately "0 100% 50%"
			expect(result['shadow-xs']).toContain('hsl(0 100% 50%');
		});

		it('should use custom opacity when provided', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-opacity': '0.5',
			};
			const result = getShadowMap(styles);

			// shadow-xs uses 0.5 opacity multiplier, so 0.5 * 0.5 = 0.25
			expect(result['shadow-xs']).toContain('/ 0.25)');
		});

		it('should use custom blur when provided', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-blur': '10px',
			};
			const result = getShadowMap(styles);

			expect(result['shadow-xs']).toContain('10px');
		});

		it('should use custom spread when provided', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-spread': '5px',
			};
			const result = getShadowMap(styles);

			expect(result['shadow-xs']).toContain('5px');
		});

		it('should use custom offset-x when provided', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-offset-x': '10px',
			};
			const result = getShadowMap(styles);

			expect(result['shadow-xs']).toMatch(/^10px/);
		});

		it('should use custom offset-y when provided', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-offset-y': '10px',
			};
			const result = getShadowMap(styles);

			expect(result['shadow-xs']).toContain('10px');
		});

		it('should add px suffix to values without units', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-blur': '5',
				'shadow-offset-y': '2',
			};
			const result = getShadowMap(styles);

			expect(result['shadow-xs']).toContain('5px');
			expect(result['shadow-xs']).toContain('2px');
		});

		it('should not add px suffix to zero values', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-offset-x': '0',
			};
			const result = getShadowMap(styles);

			expect(result['shadow-xs']).toMatch(/^0\s/);
		});

		it('should apply opacity multiplier correctly for different shadow sizes', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-opacity': '0.1',
			};
			const result = getShadowMap(styles);

			// shadow-2xs and shadow-xs use 0.5 multiplier: 0.1 * 0.5 = 0.05
			expect(result['shadow-2xs']).toContain('/ 0.05)');
			expect(result['shadow-xs']).toContain('/ 0.05)');

			// shadow-2xl uses 2.5 multiplier: 0.1 * 2.5 = 0.25
			expect(result['shadow-2xl']).toContain('/ 0.25)');
		});

		it('should generate two-layer shadows for sm, default, md, lg, xl variants', () => {
			const result = getShadowMap({});

			// Two-layer shadows have a comma separating them
			expect(result['shadow-sm']).toContain(',');
			expect(result['shadow']).toContain(',');
			expect(result['shadow-md']).toContain(',');
			expect(result['shadow-lg']).toContain(',');
			expect(result['shadow-xl']).toContain(',');
		});

		it('should generate single-layer shadows for 2xs, xs, 2xl variants', () => {
			const result = getShadowMap({});

			// Single-layer shadows don't have a comma
			expect(result['shadow-2xs']).not.toContain(',');
			expect(result['shadow-xs']).not.toContain(',');
			expect(result['shadow-2xl']).not.toContain(',');
		});

		it('should handle all styles together', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': '#0000ff',
				'shadow-opacity': '0.2',
				'shadow-blur': '8px',
				'shadow-spread': '2px',
				'shadow-offset-x': '4px',
				'shadow-offset-y': '6px',
			};
			const result = getShadowMap(styles);

			expect(result['shadow-xs']).toBeDefined();
			expect(result['shadow-xs']).toContain('4px'); // offset-x
			expect(result['shadow-xs']).toContain('6px'); // offset-y
			expect(result['shadow-xs']).toContain('8px'); // blur
			expect(result['shadow-xs']).toContain('2px'); // spread
		});
	});

	describe('applyShadowVariablesToElement', () => {
		let mockElement: HTMLElement;

		beforeEach(() => {
			mockElement = document.createElement('div');
		});

		it('should apply shadow CSS variables to the element', () => {
			applyShadowVariablesToElement(mockElement, {});

			expect(mockElement.style.getPropertyValue('--shadow-2xs')).toBeTruthy();
			expect(mockElement.style.getPropertyValue('--shadow-xs')).toBeTruthy();
			expect(mockElement.style.getPropertyValue('--shadow-sm')).toBeTruthy();
			expect(mockElement.style.getPropertyValue('--shadow')).toBeTruthy();
			expect(mockElement.style.getPropertyValue('--shadow-md')).toBeTruthy();
			expect(mockElement.style.getPropertyValue('--shadow-lg')).toBeTruthy();
			expect(mockElement.style.getPropertyValue('--shadow-xl')).toBeTruthy();
			expect(mockElement.style.getPropertyValue('--shadow-2xl')).toBeTruthy();
		});

		it('should apply custom shadow styles to the element', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': '#ff0000',
				'shadow-opacity': '0.3',
			};

			applyShadowVariablesToElement(mockElement, styles);

			const shadowXs = mockElement.style.getPropertyValue('--shadow-xs');
			expect(shadowXs).toContain('hsl(0 100% 50%');
		});

		it('should overwrite existing shadow variables', () => {
			mockElement.style.setProperty('--shadow-xs', 'old-value');

			applyShadowVariablesToElement(mockElement, {});

			const newValue = mockElement.style.getPropertyValue('--shadow-xs');
			expect(newValue).not.toBe('old-value');
		});
	});

	describe('Color conversion edge cases', () => {
		it('should handle invalid color gracefully', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': 'invalid-color',
			};
			const result = getShadowMap(styles);

			// Should fallback to "0 0% 0%" (black)
			expect(result['shadow-xs']).toContain('hsl(0 0% 0%');
		});

		it('should handle RGB color format', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': 'rgb(255, 0, 0)',
			};
			const result = getShadowMap(styles);

			// Red in HSL
			expect(result['shadow-xs']).toContain('hsl(0 100% 50%');
		});

		it('should handle HSL color format', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': 'hsl(120, 100%, 50%)',
			};
			const result = getShadowMap(styles);

			// Green in HSL
			expect(result['shadow-xs']).toContain('hsl(120 100% 50%');
		});

		it('should handle named colors', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': 'blue',
			};
			const result = getShadowMap(styles);

			// Blue in HSL is approximately "240 100% 50%"
			expect(result['shadow-xs']).toContain('hsl(240 100% 50%');
		});

		it('should handle empty string for shadow-color', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-color': '',
			};
			const result = getShadowMap(styles);

			// Should use default black color
			expect(result['shadow-xs']).toBeDefined();
		});
	});

	describe('Second layer shadow calculations', () => {
		it('should calculate spread correctly for second layer (spread - 1)', () => {
			const styles: Partial<ThemeStyleProps> = {
				'shadow-spread': '5px',
			};
			const result = getShadowMap(styles);

			// The second layer should have spread of 4px (5 - 1)
			const shadowSm = result['shadow-sm'];
			const layers = shadowSm.split(',');
			expect(layers.length).toBe(2);
			expect(layers[1]).toContain('4px');
		});

		it('should have different blur values for different shadow sizes in second layer', () => {
			const result = getShadowMap({});

			// shadow-sm uses 2px blur for second layer
			expect(result['shadow-sm'].split(',')[1]).toContain('2px');

			// shadow-md uses 4px blur for second layer
			expect(result['shadow-md'].split(',')[1]).toContain('4px');

			// shadow-lg uses 6px blur for second layer
			expect(result['shadow-lg'].split(',')[1]).toContain('6px');

			// shadow-xl uses 10px blur for second layer
			expect(result['shadow-xl'].split(',')[1]).toContain('10px');
		});
	});
});
