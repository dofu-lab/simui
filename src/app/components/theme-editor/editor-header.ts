import { Component } from '@angular/core';
import { EditThemeButton } from './edit-theme-button';
import { ThemeAction } from './theme-action';
import { ThemeSelector } from './theme-selector';

@Component({
	selector: 'app-editor-header',
	imports: [ThemeSelector, ThemeAction, EditThemeButton],
	host: {
		class: 'border-b',
	},
	template: `
		<div class="bg-background flex h-full items-center justify-between rounded-xl p-2">
			<div class="flex flex-1 items-center gap-2">
				<app-theme-selector />
				<sim-edit-theme-button />
			</div>
			<sim-theme-action />
		</div>
	`,
})
export class EditorHeader {}
