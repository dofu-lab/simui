import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertIcon } from '@spartan-ng/helm/alert';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-alert-17',
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIcon, HlmAlert, HlmAlertIcon, HlmButton],
	host: {
		class: 'w-full',
	},
	template: `
		@if (!isDismissed()) {
			<div hlmAlert class="flex flex-col gap-3 md:flex-row">
				<span class="flex size-10 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm hlmAlertIcon variant="destructive" name="lucideCircleAlert" />
				</span>
				<div>
					<h4 hlmAlertTitle class="text-sm font-medium">We’ve just released a new feature</h4>
					<span class="text-xs">Check out our new feature that allows you to add a cover image!</span>
					<div class="mt-2 flex flex-col gap-2 md:flex-row">
						<button hlmBtn variant="outline" size="sm" class="h-9" (click)="isDismissed.set(true)">Dismiss</button>
						<button hlmBtn size="sm" class="h-9">View changes</button>
					</div>
				</div>
			</div>
		}
	`,
})
export class Alert17Component {
	isDismissed = signal<boolean>(false);
}