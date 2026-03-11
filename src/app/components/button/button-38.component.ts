import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-38',
	providers: [provideIcons({ lucideChevronLeft })],
	imports: [HlmButton, NgIcon, HlmButtonGroupImports],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn size="icon-sm" class="bg-primary/85">
				<ng-icon name="lucideChevronLeft" />
			</button>
			<button hlmBtn size="sm">Previous</button>
		</div>
	`,
})
export class Button38Component {}
