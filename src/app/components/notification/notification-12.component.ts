import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleAlert, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-12',
	providers: [provideIcons({ lucideCircleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow gap-3">
					<ng-icon hlm class="mt-0.5 shrink-0 text-red-500" size="sm" name="lucideCircleAlert" />
					<div class="flex grow flex-col gap-3">
						<div class="space-y-1">
							<p class="text-sm font-medium">We couldn‘t complete your request!</p>
							<p class="text-muted-foreground text-sm">
								It indicates that an issue has prevented the processing of the request.
							</p>
						</div>
						<div>
							<button hlmBtn size="sm" class="h-8 text-xs">Learn more</button>
						</div>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm class="opacity-60 transition-opacity group-hover:opacity-100" size="sm" name="lucideX" />
				</button>
			</div>
		</div>
	`,
})
export class Notification12Component {}