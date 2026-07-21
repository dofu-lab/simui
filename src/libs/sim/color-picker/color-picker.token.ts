import {
	type ExistingProvider,
	inject,
	InjectionToken,
	type ModelSignal,
	type Signal,
	type Type,
	type WritableSignal,
} from '@angular/core';
import type { ColorPickerFormat, ColorPickerHsva, ColorPickerPreset } from './type';

export interface ColorPickerContext {
	readonly format: ModelSignal<ColorPickerFormat>;
	readonly presets: ModelSignal<readonly ColorPickerPreset[]>;
	readonly state: WritableSignal<ColorPickerHsva>;
	readonly draft: WritableSignal<string>;
	readonly invalidDraft: Signal<boolean>;
	commit(color: ColorPickerHsva): void;
}

const COLOR_PICKER = new InjectionToken<ColorPickerContext>('SimColorPicker');

export function provideColorPicker(instance: Type<ColorPickerContext>): ExistingProvider {
	return { provide: COLOR_PICKER, useExisting: instance };
}

export function injectColorPicker(): ColorPickerContext {
	return inject(COLOR_PICKER);
}
