import { ThemeStorageService } from '@/app/core/services';
import { AppearanceService } from '@/app/core/services/appearance.service';
import { getLabelForColor } from '@/app/core/utils';
import { ThemeHistory, ThemePreset } from '@/app/types';
import { Component, computed, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardClock } from '@ng-icons/lucide';
import { BrnSheetImports } from '@spartan-ng/brain/sheet';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { ColorTypeSelector } from './color-type-selector';
import { ThemeVersionHistoryComponent } from './theme-version-history';
import { UnsavedHistory } from './unsaved-history';

@Component({
	selector: 'sim-editor-history',
	imports: [
		NgIcon,
		HlmIcon,
		HlmButton,
		ColorTypeSelector,
		ThemeVersionHistoryComponent,
		HlmSheetImports,
		BrnSheetImports,
		UnsavedHistory,
	],
	providers: [provideIcons({ lucideClipboardClock })],
	template: `
		<hlm-sheet side="right">
			<button brnSheetTrigger hlmBtn size="sm" variant="ghost" [disabled]="!canShowHistory()">
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
				<div class="flex flex-1 flex-col overflow-y-auto px-4 pb-4">
					<sim-unsaved-history />

					@if (canShowHistory()) {
						<sim-theme-version-history [currentTheme]="currentTheme()" />
					}
				</div>
			</hlm-sheet-content>
		</hlm-sheet>
	`,
})
export class EditorHistory {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly appearanceService = inject(AppearanceService);

	protected readonly appearance = computed(() => this.appearanceService.appearance());
	protected readonly historyList = computed(() =>
		this.themeStorageService
			.history()
			.filter((h) => h.values && h.action !== 'APPLY')
			.reverse(),
	);

	protected currentTheme = this.themeStorageService.currentTheme;
	protected readonly canShowHistory = computed(() => {
		const theme = this.currentTheme();
		return theme?.source !== 'BUILT_IN';
	});

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
