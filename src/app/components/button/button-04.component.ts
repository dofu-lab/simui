import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-04',
	imports: [NgIcon, HlmButtonImports],
	providers: [provideIcons({ lucideArchive })],
	template: `
		<button hlmBtn size="sm">
			<ng-icon name="lucideArchive" />
			Archive
		</button>
	`,
})
export class Button04Component {}
