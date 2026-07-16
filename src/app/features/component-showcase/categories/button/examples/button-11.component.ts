import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-11',
	imports: [NgIcon, HlmButtonImports],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<button hlmBtn size="sm">
			Options
			<ng-icon name="lucideChevronDown" class="opacity-80" />
		</button>
	`,
})
export class Button11Component {}
