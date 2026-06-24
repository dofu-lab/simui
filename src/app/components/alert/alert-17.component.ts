import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-17',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconImports, HlmButtonImports, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		@if (!isDismissed()) {
			<hlm-alert class="flex flex-col gap-3 md:flex-row">
				<span class="flex size-10 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm size="sm" name="lucideCircleAlert" />
				</span>
				<div>
					<h4 hlmAlertTitle class="text-sm font-medium">We’ve just released a new feature</h4>
					<span class="text-xs">Check out our new feature that allows you to add a cover image!</span>
					<div class="mt-2 flex flex-col gap-2 md:flex-row">
						<button hlmBtn variant="outline" size="xs" (click)="isDismissed.set(true)">Dismiss</button>
						<button hlmBtn size="xs">View changes</button>
					</div>
				</div>
			</hlm-alert>
		}
	`,
})
export class Alert17Component {
	isDismissed = signal<boolean>(false);
}
