import { ChangeDetectionStrategy, Component, computed, linkedSignal, model } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';
import { provideColorPicker, type ColorPickerContext } from './color-picker.token';
import { COLOR_PICKER_DEFAULT_PRESETS } from './constants';
import type { ColorPickerFormat, ColorPickerHsva, ColorPickerPreset } from './type';
import { clampHsva, formatColor, parseColor } from './utils';

const DEFAULT_COLOR: ColorPickerHsva = { h: 258, s: 62, v: 85, a: 1 };

@Component({
	selector: 'sim-color-picker',
	providers: [provideColorPicker(ColorPickerComponent)],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'data-slot': 'color-picker',
	},
	template: `
		<ng-content />
	`,
})
export class ColorPickerComponent implements ColorPickerContext {
	private lastCommittedValue: string | null = null;

	/** The last valid color value, formatted according to `format` after an interaction. */
	public readonly value = model<string>('#7f56d9');
	/** The format used when the picker emits a new value. */
	public readonly format = model<ColorPickerFormat>('hex');
	/** Preset CSS colors available to `sim-color-presets`; supports two-way binding for added colors. */
	public readonly presets = model<readonly ColorPickerPreset[]>(COLOR_PICKER_DEFAULT_PRESETS);

	/** @internal Shared color state for composable color-picker children. */
	public readonly state = linkedSignal<string, ColorPickerHsva>({
		source: () => this.value(),
		computation: (value, previous) => {
			if (value === this.lastCommittedValue && previous) return previous.value;
			return parseColor(value, previous?.value.h ?? DEFAULT_COLOR.h) ?? previous?.value ?? DEFAULT_COLOR;
		},
	});
	/** @internal Editable value shared with `sim-color-value-editor`. */
	public readonly draft = linkedSignal<{ value: string; format: ColorPickerFormat }, string>({
		source: () => ({ value: this.value(), format: this.format() }),
		computation: ({ value, format }) => {
			const parsed = parseColor(value, this.state().h);
			return parsed ? formatColor(parsed, format) : value;
		},
	});
	/** @internal Whether the shared editable value is invalid. */
	public readonly invalidDraft = computed(() => parseColor(this.draft(), this.state().h) === null);

	constructor() {
		classes(
			() =>
				'bg-popover text-popover-foreground border-border flex w-80 flex-col gap-2 rounded-2xl border p-3 shadow-sm',
		);
	}

	/** @internal Commits a child interaction to the public value model. */
	public commit(color: ColorPickerHsva): void {
		const next = clampHsva(color);
		this.state.set(next);
		this.lastCommittedValue = formatColor(next, this.format());
		this.value.set(this.lastCommittedValue);
	}
}
