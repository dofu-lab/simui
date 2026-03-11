import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArchive } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-04',
	imports: [NgIcon, HlmButton],
	providers: [provideIcons({ lucideArchive })],
	template: `
		<button hlmBtn size="sm">
			<ng-icon name="lucideArchive" />
			Archive
		</button>
	`,
})
export class Button04Component {}
