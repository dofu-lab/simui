import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-06',
	providers: [provideIcons({ lucideX })],
	imports: [HlmButtonImports, NgIcon],
	template: `
		<button hlmBtn variant="secondary" size="sm">
			<ng-icon name="lucideX" />
			Discard
		</button>
	`,
})
export class Button06Component {}
