import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlame } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-07',
	providers: [provideIcons({ lucideFlame })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn variant="outline" size="sm">
			<ng-icon name="lucideFlame" />
			Live
		</button>
	`,
})
export class Button07Component {}
