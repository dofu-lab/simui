import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-25',
	imports: [HlmIcon, NgIcon, HlmAlertImports],
	providers: [provideIcons({ lucideTriangleAlert })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="border-red-500/32 bg-red-500/4">
			<ng-icon hlm size="sm" name="lucideTriangleAlert" class="text-red-500!" />
			<h4 hlmAlertTitle>Heads up!</h4>
			<p hlmAlertDescription>Describe what can be done about it here.</p>
		</hlm-alert>
	`,
})
export class Alert25Component {}
