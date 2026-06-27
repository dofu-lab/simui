import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-08',
	imports: [NgIcon, HlmButtonImports],
	providers: [provideIcons({ lucideArrowLeft })],
	template: `
		<button hlmBtn variant="ghost" size="sm" class="group">
			<ng-icon name="lucideArrowLeft" />
			Go back
		</button>
	`,
})
export class Button08Component {}
