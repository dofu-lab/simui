import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-01',
	imports: [NgIcon, HlmIcon, HlmAlertImports],
	providers: [provideIcons({ lucideTriangleAlert })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="flex gap-3 py-3">
			<span class="flex h-5 items-center justify-center">
				<ng-icon hlm size="sm" name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<p hlmAlertDescription>Some information is missing</p>
		</hlm-alert>
	`,
})
export class Alert01Component {}
