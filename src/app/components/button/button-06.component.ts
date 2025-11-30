import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-06',
	providers: [provideIcons({ lucideX })],
	imports: [HlmButton, NgIcon, HlmIcon],
	template: `
		<button hlmBtn variant="secondary" size="sm">
			<ng-icon hlm name="lucideX" size="sm" class="mr-1" />
			Discard
		</button>
	`,
})
export class Button06Component {}