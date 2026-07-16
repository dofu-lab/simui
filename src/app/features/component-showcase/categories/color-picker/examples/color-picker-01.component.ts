import { Component, signal } from '@angular/core';
import { type ColorPickerFormat, SimColorPickerImports } from '@sim/color-picker';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-color-picker-01',
	imports: [SimColorPickerImports, HlmButtonImports, HlmPopoverImports],
	template: `
		<hlm-popover sideOffset="8">
			<button
				hlmBtn
				hlmPopoverTrigger
				type="button"
				variant="outline"
				class="h-10 min-w-52 justify-start gap-3 px-3 font-mono text-xs"
				aria-label="Open color picker">
				<span class="size-5 rounded-sm border shadow-xs" [style.background]="value()"></span>
				<span class="truncate">{{ value() }}</span>
			</button>
			<div *hlmPopoverPortal="let ctx" class="w-auto max-w-[calc(100vw-1rem)] bg-transparent p-0 shadow-none ring-0">
				<sim-color-picker [(value)]="value" [(format)]="format">
					<sim-color-area />
					<sim-color-adjustment-controls />
					<sim-color-value-editor />
					<sim-color-presets />
				</sim-color-picker>
			</div>
		</hlm-popover>
	`,
})
export class ColorPicker01Component {
	protected readonly value = signal('#7F56D9');
	protected readonly format = signal<ColorPickerFormat>('hex');
}
