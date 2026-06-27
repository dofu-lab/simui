import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-02',
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIconImports, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-alert class="flex gap-3 border-amber-500/50 py-3 text-amber-600">
			<span class="flex h-5 items-center">
				<ng-icon hlm size="sm" name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<p hlmAlertDescription>Some information is missing</p>
		</hlm-alert>
	`,
})
export class Alert02Component {}
