import { ColorEditService, ThemeStorageService } from '@/app/core/services';
import { ColorPipe } from '@/app/pipes';
import { ThemeStyleProps } from '@/app/types';
import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy, lucideSquarePen } from '@ng-icons/lucide';
import { BrnTooltipImports } from '@spartan-ng/brain/tooltip';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-color-card',
	imports: [HlmTooltipImports, HlmIcon, NgIcon, NgClass, BrnTooltipImports, HlmButton, ColorPipe],
	providers: [provideIcons({ lucideCopy, lucideCheck, lucideSquarePen })],
	template: `
		<div
			class="relative isolate flex size-full flex-col content-stretch items-start overflow-clip rounded-[12px] px-0 pt-0 pb-3">
			<div class="absolute top-0 right-0 left-0 z-2 h-20 rounded-[12px] border" [style.backgroundColor]="color()"></div>
			<div class="bg-background relative z-1 -mb-3 w-full shrink-0 rounded-[12px]">
				<div class="border-border pointer-events-none absolute inset-0 rounded-[12px] border-[0px_1px_1px]"></div>
				<div class="relative flex w-full content-stretch items-start gap-2 px-3 pt-[92px] pb-3 not-italic">
					<div class="flex-1">
						<p class="text-sm font-medium">{{ name() }}</p>
						<p class="text-muted-foreground text-xs font-normal">{{ color() | colorFormatter: colorType() }}</p>
					</div>
					<div class="flex flex-col">
						<hlm-tooltip>
							<button
								hlmBtn
								hlmTooltipTrigger
								variant="ghost"
								size="icon"
								class="size-6"
								[disabled]="copied()"
								(click)="onSelect()">
								<ng-icon
									hlm
									name="lucideCopy"
									size="xs"
									class="transition-all"
									[ngClass]="{
										'scale-0 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="xs"
									class="absolute text-emerald-500 transition-all"
									[ngClass]="{
										'scale-0 opacity-0': !copied(),
										'scale-100 opacity-100': copied(),
									}" />
							</button>
							<span *brnTooltipContent class="flex items-center">Copy color</span>
						</hlm-tooltip>
						<button hlmBtn variant="ghost" size="icon" class="size-6" (click)="onEditColor()">
							<ng-icon hlm name="lucideSquarePen" size="xs" />
						</button>
					</div>
				</div>
			</div>
		</div>
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
