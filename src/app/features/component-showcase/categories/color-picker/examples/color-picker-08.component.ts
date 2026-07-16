import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { type ColorPickerFormat, SimColorPickerImports } from '@sim/color-picker';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-color-picker-08',
	imports: [SimColorPickerImports, HlmButtonImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-color-picker
			class="w-[380px] max-w-[calc(100vw-2rem)] gap-3 rounded-2xl p-3"
			[(value)]="value"
			[format]="'hex'">
			<sim-color-area />

			<div class="grid gap-2">
				<span class="text-sm font-medium">Opacity</span>
				<sim-color-adjustment-controls />
			</div>

			<sim-color-value-editor class="gap-0 [&>label]:sr-only" />

			<sim-color-presets
				label="Saved"
				class="**:data-[slot=color-preset]:size-5 **:data-[slot=color-preset]:rounded-full" />
		</sim-color-picker>
	`,
})
export class ColorPicker08Component {
	protected readonly value = signal('#4F46E5');
	protected readonly format = signal<ColorPickerFormat>('hex');
}
