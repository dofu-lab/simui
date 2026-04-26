import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-18',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmButton, HlmAlertImports],
	host: {
		class: 'w-full',
	},
	template: `
		@if (!isDismissed()) {
			<hlm-alert class="flex flex-col gap-3 md:flex-row">
				<span
					class="flex size-10 shrink-0 items-center justify-center rounded-md border border-red-500/50 text-red-600">
					<ng-icon hlm size="sm" name="lucideCircleAlert" />
				</span>
				<div>
					<h4 hlmAlertTitle class="text-sm font-medium">There was a problem with that action</h4>
					<span class="text-xs">Please try again later. If the problem persists, contact support.</span>
					<div class="mt-2 flex flex-col gap-2 md:flex-row">
						<button hlmBtn variant="outline" size="xs" (click)="isDismissed.set(true)">Dismiss</button>
						<button hlmBtn size="xs">Learn more</button>
					</div>
				</div>
			</hlm-alert>
		}
	`,
})
export class Alert18Component {
	isDismissed = signal<boolean>(false);
}
