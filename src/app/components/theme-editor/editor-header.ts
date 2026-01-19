import { Component } from '@angular/core';
import { ThemeAction } from './theme-action';
import { ThemeSelector } from './theme-selector';

@Component({
	selector: 'app-editor-header',
	imports: [ThemeSelector, ThemeAction],
	host: {
		class: 'border-b',
	},
	template: `
		<div class="bg-background flex h-full items-center justify-between rounded-xl p-2">
			<app-theme-selector />
			<sim-theme-action />
		</div>
	`,
})
export class EditorHeader {}
