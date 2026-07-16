import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SimColorPickerImports } from '@sim/color-picker';

const SAVED_COLORS = [
	'#171717',
	'#262626',
	'#404040',
	'#525252',
	'#737373',
	'#A3A3A3',
	'#D4D4D4',
	'#FFFFFF',
	'#16A34A',
	'#2563EB',
	'#4F46E5',
	'#9333EA',
	'#C026D3',
	'#DB2777',
	'#DC2626',
	'#EA580C',
] as const;

@Component({
	selector: 'sim-color-picker-04',
	imports: [SimColorPickerImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-color-picker
			class="w-[248px] gap-0 rounded-xl p-[15px]"
			[(value)]="value"
			[format]="'hex'"
			[(presets)]="savedColors">
			<sim-color-presets label="Saved" showLabelChevron class="gap-3 **:data-[slot=color-preset]:rounded-full" />

			<sim-color-value-editor class="mt-4 gap-0 [&>label]:sr-only" [showFormat]="false" />
		</sim-color-picker>
	`,
})
export class ColorPicker04Component {
	protected readonly value = signal('#171717');
	protected readonly savedColors = signal<readonly string[]>(SAVED_COLORS);
}
