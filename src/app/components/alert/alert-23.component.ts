import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheckCircle2 } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-23',
	imports: [NgIcon, HlmIconImports, HlmAlertImports],
	providers: [provideIcons({ lucideCheckCircle2 })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="border-emerald-500/32 bg-emerald-500/4">
			<ng-icon hlm size="sm" name="lucideCheckCircle2" class="text-emerald-500!" />
			<h4 hlmAlertTitle>Heads up!</h4>
			<p hlmAlertDescription>Describe what can be done about it here.</p>
		</hlm-alert>
	`,
})
export class Alert23Component {}
