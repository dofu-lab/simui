import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-11',
	providers: [provideIcons({ lucideChevronDown })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn size="sm">
			Options
			<ng-icon name="lucideChevronDown" class="opacity-80" />
		</button>
	`,
})
export class Button11Component {}
