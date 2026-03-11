import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-19',
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn variant="outline" size="sm">
			<ng-icon name="lucidePlus" />
			Add new
		</button>
	`,
})
export class Button19Component {}
