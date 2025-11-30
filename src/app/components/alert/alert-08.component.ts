import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-08',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-blue-500/50 py-3 text-blue-600">
			<span class="flex h-5 items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
			</span>
			<p hlmAlertDesc>Page information</p>
		</div>
	`,
})
export class Alert08Component {}