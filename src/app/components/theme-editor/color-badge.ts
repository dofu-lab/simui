import { ColorService } from '@/app/core/services/color.service';
import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { Component, computed, inject, input } from '@angular/core';

@Component({
	selector: 'sim-color-badge',
	providers: [ColorService],
	template: `
		<div class="border-border flex items-center gap-2 rounded-[12px] border p-[3px] pr-[6px]">
			<div class="rounded-[8px] border p-[3px]">
				<div class="size-6 rounded-[4px]" [style.backgroundColor]="color()"></div>
			</div>
			<div class="text-foreground text-sm font-medium">{{ formattedColor() }}</div>
		</div>
	`,
})
export class ColorBadge {
	private readonly themeStorage = inject(ThemeStorageService);
	private readonly colorService = inject(ColorService);
	private readonly colorType = computed(() => this.themeStorage.colorType());

	public readonly color = input.required<string>();

	protected formattedColor = computed(() => this.colorService.convertColor(this.color(), this.colorType()));
}
