import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-39',
	providers: [provideIcons({ lucideChevronRight })],
	imports: [HlmButton, NgIcon, HlmButtonGroupImports],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn size="sm">Next</button>
			<button hlmBtn size="icon-sm" class="bg-primary/85">
				<ng-icon name="lucideChevronRight" />
			</button>
		</div>
	`,
})
export class Button39Component {}
