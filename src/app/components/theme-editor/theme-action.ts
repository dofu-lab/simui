import { ThemeStorageService } from '@/app/core/services';
import { Component, computed, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBraces, lucideImport, lucideRotateCcw, lucideSave, lucideUndo } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { EditorHistory } from './editor-history';
import { SaveTheme } from './save-theme';
import { ThemeCodeSheet } from './view-code-dialog';

@Component({
	selector: 'sim-theme-action',
	imports: [NgIcon, HlmIcon, HlmButton, EditorHistory, SaveTheme, ThemeCodeSheet],
	providers: [
		provideIcons({
			lucideBraces,
			lucideSave,
			lucideRotateCcw,
			lucideImport,
			lucideUndo,
		}),
	],
	host: {
		class: 'flex items-center gap-2 justify-end h-full',
	},
	template: `
		<button hlmBtn size="sm" variant="ghost" [disabled]="disabledUndo()" (click)="undo()">
			<ng-icon hlm name="lucideUndo" size="sm" />
		</button>
		<button hlmBtn size="sm" variant="ghost" [disabled]="disabledReset()" (click)="reset()">
			<ng-icon hlm name="lucideRotateCcw" size="sm" />
			Reset
		</button>
		<sim-editor-history />
		<div class="bg-input h-full w-px"></div>
		<sim-save-theme />
		<sim-theme-code-sheet [preset]="currentPreset()" />
	`,
})
export class ThemeAction {
	private readonly themeStorageService = inject(ThemeStorageService);

	protected readonly history = this.themeStorageService.history;
	protected readonly currentPreset = this.themeStorageService.currentTheme;
	protected readonly disabledUndo = computed(() => this.history().length <= 1);
	protected readonly disabledReset = computed(() => this.history().length <= 1);

	protected undo(): void {
		this.themeStorageService.undoHistoryEntry();
	}

	protected reset(): void {
		this.themeStorageService.reset();
	}
}
