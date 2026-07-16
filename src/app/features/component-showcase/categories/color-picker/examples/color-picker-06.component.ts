import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SimColorPickerImports } from '@sim/color-picker';

@Component({
	selector: 'sim-color-picker-06',
	imports: [SimColorPickerImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-color-picker
			class="w-[380px] max-w-[calc(100vw-2rem)] gap-3 rounded-2xl p-3"
			[(value)]="value"
			[format]="'hex'">
			<sim-color-palette />

			<div class="grid gap-2">
				<span class="text-sm font-medium">Opacity</span>
				<sim-color-adjustment-controls [showEyeDropper]="false" [showHue]="false" />
			</div>

			<sim-color-value-editor class="gap-0 [&>label]:sr-only" />

			<sim-color-presets
				label="Saved"
				class="**:data-[slot=color-preset]:size-5 **:data-[slot=color-preset]:rounded-full" />
		</sim-color-picker>
	`,
})
export class ColorPicker06Component {
	protected readonly value = signal('#4F46E5');
}
