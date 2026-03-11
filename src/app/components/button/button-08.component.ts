import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-08',
	providers: [provideIcons({ lucideArrowLeft })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn variant="ghost" size="sm" class="group">
			<ng-icon name="lucideArrowLeft" />
			Go back
		</button>
	`,
})
export class Button08Component {}
