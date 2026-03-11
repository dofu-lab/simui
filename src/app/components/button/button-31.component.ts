import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlipHorizontal, lucideFlipVertical } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-31',
	providers: [provideIcons({ lucideFlipHorizontal, lucideFlipVertical })],
	imports: [HlmButton, NgIcon, HlmButtonGroupImports],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn variant="outline" size="icon">
				<ng-icon name="lucideFlipHorizontal" />
			</button>
			<button hlmBtn variant="outline" size="icon">
				<ng-icon name="lucideFlipVertical" />
			</button>
		</div>
	`,
})
export class Button31Component {}
