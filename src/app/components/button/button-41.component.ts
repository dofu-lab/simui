import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucidePin } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-41',
	imports: [NgIcon, HlmButtonImports, HlmButtonGroupImports],
	providers: [provideIcons({ lucideChevronDown, lucidePin })],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn size="sm">
				<ng-icon name="lucideChevronDown" />
			</button>
			<hlm-button-group-separator class="bg-primary/70" />
			<button hlmBtn size="sm">
				<ng-icon name="lucidePin" class="opacity-60" />
				Pinned
			</button>
		</div>
	`,
})
export class Button41Component {}
