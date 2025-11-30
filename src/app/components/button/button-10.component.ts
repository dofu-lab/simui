import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideMail } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-10',
	providers: [provideIcons({ lucideMail, lucideArrowRight })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: `
		<button hlmBtn size="sm" variant="secondary" class="group">
			<ng-icon hlm name="lucideMail" size="sm" class="ms-1 mr-2" />
			Subscribe
			<ng-icon hlm name="lucideArrowRight" size="sm" class="ms-1 transition-transform group-hover:translate-x-0.5" />
		</button>
	`,
})
export class Button10Component {}