import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSquareArrowOutUpRight } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-37',
	providers: [provideIcons({ lucideSquareArrowOutUpRight })],
	imports: [HlmButton, NgIcon, HlmButtonGroupImports],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn variant="outline" size="sm">Button</button>
			<button hlmBtn variant="outline" size="icon-sm">
				<ng-icon name="lucideSquareArrowOutUpRight" />
			</button>
		</div>
	`,
})
export class Button37Component {}
