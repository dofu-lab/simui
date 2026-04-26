import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-07',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="flex gap-3 py-3">
			<span class="flex h-5 items-center">
				<ng-icon hlm size="sm" name="lucideCircleAlert" class="text-blue-500" />
			</span>
			<p hlmAlertDescription>Page information!</p>
		</hlm-alert>
	`,
})
export class Alert07Component {}
