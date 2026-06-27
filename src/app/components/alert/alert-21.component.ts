import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideInfo } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-21',
	imports: [NgIcon, HlmIconImports, HlmButtonImports, HlmAlertImports],
	providers: [provideIcons({ lucideInfo })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert>
			<ng-icon hlm size="sm" name="lucideInfo" />
			<h4 hlmAlertTitle>Heads up!</h4>
			<p hlmAlertDescription>Describe what can be done about it here.</p>
			<div hlmAlertAction>
				<button hlmBtn size="xs" variant="ghost">Dismiss</button>
				<button hlmBtn size="xs">Ok</button>
			</div>
		</hlm-alert>
	`,
})
export class Alert21Component {}
