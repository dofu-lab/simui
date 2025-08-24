import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-14',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<div
			hlmAlert
			class="flex gap-3 border-[#AECDF8] bg-[#AECDF8] py-3 text-[#010021] dark:border-[#1e3a8a] dark:bg-[#1e1b4b] dark:text-[#93c5fd]">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
			</span>
			<p hlmAlertDesc>Page information</p>
		</div>
	`,
})
export class Alert14Component {}

export const alert14Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-14',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertDescription, HlmAlertIcon],
	host: {
		class: 'w-full',
	},
	template: \`
		<div
			hlmAlert
			class="flex gap-3 border-[#AECDF8] bg-[#AECDF8] py-3 text-[#010021] dark:border-[#1e3a8a] dark:bg-[#1e1b4b] dark:text-[#93c5fd]">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
			</span>
			<p hlmAlertDesc>Page information</p>
		</div>
	\`,
})
export class Alert14Component {}`;
