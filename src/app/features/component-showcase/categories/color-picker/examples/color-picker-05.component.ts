import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SimColorPickerImports } from '@sim/color-picker';

@Component({
	selector: 'sim-color-picker-05',
	imports: [SimColorPickerImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-color-picker class="w-78 gap-3 rounded-xl p-[15px]" [(value)]="value" [format]="'hex'">
			<sim-color-adjustment-controls
				eyeDropperVariant="outline"
				class="items-start **:data-[slot=slider-thumb]:size-5" />

			<sim-color-value-editor class="gap-0 [&>label]:sr-only" [showFormat]="false" />
		</sim-color-picker>
	`,
})
export class ColorPicker05Component {
	protected readonly value = signal('#7F56D9');
}
