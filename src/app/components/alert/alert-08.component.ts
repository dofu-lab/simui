import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-08',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconImports, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="flex gap-3 border-blue-500/50 py-3 text-blue-600">
			<span class="flex h-5 items-center">
				<ng-icon hlm size="sm" name="lucideCircleAlert" class="text-blue-500" />
			</span>
			<p hlmAlertDescription>Page information</p>
		</hlm-alert>
	`,
})
export class Alert08Component {}
