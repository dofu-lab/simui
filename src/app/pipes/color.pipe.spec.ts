import { TestBed } from '@angular/core/testing';
import { ColorPipe } from './color.pipe';
import { ColorType } from '../types';

describe('ColorPipe', () => {
	let pipe: ColorPipe;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		pipe = new ColorPipe();
	});

	it('should create', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return null when color is null', () => {
		const result = pipe.transform(null, 'hsl');
		expect(result).toBeNull();
	});

	it('should return undefined when color is undefined', () => {
		const result = pipe.transform(undefined, 'hsl');
		expect(result).toBeUndefined();
	});

	it('should return original color when colorType is default', () => {
		const color = '#ff0000';
		const result = pipe.transform(color, 'hex' as ColorType);
		expect(result).toBe(color);
	});

	describe('HSL conversion', () => {
		it('should convert hex color to HSL format', () => {
			const result = pipe.transform('#ff0000', 'hsl');
			expect(result).toMatch(/^hsl\(\d+,\s*\d+%,\s*\d+%\)$/);
		});

		it('should convert RGB color to HSL format', () => {
			const result = pipe.transform('rgb(255, 0, 0)', 'hsl');
			expect(result).toMatch(/^hsl\(\d+,\s*\d+%,\s*\d+%\)$/);
		});
	});

	describe('RGB conversion', () => {
		it('should convert hex color to RGB format', () => {
			const result = pipe.transform('#ff0000', 'rgb');
			expect(result).toMatch(/^rgb\(\d+,\s*\d+,\s*\d+\)$/);
		});

		it('should convert HSL color to RGB format', () => {
			const result = pipe.transform('hsl(0, 100%, 50%)', 'rgb');
			expect(result).toMatch(/^rgb\(\d+,\s*\d+,\s*\d+\)$/);
		});
	});

	describe('OKLCH conversion', () => {
		it('should convert hex color to OKLCH format', () => {
			const result = pipe.transform('#ff0000', 'oklch');
			expect(result).toMatch(/^oklch\([\d.]+\s+[\d.]+\s+[\d.]+\)$/);
		});

		it('should return original color if OKLCH conversion fails', () => {
			const invalidColor = 'invalid-color';
			const result = pipe.transform(invalidColor, 'oklch');
			expect(result).toBe(invalidColor);
		});
	});

	describe('Color conversion accuracy', () => {
		it('should convert red correctly to HSL', () => {
			const result = pipe.transform('#ff0000', 'hsl');
			expect(result).toBe('hsl(0, 100%, 50%)');
		});

		it('should convert red correctly to RGB', () => {
			const result = pipe.transform('#ff0000', 'rgb');
			expect(result).toBe('rgb(255, 0, 0)');
		});

		it('should convert white correctly to HSL', () => {
			const result = pipe.transform('#ffffff', 'hsl');
			expect(result).toBe('hsl(0, 0%, 100%)');
		});

		it('should convert black correctly to RGB', () => {
			const result = pipe.transform('#000000', 'rgb');
			expect(result).toBe('rgb(0, 0, 0)');
		});
	});

	describe('Edge cases', () => {
		it('should handle empty string', () => {
			const result = pipe.transform('', 'hsl');
			expect(result).toBe('');
		});

		it('should handle invalid color gracefully', () => {
			const result = pipe.transform('not-a-color', 'hsl');
			expect(result).toBeDefined();
		});
	});
});