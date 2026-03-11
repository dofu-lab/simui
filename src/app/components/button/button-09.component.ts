import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-09',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn size="sm" class="group/btn09">
			Next page
			<ng-icon name="lucideArrowRight" class="transition-transform group-hover/btn09:translate-x-0.5" />
		</button>
	`,
})
export class Button09Component {}
