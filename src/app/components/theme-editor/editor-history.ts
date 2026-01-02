import { ThemeInjectorService } from '@/app/core/services';
import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { HistoryDatePipe } from '@/app/pipes/history-date.pipe';
import { ThemeHistory, ThemePreset } from '@/app/types';
import { Component, computed, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideUndo2 } from '@ng-icons/lucide';
import { BrnSheetImports } from '@spartan-ng/brain/sheet';
import { BrnTooltipImports } from '@spartan-ng/brain/tooltip';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
import { ColorBadge } from './color-badge';
import { ColorTypeSelector } from './color-type-selector';
import { PresetColorPreview } from './preset-color-preview';

@Component({
	selector: 'sim-editor-history',
	imports: [
		NgIcon,
		HlmIcon,
		ColorBadge,
		HlmButton,
		HistoryDatePipe,
		HlmSheetImports,
		BrnSheetImports,
		HlmEmptyImports,
		HlmTooltipImports,
		BrnTooltipImports,
		PresetColorPreview,
		ColorTypeSelector,
		HlmBadge,
	],
	providers: [provideIcons({ lucideArrowRight, lucideUndo2 })],
	template: `
		<hlm-sheet side="right">
			<button brnSheetTrigger hlmBtn size="sm" variant="ghost">
				<ng-icon hlm name="lucideClipboardClock" size="sm" />
				History
			</button>
			<hlm-sheet-content
				*brnSheetContent="let ctx"
				class="flex h-full w-[calc(100%-(--spacing(12)))] max-w-sm flex-col sm:max-w-xl">
				<hlm-sheet-header class="flex-row items-center justify-between">
					<h3 hlmSheetTitle>Change History</h3>
					<div class="pr-8">
						<sim-color-type />
					</div>
				</hlm-sheet-header>
				<div class="flex flex-1 flex-col gap-1 overflow-y-auto px-2 pb-4">
					@for (history of historyList(); track history.timestamp) {
						<div class="hover:bg-muted/50 flex items-center justify-between gap-2 rounded-md p-2">
							<div class="grid items-center gap-1">
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
								@switch (history.values?.targetKey) {
									@case ('selector') {
										<p class="text-sm">Select new preset</p>
										<div class="text-muted-foreground flex items-center gap-2 text-sm font-normal">
											<sim-theme-color-preview [preset]="getTheme(history.values?.oldValue)" />
											<ng-icon hlm name="lucideArrowRight" size="sm" />
											<sim-theme-color-preview [preset]="getTheme(history.values?.newValue)" />
										</div>
									}
									@default {
										<p class="text-sm">
											Change
											<span class="font-bold">
												{{ getLabel(history.values?.targetKey) }}
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
					} @empty {
						<div hlmEmpty>
							<div hlmEmptyHeader>
								<div hlmEmptyTitle>No history</div>
								<div hlmEmptyDescription>You haven&apos;t created any history yet.</div>
							</div>
						</div>
					}
				</div>
			</hlm-sheet-content>
		</hlm-sheet>
	`,
})
export class EditorHistory {
	private _themeInjector = inject(ThemeInjectorService);
	private _themeStorage = inject(ThemeStorageService);

	protected appearance = computed(() => this._themeInjector.appearance());
	protected historyList = computed(() =>
		this._themeInjector
			.history()
			.filter((h) => h.values)
			.reverse(),
	);

	public onRevert(history: ThemeHistory): void {
		this._themeInjector.restore(history);
	}

	public getTheme(themeId?: string): ThemePreset | undefined {
		return this._themeStorage.themes().find((t) => t.id === themeId);
	}

	public getLabel(key?: string): string {
		if (!key) return '';
		return (
			{
				background: 'Background',
				foreground: 'Foreground',
				primary: 'Primary',
				'primary-foreground': 'Primary Foreground',
				secondary: 'Secondary',
				'secondary-foreground': 'Secondary Foreground',
				muted: 'Muted',
				'muted-foreground': 'Muted Foreground',
				accent: 'Accent',
				'accent-foreground': 'Accent Foreground',
				destructive: 'Destructive',
				'destructive-foreground': 'Destructive Foreground',
				border: 'Border',
				input: 'Input',
				ring: 'Ring',
				card: 'Card',
				'card-foreground': 'Card Foreground',
				popover: 'Popover',
				'popover-foreground': 'Popover Foreground',
			}[key] || key
		);
	}
}
