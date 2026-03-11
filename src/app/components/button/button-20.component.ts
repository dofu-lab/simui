import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-20',
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn variant="outline" size="icon" class="rounded-full">
			<ng-icon name="lucidePlus" />
		</button>
	`,
})
export class Button20Component {}
