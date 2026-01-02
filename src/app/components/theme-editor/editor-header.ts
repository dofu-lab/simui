import { ThemeInjectorService } from '@/app/core/services';
import { Component, computed, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBraces,
	lucideClipboardClock,
	lucideImport,
	lucideRotateCcw,
	lucideSave,
	lucideUndo,
} from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { EditorHistory } from './editor-history';
import { SaveTheme } from './save-theme';
import { ThemeSelector } from './theme-selector';
import { ThemeCodeSheet } from './view-code-dialog';

@Component({
	selector: 'app-editor-header',
	imports: [HlmButton, NgIcon, HlmIcon, HlmSeparator, ThemeSelector, ThemeCodeSheet, EditorHistory, SaveTheme],
	providers: [
		provideIcons({ lucideBraces, lucideSave, lucideRotateCcw, lucideImport, lucideUndo, lucideClipboardClock }),
	],
	host: {
		class: 'border-b',
	},
	template: `
		<div class="bg-background flex h-full items-center justify-between rounded-xl p-2">
			<app-theme-selector />
			<div class="flex h-full items-center gap-2">
				<button hlmBtn size="sm" variant="ghost" [disabled]="disabledUndo()" (click)="undo()">
					<ng-icon hlm name="lucideUndo" size="sm" />
				</button>
				<button hlmBtn size="sm" variant="ghost" [disabled]="disabledReset()" (click)="reset()">
					<ng-icon hlm name="lucideRotateCcw" size="sm" />
					Reset
				</button>
				<sim-editor-history />
				<hlm-separator orientation="vertical" />
				<sim-save-theme />
				<sim-theme-code-sheet [preset]="currentPreset()" />
			</div>
		</div>
	`,
})
export class EditorHeader {
	private _themeInjector = inject(ThemeInjectorService);

	protected history = this._themeInjector.history;
	protected currentPreset = this._themeInjector.currentPreset;
	protected disabledUndo = computed(() => this.history().length <= 1);
	protected disabledReset = computed(() => this.history().length <= 1);

	protected undo(): void {
		this._themeInjector.undo();
	}

	protected reset(): void {
		this._themeInjector.reset();
	}
}
