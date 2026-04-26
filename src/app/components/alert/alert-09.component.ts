import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-09',
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	providers: [provideIcons({ lucideTriangleAlert, lucideArrowRight })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="flex gap-3 py-3">
			<span class="flex items-center">
				<ng-icon hlm size="sm" name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<div class="flex flex-1 justify-between">
				<p hlmAlertDescription>Some information is missing</p>
				<div class="group flex cursor-pointer items-center gap-1">
					<span class="text-sm font-medium">Check now</span>
					<ng-icon
						hlm
						name="lucideArrowRight"
						size="sm"
						class="ms-1 transition-transform group-hover:translate-x-0.5" />
				</div>
			</div>
		</hlm-alert>
	`,
})
export class Alert09Component {}
