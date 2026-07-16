import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorAdjustmentControlsComponent } from './color-adjustment-controls.component';
import { ColorAreaComponent } from './color-area.component';
import { ColorPalette, ColorPaletteComponent } from './color-palette.component';
import { ColorPickerComponent } from './color-picker.component';
import { ColorValueEditorComponent } from './color-value-editor.component';
import { SimColorPickerImports } from './index';

@Component({
	imports: [SimColorPickerImports],
	template: `
		<sim-color-picker [(value)]="value" [(presets)]="presets">
			<sim-color-area />
			<sim-color-adjustment-controls
				[showEyeDropper]="showEyeDropper()"
				[showHue]="showHue()"
				[showOpacity]="showAdjustmentOpacity()" />
			<sim-color-value-editor
				[showFormat]="showFormat()"
				[showValue]="showValue()"
				[showOpacity]="showEditorOpacity()" />
			<sim-color-presets />
			<sim-color-palette [colors]="palette()" />
		</sim-color-picker>
	`,
})
class ColorPickerPartsTestHost {
	readonly value = signal('#7F56D9');
	readonly presets = signal<readonly string[]>(['not-a-color', '#7F56D9']);
	readonly palette = signal<ColorPalette>([
		['#FF0000', '#00FF00'],
		['#0000FF', '#FFFFFF'],
	]);
	readonly showEyeDropper = signal(true);
	readonly showHue = signal(true);
	readonly showAdjustmentOpacity = signal(true);
	readonly showFormat = signal(true);
	readonly showValue = signal(true);
	readonly showEditorOpacity = signal(true);
}

type AreaTestApi = {
	onPointerDown(event: PointerEvent): void;
	onPointerMove(event: PointerEvent): void;
	onPointerEnd(event: PointerEvent): void;
	onLostPointerCapture(event: PointerEvent): void;
	onKeydown(event: KeyboardEvent): void;
};

type AdjustmentTestApi = {
	pickColorFromScreen(): Promise<void>;
	setHue(values: number[]): void;
	setOpacity(values: number[]): void;
};

type ValueEditorTestApi = {
	commitDraft(event?: Event): void;
	setFormat(value: string | null | undefined): void;
	setOpacity(event: Event): void;
};

type PaletteTestApi = {
	onKeydown(event: KeyboardEvent, rowIndex: number, columnIndex: number): void;
};

describe('color picker parts', () => {
	let fixture: ComponentFixture<ColorPickerPartsTestHost>;
	let picker: ColorPickerComponent;
	let area: AreaTestApi;
	let adjustment: AdjustmentTestApi;
	let valueEditor: ValueEditorTestApi;
	let paletteApi: PaletteTestApi;

	beforeEach(async () => {
		TestBed.configureTestingModule({ imports: [ColorPickerPartsTestHost] });
		fixture = TestBed.createComponent(ColorPickerPartsTestHost);
		fixture.detectChanges();
		await fixture.whenStable();

		picker = fixture.debugElement.query(By.directive(ColorPickerComponent)).componentInstance;
		area = fixture.debugElement.query(By.directive(ColorAreaComponent)).componentInstance as AreaTestApi;
		adjustment = fixture.debugElement.query(By.directive(ColorAdjustmentControlsComponent))
			.componentInstance as AdjustmentTestApi;
		valueEditor = fixture.debugElement.query(By.directive(ColorValueEditorComponent))
			.componentInstance as ValueEditorTestApi;
		paletteApi = fixture.debugElement.query(By.directive(ColorPaletteComponent)).componentInstance as PaletteTestApi;
	});

	it('handles every color-area pointer lifecycle branch', () => {
		const setPointerCapture = jasmine.createSpy('setPointerCapture');
		const releasePointerCapture = jasmine.createSpy('releasePointerCapture');
		const target = {
			getBoundingClientRect: () => ({ left: 10, top: 20, width: 100, height: 200 }),
			setPointerCapture,
			hasPointerCapture: () => true,
			releasePointerCapture,
		} as unknown as HTMLElement;
		const pointer = (pointerId: number, clientX = 60, clientY = 70) =>
			({ pointerId, clientX, clientY, currentTarget: target }) as unknown as PointerEvent;

		area.onPointerDown(pointer(1));
		expect(setPointerCapture).toHaveBeenCalledWith(1);
		expect(picker.state().s).toBe(50);
		expect(picker.state().v).toBe(75);

		area.onPointerDown(pointer(2, 100, 100));
		area.onPointerMove(pointer(2, 100, 100));
		expect(picker.state().s).toBe(50);

		area.onPointerMove(pointer(1, 110, 220));
		expect(picker.state().s).toBe(100);
		expect(picker.state().v).toBe(0);
		area.onPointerEnd(pointer(2));
		area.onLostPointerCapture(pointer(2));
		area.onPointerEnd(pointer(1));
		expect(releasePointerCapture).toHaveBeenCalledWith(1);

		(target as unknown as { hasPointerCapture: () => boolean }).hasPointerCapture = () => false;
		area.onPointerDown(pointer(3));
		area.onLostPointerCapture(pointer(3));
		area.onPointerDown(pointer(4));
		area.onPointerEnd(pointer(4));
	});

	it('ignores pointer geometry with either zero dimension', () => {
		const target = {
			getBoundingClientRect: jasmine
				.createSpy('getBoundingClientRect')
				.and.returnValues({ left: 0, top: 0, width: 0, height: 100 }, { left: 0, top: 0, width: 100, height: 0 }),
			setPointerCapture: () => undefined,
			hasPointerCapture: () => false,
		} as unknown as HTMLElement;
		const event = { pointerId: 1, clientX: 50, clientY: 50, currentTarget: target } as unknown as PointerEvent;
		const initial = picker.value();

		area.onPointerDown(event);
		area.onPointerEnd(event);
		area.onPointerDown(event);

		expect(picker.value()).toBe(initial);
	});

	it('handles vertical color-area keys and ignores unrelated keys', () => {
		const down = new KeyboardEvent('keydown', { key: 'ArrowDown', cancelable: true });
		area.onKeydown(down);
		expect(down.defaultPrevented).toBeTrue();
		expect(Math.round(picker.state().v)).toBe(84);

		const up = new KeyboardEvent('keydown', { key: 'ArrowUp', shiftKey: true, cancelable: true });
		area.onKeydown(up);
		expect(Math.round(picker.state().v)).toBe(94);

		const unrelated = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true });
		area.onKeydown(unrelated);
		expect(unrelated.defaultPrevented).toBeFalse();
	});

	it('commits adjustment values, including empty slider payload fallbacks', () => {
		adjustment.setHue([120]);
		expect(picker.state().h).toBe(120);
		adjustment.setHue([]);
		expect(picker.state().h).toBe(120);

		adjustment.setOpacity([25]);
		expect(picker.state().a).toBe(0.25);
		adjustment.setOpacity([]);
		expect(picker.state().a).toBe(0.25);
	});

	it('returns safely when the EyeDropper API is unavailable', async () => {
		const eyeDropperGlobal = globalThis as typeof globalThis & { EyeDropper?: unknown };
		delete eyeDropperGlobal.EyeDropper;

		await adjustment.pickColorFromScreen();

		expect(picker.value()).toBe('#7F56D9');
	});

	it('covers every conditional adjustment and value-editor layout', async () => {
		fixture.componentInstance.showHue.set(false);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity"]')).not.toBeNull();

		fixture.componentInstance.showEyeDropper.set(false);
		fixture.componentInstance.showAdjustmentOpacity.set(false);
		fixture.componentInstance.showFormat.set(false);
		fixture.componentInstance.showEditorOpacity.set(false);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(fixture.nativeElement.querySelector('sim-color-adjustment-controls').classList).toContain('grid-cols-1');
		expect(fixture.nativeElement.querySelector('[aria-label="Color format"]')).toBeNull();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity percentage"]')).toBeNull();

		fixture.componentInstance.showValue.set(false);
		fixture.componentInstance.showFormat.set(true);
		fixture.componentInstance.showEditorOpacity.set(true);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(fixture.nativeElement.querySelector('[aria-label="Opacity percentage"]')).not.toBeNull();
	});

	it('commits valid drafts and ignores invalid format and opacity inputs', () => {
		picker.draft.set('#12345680');
		const submit = new Event('submit', { cancelable: true });
		valueEditor.commitDraft(submit);
		expect(submit.defaultPrevented).toBeTrue();
		expect(picker.value()).toBe('#12345680');

		valueEditor.setFormat('lab');
		valueEditor.setFormat(null);
		expect(picker.format()).toBe('hex');

		valueEditor.setOpacity({ target: { value: '' } } as unknown as Event);
		valueEditor.setOpacity({ target: { value: 'NaN' } } as unknown as Event);
		expect(picker.value()).toBe('#12345680');
	});

	it('handles invalid presets without selecting or deduplicating them', async () => {
		const invalidPreset = fixture.nativeElement.querySelector('[aria-label="Select not-a-color"]') as HTMLButtonElement;
		invalidPreset.click();
		await fixture.whenStable();
		expect(picker.value()).toBe('#7F56D9');

		fixture.componentInstance.value.set('#123456');
		fixture.detectChanges();
		await fixture.whenStable();
		(fixture.nativeElement.querySelector('[aria-label="Add current color to presets"]') as HTMLButtonElement).click();
		await fixture.whenStable();
		expect(fixture.componentInstance.presets()).toContain('#123456');
	});

	it('supports all palette navigation keys and boundary behavior', async () => {
		const swatch = (label: string) =>
			fixture.nativeElement.querySelector(`[aria-label="Select ${label}"]`) as HTMLButtonElement;
		const press = async (button: HTMLButtonElement, key: string, ctrlKey = false) => {
			button.dispatchEvent(new KeyboardEvent('keydown', { key, ctrlKey, bubbles: true, cancelable: true }));
			await fixture.whenStable();
		};

		await press(swatch('#00FF00'), 'ArrowLeft');
		expect(picker.value()).toBe('#FF0000');
		await press(swatch('#FF0000'), 'ArrowUp');
		expect(picker.value()).toBe('#FF0000');
		await press(swatch('#FF0000'), 'ArrowDown');
		expect(picker.value()).toBe('#0000FF');
		await press(swatch('#0000FF'), 'Home');
		expect(picker.value()).toBe('#0000FF');
		await press(swatch('#0000FF'), 'Home', true);
		expect(picker.value()).toBe('#FF0000');
		await press(swatch('#FF0000'), 'End');
		expect(picker.value()).toBe('#00FF00');
		await press(swatch('#00FF00'), 'End', true);
		expect(picker.value()).toBe('#FFFFFF');
		await press(swatch('#FFFFFF'), 'Enter');
		expect(picker.value()).toBe('#FFFFFF');
	});

	it('renders empty and invalid palettes safely', async () => {
		fixture.componentInstance.palette.set([]);
		fixture.detectChanges();
		await fixture.whenStable();
		const palette = fixture.debugElement.query(By.directive(ColorPaletteComponent)).nativeElement as HTMLElement;
		expect(palette.getAttribute('aria-colcount')).toBe('0');
		paletteApi.onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }), 0, 0);

		fixture.componentInstance.palette.set([['not-a-color']]);
		fixture.detectChanges();
		await fixture.whenStable();
		const invalid = fixture.nativeElement.querySelector('[aria-label="Select not-a-color"]') as HTMLButtonElement;
		invalid.click();
		invalid.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
		await fixture.whenStable();
		expect(picker.value()).toBe('#7F56D9');
	});

	it('retains the default and previous state for invalid external values', async () => {
		const invalidFixture = TestBed.createComponent(ColorPickerPartsTestHost);
		invalidFixture.componentInstance.value.set('invalid');
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidPicker = invalidFixture.debugElement.query(By.directive(ColorPickerComponent))
			.componentInstance as ColorPickerComponent;
		expect(invalidPicker.state()).toEqual({ h: 258, s: 62, v: 85, a: 1 });
		expect(invalidPicker.draft()).toBe('invalid');

		invalidFixture.componentInstance.value.set('#00FF00');
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const validState = invalidPicker.state();
		invalidFixture.componentInstance.value.set('still-invalid');
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		expect(invalidPicker.state()).toEqual(validState);
	});
});
