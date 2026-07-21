import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorPickerComponent } from './color-picker.component';
import { SimColorPickerImports } from './index';
import type { ColorPickerFormat } from './type';

@Component({
	imports: [SimColorPickerImports],
	template: `
		<sim-color-picker class="w-96" [(value)]="value" [(format)]="format">
			<sim-color-area class="rounded-none" />
			<sim-color-adjustment-controls
				class="grid-cols-1"
				[showEyeDropper]="showAdjustmentEyeDropper()"
				[showHue]="showAdjustmentHue()"
				[showOpacity]="showAdjustmentOpacity()" />
			<sim-color-value-editor
				class="gap-8"
				[showFormat]="showFormat()"
				[showValue]="showValue()"
				[showOpacity]="showOpacity()" />
			<sim-color-presets class="gap-6" />
		</sim-color-picker>
	`,
})
class ColorPickerTestHost {
	readonly value = signal('#7f56d9');
	readonly format = signal<ColorPickerFormat>('hex');
	readonly showAdjustmentEyeDropper = signal(true);
	readonly showAdjustmentHue = signal(true);
	readonly showAdjustmentOpacity = signal(true);
	readonly showFormat = signal(true);
	readonly showValue = signal(true);
	readonly showOpacity = signal(true);
}

@Component({
	imports: [SimColorPickerImports],
	template: `
		<sim-color-picker>
			<sim-color-presets />
			<sim-color-area />
			<sim-color-value-editor />
		</sim-color-picker>
	`,
})
class ComposedColorPickerTestHost {}

@Component({
	imports: [SimColorPickerImports],
	template: `
		<sim-color-picker [(value)]="value">
			<sim-color-palette />
		</sim-color-picker>
	`,
})
class ColorPaletteTestHost {
	readonly value = signal('#4F46E580');
}

@Component({
	imports: [SimColorPickerImports],
	template: `
		<sim-color-picker [presets]="['#ffffff', '#ffffff']">
			<sim-color-presets />
		</sim-color-picker>
	`,
})
class DuplicatePresetsTestHost {}

describe('ColorPickerComponent', () => {
	let fixture: ComponentFixture<ColorPickerTestHost>;
	let component: ColorPickerComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ColorPickerTestHost, ColorPaletteTestHost, DuplicatePresetsTestHost],
		});
		fixture = TestBed.createComponent(ColorPickerTestHost);
		component = fixture.debugElement.query(By.directive(ColorPickerComponent)).componentInstance;
		fixture.detectChanges();
	});

	it('initializes with the public default value and accessible controls', async () => {
		await fixture.whenStable();
		const surface = fixture.nativeElement.querySelector('[role="slider"]') as HTMLElement;
		expect(component.value()).toBe('#7f56d9');
		expect(surface.getAttribute('aria-label')).toBe('Saturation and brightness');
		expect(surface.getAttribute('aria-valuetext')).toContain('saturation');
		expect(fixture.nativeElement.querySelector('[aria-label="Hue"]')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity"]')).not.toBeNull();
	});

	it('merges consumer classes onto every component host', async () => {
		await fixture.whenStable();

		expect(fixture.nativeElement.querySelector('sim-color-picker').classList).toContain('w-96');
		expect(fixture.nativeElement.querySelector('sim-color-area').classList).toContain('rounded-none');
		expect(fixture.nativeElement.querySelector('sim-color-adjustment-controls').classList).toContain('grid-cols-1');
		expect(fixture.nativeElement.querySelector('sim-color-value-editor').classList).toContain('gap-8');
		expect(fixture.nativeElement.querySelector('sim-color-presets').classList).toContain('gap-6');
	});

	it('sizes the value and opacity inputs with a 65/35 percentage split', async () => {
		await fixture.whenStable();
		const inputGroup = fixture.nativeElement.querySelector('[data-slot="button-group"]') as HTMLElement;

		expect(inputGroup.classList).toContain('grid-cols-[minmax(0,65fr)_minmax(0,35fr)]');
	});

	it('shows a percentage suffix without adding it to the opacity value', async () => {
		await fixture.whenStable();
		const opacityInput = fixture.nativeElement.querySelector('[aria-label="Opacity percentage"]') as HTMLInputElement;
		const inputGroup = opacityInput.closest('hlm-input-group') as HTMLElement;
		const suffix = inputGroup.querySelector('ng-icon');

		expect(opacityInput.value).toBe('100');
		expect(suffix).not.toBeNull();
		expect(opacityInput.value).not.toContain('%');
	});

	it('can show or hide each value-editor input independently', async () => {
		await fixture.whenStable();
		expect(fixture.nativeElement.querySelector('[aria-label="Color format"]')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('[id^="sim-color-picker-value-"]')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity percentage"]')).not.toBeNull();

		fixture.componentInstance.showFormat.set(false);
		fixture.componentInstance.showValue.set(false);
		fixture.componentInstance.showOpacity.set(false);
		fixture.detectChanges();
		await fixture.whenStable();

		expect(fixture.nativeElement.querySelector('[aria-label="Color format"]')).toBeNull();
		expect(fixture.nativeElement.querySelector('[id^="sim-color-picker-value-"]')).toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity percentage"]')).toBeNull();
	});

	it('can show or hide each adjustment control independently', async () => {
		await fixture.whenStable();
		expect(fixture.nativeElement.querySelector('[aria-label="Pick a color from the screen"]')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Hue"]')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity"]')).not.toBeNull();

		fixture.componentInstance.showAdjustmentEyeDropper.set(false);
		fixture.componentInstance.showAdjustmentHue.set(false);
		fixture.componentInstance.showAdjustmentOpacity.set(false);
		fixture.detectChanges();
		await fixture.whenStable();

		expect(fixture.nativeElement.querySelector('[aria-label="Pick a color from the screen"]')).toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Hue"]')).toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity"]')).toBeNull();
	});

	it('renders only projected parts in consumer-defined order', async () => {
		const composedFixture = TestBed.createComponent(ComposedColorPickerTestHost);
		composedFixture.detectChanges();
		await composedFixture.whenStable();

		const picker = composedFixture.nativeElement.querySelector('sim-color-picker') as HTMLElement;
		expect(Array.from(picker.children, (child) => child.localName)).toEqual([
			'sim-color-presets',
			'sim-color-area',
			'sim-color-value-editor',
		]);
		expect(picker.querySelector('sim-color-adjustment-controls')).toBeNull();
	});

	it('synchronizes valid external values without replacing them', async () => {
		component.value.set('rgb(0 255 0 / 0.5)');
		fixture.detectChanges();
		await fixture.whenStable();
		const input = fixture.nativeElement.querySelector('[id^="sim-color-picker-value-"]') as HTMLInputElement;
		expect(input.value).toBe('#00FF0080');
		expect(component.value()).toBe('rgb(0 255 0 / 0.5)');
	});

	it('reformats the same color when the format control changes', async () => {
		await fixture.whenStable();
		const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
		select.value = 'rgb';
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();
		await fixture.whenStable();
		expect(component.format()).toBe('rgb');
		expect(component.value()).toMatch(/^rgb\(/);
	});

	it('selects presets and preserves current opacity', async () => {
		component.value.set('#7F56D980');
		fixture.detectChanges();
		await fixture.whenStable();
		const preset = fixture.nativeElement.querySelector('[aria-label="Select #f43f5e"]') as HTMLButtonElement;
		preset.click();
		fixture.detectChanges();
		await fixture.whenStable();
		expect(component.value()).toMatch(/^#F43F5E8/);
	});

	it('adds the current color to presets without creating duplicates', async () => {
		component.value.set('#123456');
		fixture.detectChanges();
		await fixture.whenStable();
		const addPreset = fixture.nativeElement.querySelector(
			'[aria-label="Add current color to presets"]',
		) as HTMLButtonElement;

		addPreset.click();
		fixture.detectChanges();
		await fixture.whenStable();
		expect(component.presets()).toContain('#123456');

		addPreset.click();
		expect(component.presets().filter((preset) => preset === '#123456')).toHaveSize(1);
	});

	it('picks a screen color and preserves current opacity', async () => {
		const eyeDropperGlobal = globalThis as typeof globalThis & { EyeDropper?: unknown };
		Object.defineProperty(eyeDropperGlobal, 'EyeDropper', {
			configurable: true,
			value: class {
				open(): Promise<{ sRGBHex: string }> {
					return Promise.resolve({ sRGBHex: '#123456' });
				}
			},
		});

		try {
			const eyeDropperFixture = TestBed.createComponent(ColorPickerTestHost);
			const eyeDropper = eyeDropperFixture.debugElement.query(By.directive(ColorPickerComponent))
				.componentInstance as ColorPickerComponent;
			eyeDropper.value.set('#7F56D980');
			eyeDropperFixture.detectChanges();
			await eyeDropperFixture.whenStable();
			eyeDropperFixture.detectChanges();

			const trigger = eyeDropperFixture.nativeElement.querySelector(
				'[aria-label="Pick a color from the screen"]',
			) as HTMLButtonElement;
			expect(trigger).not.toBeNull();
			trigger.click();
			await eyeDropperFixture.whenStable();

			expect(eyeDropper.value()).toBe('#12345680');
		} finally {
			delete eyeDropperGlobal.EyeDropper;
		}
	});

	it('keeps invalid drafts visible and does not emit a new value', async () => {
		await fixture.whenStable();
		const original = component.value();
		const input = fixture.nativeElement.querySelector('[id^="sim-color-picker-value-"]') as HTMLInputElement;
		const preview = input.closest('hlm-input-group')?.querySelector('[aria-hidden="true"]') as HTMLElement;
		const originalPreview = preview.style.background;
		input.value = 'invalid color';
		input.dispatchEvent(new Event('input'));
		input.dispatchEvent(new Event('blur'));
		fixture.detectChanges();
		await fixture.whenStable();
		expect(input.value).toBe('invalid color');
		expect(input.getAttribute('aria-invalid')).toBe('true');
		expect(fixture.nativeElement.textContent).toContain('Enter a valid CSS color.');
		expect(component.value()).toBe(original);
		expect(preview.style.background).toBe(originalPreview);
	});

	it('clamps opacity and normalizes the field even when the color is already fully opaque', async () => {
		await fixture.whenStable();
		const input = fixture.nativeElement.querySelector('[aria-label="Opacity percentage"]') as HTMLInputElement;
		input.value = '150';
		input.dispatchEvent(new Event('change'));
		fixture.detectChanges();
		await fixture.whenStable();

		expect(input.value).toBe('100');
		expect(component.value()).toBe('#7F56D9');
	});

	it('renders duplicate consumer presets without duplicate tracking errors', async () => {
		const duplicateFixture = TestBed.createComponent(DuplicatePresetsTestHost);
		duplicateFixture.detectChanges();
		await duplicateFixture.whenStable();

		expect(duplicateFixture.nativeElement.querySelectorAll('[data-slot="color-preset"]')).toHaveSize(2);
	});

	it('supports small and large keyboard increments on the surface', async () => {
		await fixture.whenStable();
		const surface = fixture.nativeElement.querySelector('[role="slider"]') as HTMLElement;
		const before = Number(surface.getAttribute('aria-valuenow'));
		surface.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
		fixture.detectChanges();
		await fixture.whenStable();
		expect(Number(surface.getAttribute('aria-valuenow'))).toBe(before + 1);
		surface.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', shiftKey: true, bubbles: true }));
		fixture.detectChanges();
		await fixture.whenStable();
		expect(Number(surface.getAttribute('aria-valuenow'))).toBe(before - 9);
	});

	it('renders the designed color palette and marks the current swatch', async () => {
		const paletteFixture = TestBed.createComponent(ColorPaletteTestHost);
		paletteFixture.detectChanges();
		await paletteFixture.whenStable();

		const palette = paletteFixture.nativeElement.querySelector('sim-color-palette') as HTMLElement;
		const selected = palette.querySelector('[aria-selected="true"]') as HTMLButtonElement;

		expect(palette.getAttribute('role')).toBe('grid');
		expect(palette.getAttribute('aria-rowcount')).toBe('11');
		expect(palette.getAttribute('aria-colcount')).toBe('17');
		expect(palette.querySelectorAll('[role="gridcell"]')).toHaveSize(187);
		expect(selected.getAttribute('aria-label')).toBe('Select #4F46E5');
		expect(selected.tabIndex).toBe(0);
	});

	it('selects palette colors with pointer and keyboard while preserving opacity', async () => {
		const paletteFixture = TestBed.createComponent(ColorPaletteTestHost);
		paletteFixture.detectChanges();
		await paletteFixture.whenStable();

		const blue = paletteFixture.nativeElement.querySelector('[aria-label="Select #2563EB"]') as HTMLButtonElement;
		blue.click();
		paletteFixture.detectChanges();
		await paletteFixture.whenStable();
		expect(paletteFixture.componentInstance.value()).toBe('#2563EB80');

		blue.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
		paletteFixture.detectChanges();
		await paletteFixture.whenStable();
		expect(paletteFixture.componentInstance.value()).toBe('#4F46E580');
		expect((paletteFixture.nativeElement.ownerDocument.activeElement as HTMLElement).getAttribute('aria-label')).toBe(
			'Select #4F46E5',
		);
	});
});
