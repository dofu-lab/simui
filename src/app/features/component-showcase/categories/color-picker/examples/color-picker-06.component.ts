import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SimColorPickerImports } from '@sim/color-picker';

const PRESETS = [
	'#0A0A0A',
	'#171717',
	'#262626',
	'#404040',
	'#525252',
	'#737373',
	'#A3A3A3',
	'#D4D4D4',
	'#E5E5E5',
	'#F5F5F5',
	'#FAFAFA',
	'#FFFFFF',
] as const;

@Component({
	selector: 'sim-color-picker-06',
	imports: [SimColorPickerImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-color-picker
			class="w-[380px] max-w-[calc(100vw-2rem)] gap-3 rounded-2xl p-3"
			[(value)]="value"
			[format]="'hex'"
			[presets]="presets">
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
	protected readonly value = signal('#404040');
	protected readonly presets = PRESETS;
}
