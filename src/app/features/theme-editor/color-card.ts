import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { ColorEditService, ThemeStorageService } from '@core/services';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy, lucideSquarePen } from '@ng-icons/lucide';
import { ColorPipe } from '@shared/pipes';
import { ThemeStyleProps } from '@shared/types';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-color-card',
	imports: [HlmTooltipImports, HlmIconImports, NgIcon, NgClass, HlmButtonImports, ColorPipe],
	providers: [provideIcons({ lucideCopy, lucideCheck, lucideSquarePen })],
	template: `
		<article class="border-border bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm">
			<button
				type="button"
				class="focus-visible:ring-ring relative block h-24 w-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset"
				[style.backgroundColor]="color()"
				[attr.aria-label]="'Edit ' + name()"
				(click)="onEditColor()"></button>

			<div class="border-border border-t px-3 py-2.5">
				<p class="text-sm font-medium">{{ name() }}</p>
				<p class="text-muted-foreground text-xs">Standalone interface token</p>
			</div>

			<div class="border-border flex min-w-0 items-start justify-center gap-2 border-t p-3">
				<p class="text-muted-foreground min-w-0 flex-1 truncate text-xs">
					{{ color() | colorFormatter: colorType() }}
				</p>
				<div class="flex shrink-0 items-center">
					<button
						hlmBtn
						variant="ghost"
						size="icon-xs"
						[hlmTooltip]="tooltipContent"
						[disabled]="copied()"
						[attr.aria-label]="'Copy ' + name()"
						(click)="onSelect()">
						<ng-icon
							hlm
							name="lucideCopy"
							size="xs"
							class="transition-all motion-reduce:transition-none"
							[ngClass]="{
								'scale-95 opacity-0': copied(),
								'scale-100 opacity-100': !copied(),
							}" />
						<ng-icon
							hlm
							name="lucideCheck"
							size="xs"
							class="absolute text-emerald-500 transition-all motion-reduce:transition-none"
							[ngClass]="{
								'scale-95 opacity-0': !copied(),
								'scale-100 opacity-100': copied(),
							}" />
					</button>
					<ng-template #tooltipContent><span class="flex items-center">Copy color</span></ng-template>
					<button hlmBtn variant="ghost" size="icon-xs" [attr.aria-label]="'Edit ' + name()" (click)="onEditColor()">
						<ng-icon hlm name="lucideSquarePen" size="xs" />
					</button>
				</div>
			</div>
		</article>
	`,
})
export class ColorCard {
	private readonly clipboard = inject(Clipboard);
	private readonly colorEditService = inject(ColorEditService);
	private readonly themeStorage = inject(ThemeStorageService);

	public readonly color = input<string>();
	public readonly name = input<string>();
	public readonly colorKey = input<keyof ThemeStyleProps>();

	protected readonly copied = signal<boolean>(false);
	protected readonly colorType = computed(() => this.themeStorage.colorType());

	public onSelect(): void {
		this.copied.set(true);
		this.clipboard.copy(this.color() ?? '');

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}

	public onEditColor(): void {
		const key = this.colorKey();
		if (key) {
			this.colorEditService.requestEditColor(key);
		}
	}
}
