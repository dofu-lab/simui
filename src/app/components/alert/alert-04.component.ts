import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-04',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="flex gap-3 border-red-500/50 py-3 text-red-600">
			<span class="flex h-5 items-center">
				<ng-icon hlm size="sm" name="lucideCircleAlert" class="text-red-500" />
			</span>
			<p hlmAlertDescription>An error occurred!</p>
		</hlm-alert>
	`,
})
export class Alert04Component {}
