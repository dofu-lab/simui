import { ThemePreset } from '@/app/types';
import { Component, computed, input } from '@angular/core';

@Component({
	selector: 'sim-theme-color-preview',
	template: `
		<div class="flex flex-col items-center gap-1 rounded-[12px] p-[3px]">
			<span class="text-foreground w-full text-left text-sm font-medium">{{ preset()?.label }}</span>
			<div class="flex items-center gap-1 rounded-[12px] border p-[3px]">
				<div class="rounded-[8px] border p-[3px]">
					<div class="size-6 rounded-[4px]" [style.backgroundColor]="currentPreset()?.primary"></div>
				</div>
				<div class="rounded-[8px] border p-[3px]">
					<div class="size-6 rounded-[4px]" [style.backgroundColor]="currentPreset()?.secondary"></div>
				</div>
				<div class="rounded-[8px] border p-[3px]">
					<div class="size-6 rounded-[4px]" [style.backgroundColor]="currentPreset()?.accent"></div>
				</div>
				<div class="rounded-[8px] border p-[3px]">
					<div class="size-6 rounded-[4px]" [style.backgroundColor]="currentPreset()?.border"></div>
				</div>
			</div>
		</div>
	`,
})
export class PresetColorPreview {
	preset = input.required<ThemePreset | undefined>();

	currentPreset = computed(() => this.preset()?.styles.light);
}
