import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideMail } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-10',
	providers: [provideIcons({ lucideMail, lucideArrowRight })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn size="sm" variant="secondary" class="group/btn10">
			<ng-icon name="lucideMail" />
			Subscribe
			<ng-icon name="lucideArrowRight" class="transition-transform group-hover/btn10:translate-x-0.5" />
		</button>
	`,
})
export class Button10Component {}
