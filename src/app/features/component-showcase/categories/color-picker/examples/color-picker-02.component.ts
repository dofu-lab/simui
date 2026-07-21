import { Component, computed, signal } from '@angular/core';
import { formatColor, parseColor, SimColorPickerImports } from '@sim/color-picker';

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
	selector: 'sim-color-picker-02',
	imports: [SimColorPickerImports],
	template: `
		<sim-color-picker class="w-[220px] gap-4 p-1 pb-4" [(value)]="value" [format]="'hex'" [presets]="presets">
			<div
				class="flex h-32 items-center justify-center rounded-xl border border-black/10 font-mono text-xl font-semibold text-white shadow-xs"
				[style.background]="value()"
				aria-live="polite">
				<span class="sr-only">Selected color:</span>
				<span aria-hidden="true" class="text-white/50">{{ displayValue().slice(0, 1) }}</span>
				<span>{{ displayValue().slice(1) }}</span>
			</div>

			<sim-color-presets class="mx-3 **:data-[slot=color-preset]:rounded-full [&>span]:sr-only" />

			<sim-color-value-editor class="mx-3 w-auto [&_hlm-native-select]:hidden [&_label]:sr-only [&>div]:grid-cols-1" />
		</sim-color-picker>
	`,
})
export class ColorPicker02Component {
	protected readonly value = signal('#404040');
	protected readonly presets = PRESETS;
	protected readonly displayValue = computed(() => {
		const parsed = parseColor(this.value());
		return parsed ? formatColor(parsed, 'hex').toUpperCase() : this.value();
	});
}
