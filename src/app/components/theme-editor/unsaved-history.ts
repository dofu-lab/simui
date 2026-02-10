import { ThemeStorageService } from '@/app/core/services';
import { getLabelForColor } from '@/app/core/utils';
import { HistoryDatePipe } from '@/app/pipes';
import { ThemeHistory, ThemePreset } from '@/app/types';
import { Component, computed, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideUndo2 } from '@ng-icons/lucide';
import { BrnTooltipImports } from '@spartan-ng/brain/tooltip';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
import { ColorBadge } from './color-badge';
import { PresetColorPreview } from './preset-color-preview';

@Component({
	selector: 'sim-unsaved-history',
	providers: [provideIcons({ lucideArrowRight, lucideUndo2 })],
	imports: [
		PresetColorPreview,
		NgIcon,
		HlmIcon,
		HistoryDatePipe,
		ColorBadge,
		HlmBadge,
		HlmButton,
		HlmTooltipImports,
		BrnTooltipImports,
	],
	template: `
		@if (historyList().length > 0) {
			<span hlmBadge class="rounded-full">Unsaved changes</span>
			@for (history of historyList(); track history.timestamp) {
				<div class="grid grid-cols-[auto_1fr]">
					<div class="flex w-[42px] flex-col items-center">
						<div class="bg-border relative mx-auto h-full w-px">
							<div class="bg-border absolute top-1/2 -left-1 size-2 -translate-y-1/2 rounded-full"></div>
						</div>
					</div>
					<div class="hover:bg-muted/50 flex items-center justify-between gap-2 rounded-md p-2 pb-3">
						<div class="grid items-center gap-1">
							@switch (history.action) {
								@case ('APPLY') {
									<div class="flex items-center gap-2">
										<p class="text-muted-foreground text-xs">
											{{ history.timestamp | historyDate }}
										</p>
									</div>
									<p class="text-sm">Select new preset</p>
									<div class="text-muted-foreground flex items-center gap-2 text-sm font-normal">
										<sim-theme-color-preview [preset]="getTheme(history.values?.oldValue)" />
										<ng-icon hlm name="lucideArrowRight" size="sm" />
										<sim-theme-color-preview [preset]="getTheme(history.values?.newValue)" />
									</div>
								}
								@case ('SAVE_THEME') {
									<div class="flex items-center gap-2">
										<p class="text-muted-foreground text-xs">
											{{ history.timestamp | historyDate }}
										</p>
									</div>
									<p class="text-sm">Save new theme preset:</p>
									<div class="text-muted-foreground flex items-center gap-2 text-sm font-normal">
										<sim-theme-color-preview [preset]="getTheme(history.preset.id)" />
									</div>
								}
								@case ('CHANGE_PROPERTY') {
									<div class="flex items-center gap-2">
										<p class="text-muted-foreground text-xs">
											{{ history.timestamp | historyDate }}
										</p>
									</div>
									<p class="text-sm">
										Change
										<span class="font-bold">
											{{ getLabelForProperty(history.values?.targetKey) }}
										</span>
									</p>
									<div class="text-muted-foreground flex items-center gap-2 text-sm font-normal">
										<span class="text-foreground text-left text-sm font-medium">
											{{ history.values?.oldValue }}
										</span>
										<ng-icon hlm name="lucideArrowRight" size="sm" />
										<span class="text-foreground text-left text-sm font-medium">
											{{ history.values?.newValue }}
										</span>
									</div>
								}
								@default {
									<div class="flex items-center gap-2">
										<p class="text-muted-foreground text-xs">
											{{ history.timestamp | historyDate }}
										</p>
										<span hlmBadge variant="outline" class="rounded-full">
											@if (history.values?.colorScheme === 'light') {
												Light
											}
											@if (history.values?.colorScheme === 'dark') {
												Dark
											}
										</span>
									</div>
									<p class="text-sm">
										Change
										<span class="font-bold">
											{{ getLabelForColor(history.values?.targetKey) }}
										</span>
										color
									</p>
									<div class="text-muted-foreground flex items-center gap-2 text-sm font-normal">
										<sim-color-badge [color]="history.values?.oldValue ?? ''" />
										<ng-icon hlm name="lucideArrowRight" size="sm" />
										<sim-color-badge [color]="history.values?.newValue ?? ''" />
									</div>
								}
							}
						</div>
						@if ($index !== 0) {
							<hlm-tooltip>
								<button hlmBtn hlmTooltipTrigger size="icon" variant="outline" (click)="onRevert(history)">
									<ng-icon hlm name="lucideUndo2" size="sm" />
								</button>
								<span *brnTooltipContent class="flex items-center">Revert to this version</span>
							</hlm-tooltip>
						}
					</div>
				</div>
			}
		}
	`,
})
export class UnsavedHistory {
	private readonly themeStorageService = inject(ThemeStorageService);
	protected readonly historyList = computed(() =>
		this.themeStorageService
			.history()
			.filter((h) => h.values && h.action !== 'APPLY')
			.reverse(),
	);

	protected getLabelForColor = getLabelForColor;

	protected getLabelForProperty = (key?: string): string => {
		if (!key) return 'property';

		const propertyLabels: Record<string, string> = {
			radius: 'border radius',
			spacing: 'spacing',
			'letter-spacing': 'letter spacing',
			'font-sans': 'sans font',
			'font-serif': 'serif font',
			'font-mono': 'monospace font',
			'shadow-color': 'shadow color',
			'shadow-opacity': 'shadow opacity',
			'shadow-blur': 'shadow blur',
			'shadow-spread': 'shadow spread',
			'shadow-offset-x': 'shadow X offset',
			'shadow-offset-y': 'shadow Y offset',
			'shadow-2xs': 'shadow 2xs',
			'shadow-xs': 'shadow xs',
			'shadow-sm': 'shadow small',
			shadow: 'shadow',
			'shadow-md': 'shadow medium',
			'shadow-lg': 'shadow large',
			'shadow-xl': 'shadow xl',
			'shadow-2xl': 'shadow 2xl',
		};

		return propertyLabels[key] || key.replace('-', ' ');
	};

	protected onRevert(history: ThemeHistory): void {
		this.themeStorageService.restore(history);
	}

	protected getTheme(themeId?: string): ThemePreset | undefined {
		return this.themeStorageService.themePresets().find((t) => t.id === themeId);
	}
}
