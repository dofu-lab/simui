import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert, lucideX } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-01',
	providers: [provideIcons({ lucideTriangleAlert, lucideX })],
	imports: [NgIcon, HlmIconImports, HlmAlertImports, HlmButtonImports],
	template: `
		<div hlmAlert class="bg-background z-50 flex gap-3 py-3 shadow-lg">
			<span class="flex items-center">
				<ng-icon hlm size="sm" name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<p hlmAlertDesc class="grow">Some information is missing</p>
			<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
				<ng-icon
					hlm
					name="lucideX"
					size="sm"
					class="opacity-60 transition-opacity group-hover:opacity-100 motion-reduce:transition-none" />
			</button>
		</div>
	`,
})
export class Notification01Component {}
