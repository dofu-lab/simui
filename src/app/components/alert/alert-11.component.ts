import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-11',
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<div
			hlmAlert
			class="flex gap-3 border-[#F7E380] bg-[#F7E380] py-3 text-[#211B00] dark:border-[#713f12] dark:bg-[#422006] dark:text-[#fbbf24]">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
			</span>
			<p hlmAlertDesc>Some information is missing</p>
		</div>
	`,
})
export class Alert11Component {}