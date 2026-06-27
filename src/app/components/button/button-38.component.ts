import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-38',
	imports: [NgIcon, HlmButtonImports, HlmButtonGroupImports],
	providers: [provideIcons({ lucideChevronLeft })],
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
