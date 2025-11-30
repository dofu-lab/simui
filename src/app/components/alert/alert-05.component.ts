import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-05',
	providers: [provideIcons({ lucideCircleCheck })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 py-3">
			<span class="flex h-5 items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleCheck" class="text-emerald-500" />
			</span>
			<p hlmAlertDesc>Completed successfully!</p>
		</div>
	`,
})
export class Alert05Component {}