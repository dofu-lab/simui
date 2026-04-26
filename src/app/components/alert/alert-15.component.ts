import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-15',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="flex gap-3">
			<span class="pt-0.5">
				<ng-icon hlm size="sm" name="lucideCircleAlert" class="text-red-500" />
			</span>
			<div>
				<h4 hlmAlertTitle class="text-sm font-medium">Password does not meet requirements:</h4>
				<ul hlmAlertDescription class="text-muted-foreground list-inside list-disc text-sm">
					<li>Minimum 8 characters</li>
					<li>Include a special character</li>
				</ul>
			</div>
		</hlm-alert>
	`,
})
export class Alert15Component {}
