import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRefreshCw, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-16',
	providers: [
		provideIcons({
			lucideX,
			lucideRefreshCw,
		}),
	],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
					<ng-icon hlm name="lucideRefreshCw" size="sm" class="opacity-60" />
				</div>
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-medium">Version 1.4 is now available!</p>
						<p class="text-muted-foreground text-sm">
							This update contains several bug fixes and performance improvements.
						</p>
					</div>
					<div class="flex gap-2">
						<button hlmBtn size="sm" class="h-8 text-xs">Install</button>
						<button hlmBtn size="sm" variant="link" class="h-8 text-xs">Later</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification16Component {}