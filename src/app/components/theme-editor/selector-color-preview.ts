import { ThemeStorageService } from '@/app/core/services';
import { ThemePreset } from '@/app/types';
import { Component, computed, inject, input } from '@angular/core';

@Component({
	selector: 'sim-selector-color-preview',
	template: `
		<div class="border-muted-foreground/45 flex h-fit items-center gap-0.5 rounded-[12px] border p-0.5">
			<div class="border-muted-foreground/45 rounded-[8px] border p-0.5">
				<div class="size-3 rounded-[4px]" [style.backgroundColor]="currentPreset()?.primary"></div>
			</div>
			<div class="border-muted-foreground/45 rounded-[8px] border p-0.5">
				<div class="size-3 rounded-[4px]" [style.backgroundColor]="currentPreset()?.secondary"></div>
			</div>
			<div class="border-muted-foreground/45 rounded-[8px] border p-0.5">
				<div class="size-3 rounded-[4px]" [style.backgroundColor]="currentPreset()?.accent"></div>
			</div>
			<div class="border-muted-foreground/45 rounded-[8px] border p-0.5">
				<div class="size-3 rounded-[4px]" [style.backgroundColor]="currentPreset()?.border"></div>
			</div>
		</div>
	`,
})
export class SelectorColorPreview {
	private readonly themeStorage = inject(ThemeStorageService);
	public readonly preset = input.required<ThemePreset | undefined>();
	protected readonly appearance = computed(() => this.themeStorage.appearance());
	protected readonly currentPreset = computed(() => {
		const appearance = this.appearance();

		if (!appearance) {
			return;
		}

		return this.preset()?.styles[appearance];
	});
}
