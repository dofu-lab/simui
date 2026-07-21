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
	selector: 'sim-color-picker-03',
	imports: [SimColorPickerImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-color-picker class="w-[248px] gap-3 rounded-xl p-3" [(value)]="value" [format]="'hex'" [presets]="presets">
			<sim-color-presets class="**:data-[slot=color-preset]:rounded-full" />

			<div class="flex items-center justify-between gap-2">
				<span class="text-sm font-medium">Custom</span>
				<sim-color-value-editor class="[&>label]:sr-only" [showFormat]="false" [showOpacity]="false" />
			</div>
		</sim-color-picker>
	`,
})
export class ColorPicker03Component {
	protected readonly value = signal('#404040');
	protected readonly presets = PRESETS;
}
