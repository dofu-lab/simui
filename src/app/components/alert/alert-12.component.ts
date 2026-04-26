import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-12',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert
			class="flex gap-3 border-[#FFDAD6] bg-[#FFDAD6] py-3 text-[#410002] dark:border-[#7f1d1d] dark:bg-[#450a0a] dark:text-[#fca5a5]">
			<span class="flex items-center">
				<ng-icon hlm size="sm" name="lucideCircleAlert" class="text-red-500" />
			</span>
			<p hlmAlertDescription>An error occurred!</p>
		</hlm-alert>
	`,
})
export class Alert12Component {}
