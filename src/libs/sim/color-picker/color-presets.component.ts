import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { classes } from '@spartan-ng/helm/utils';
import { injectColorPicker } from './color-picker.token';
import type { ColorPickerPreset } from './type';
import { colorsEqual, formatColor, parseColor } from './utils';

@Component({
	selector: 'sim-color-presets',
	imports: [HlmButtonImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'data-slot': 'color-presets',
	},
	template: `
		<div class="flex items-center justify-between gap-2">
			<span class="text-muted-foreground flex items-center gap-1 text-xs font-medium">
				{{ label() }}
				@if (showLabelChevron()) {
					<span aria-hidden="true" class="size-1.5 -translate-y-px rotate-45 border-e border-b"></span>
				}
			</span>
			<button hlmBtn variant="ghost" size="xs" aria-label="Add current color to presets" (click)="addCurrentColor()">
				<span aria-hidden="true">+</span>
				Add
			</button>
		</div>
		<div class="flex flex-wrap gap-2">
			@for (preset of picker.presets(); track $index) {
				<button
					type="button"
					data-slot="color-preset"
					class="ring-ring size-6 rounded-sm border shadow-xs transition-transform outline-none hover:scale-110 focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none"
					[style.background]="preset"
					[attr.aria-label]="'Select ' + preset"
					[attr.aria-pressed]="isSelected(preset)"
					(click)="select(preset)"></button>
			}
		</div>
	`,
})
export class ColorPresetsComponent {
	/** The heading displayed above the preset swatches. */
	public readonly label = input('Presets');
	/** Whether to show a decorative collection chevron beside the heading. */
	public readonly showLabelChevron = input(false, { transform: booleanAttribute });

	protected readonly picker = injectColorPicker();

	constructor() {
		classes(() => 'grid gap-2');
	}

	protected select(preset: ColorPickerPreset): void {
		const parsed = parseColor(preset, this.picker.state().h);
		if (parsed) this.picker.commit({ ...parsed, a: this.picker.state().a });
	}

	protected addCurrentColor(): void {
		const currentColor = this.picker.state();
		const presets = this.picker.presets();
		const alreadySaved = presets.some((preset) => {
			const parsed = parseColor(preset, currentColor.h);
			return parsed ? colorsEqual(parsed, currentColor, 0.5) : false;
		});

		if (!alreadySaved) this.picker.presets.set([...presets, formatColor(currentColor, 'hex')]);
	}

	protected isSelected(preset: ColorPickerPreset): boolean {
		const parsed = parseColor(preset, this.picker.state().h);
		return parsed ? colorsEqual({ ...parsed, a: this.picker.state().a }, this.picker.state(), 0.5) : false;
	}
}
