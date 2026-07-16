import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { type ColorPickerFormat, SimColorPickerImports } from '@sim/color-picker';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-color-picker-07',
	imports: [SimColorPickerImports, HlmButtonImports, HlmPopoverImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<hlm-popover sideOffset="8">
			<button
				hlmBtn
				hlmPopoverTrigger
				type="button"
				variant="outline"
				class="h-10 min-w-52 justify-start gap-3 px-3 font-mono text-xs"
				aria-label="Open color palette">
				<span class="size-5 rounded-sm border shadow-xs" [style.background]="value()"></span>
				<span class="truncate">{{ value() }}</span>
			</button>

			<div *hlmPopoverPortal="let ctx" class="w-auto max-w-[calc(100vw-1rem)] bg-transparent p-0 shadow-none ring-0">
				<sim-color-picker
					class="w-[380px] max-w-[calc(100vw-1rem)] gap-4 rounded-2xl p-5"
					[(value)]="value"
					[(format)]="format">
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
			</div>
		</hlm-popover>
	`,
})
export class ColorPicker07Component {
	protected readonly value = signal('#4F46E5');
	protected readonly format = signal<ColorPickerFormat>('hex');
}
