import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-13',
	providers: [provideIcons({ lucideCircleCheck })],
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert
			class="flex gap-3 border-[#9BF4D0] bg-[#9BF4D0] py-3 text-[#002116] dark:border-[#166534] dark:bg-[#14532d] dark:text-[#86efac]">
			<span class="flex items-center">
				<ng-icon hlm size="sm" name="lucideCircleCheck" class="text-green-500" />
			</span>
			<p hlmAlertDescription>Completed successfully!</p>
		</hlm-alert>
	`,
})
export class Alert13Component {}
