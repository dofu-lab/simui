import { Component } from '@angular/core';
import { HlmAlertImports } from '@spartan-ng/helm/alert';

@Component({
	selector: 'sim-alert-19',
	imports: [HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert>
			<h4 hlmAlertTitle>Heads up!</h4>
			<p hlmAlertDescription>Describe what can be done about it here.</p>
		</hlm-alert>
	`,
})
export class Alert19Component {}
