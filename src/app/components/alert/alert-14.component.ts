import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-14',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert
			class="flex gap-3 border-[#AECDF8] bg-[#AECDF8] py-3 text-[#010021] dark:border-[#1e3a8a] dark:bg-[#1e1b4b] dark:text-[#93c5fd]">
			<span class="flex items-center">
				<ng-icon hlm size="sm" name="lucideCircleAlert" class="text-blue-500" />
			</span>
			<p hlmAlertDescription>Page information</p>
		</hlm-alert>
	`,
})
export class Alert14Component {}
