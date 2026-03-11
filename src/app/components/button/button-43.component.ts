import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-43',
	providers: [provideIcons({ lucideChevronDown })],
	imports: [HlmButton, NgIcon, HlmButtonGroupImports],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn size="sm" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
				Merge pull request
			</button>
			<hlm-button-group-separator class="bg-primary/70" />
			<button hlmBtn size="sm">
				<ng-icon name="lucideChevronDown" />
			</button>
		</div>
	`,
})
export class Button43Component {}
