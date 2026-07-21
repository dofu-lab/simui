import { Component, computed, inject, input } from '@angular/core';
import { AppearanceService } from '@core/services';
import { ThemePreset } from '@shared/types';

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
	public readonly preset = input.required<ThemePreset | undefined>();
	private readonly appearanceService = inject(AppearanceService);

	protected readonly appearance = computed(() => this.appearanceService.appearance());
	protected readonly currentPreset = computed(() => {
		const appearance = this.appearance();

		if (!appearance) {
			return;
		}

		return this.preset()?.styles[appearance];
	});
}
