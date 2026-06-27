import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-11',
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIconImports, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert
			class="flex gap-3 border-[#F7E380] bg-[#F7E380] py-3 text-[#211B00] dark:border-[#713f12] dark:bg-[#422006] dark:text-[#fbbf24]">
			<span class="flex items-center">
				<ng-icon hlm size="sm" name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<p hlmAlertDescription>Some information is missing</p>
		</hlm-alert>
	`,
})
export class Alert11Component {}
