import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBox, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-24',
	providers: [
		provideIcons({
			lucideX,
			lucideBox,
		}),
	],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-semibold">Updates have been made to your profile</p>
						<p class="text-muted-foreground text-sm">
							Your team has made changes to your company profile since you last logged in.
						</p>
					</div>
					<div class="flex gap-3">
						<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
						<button class="text-primary h-5 text-xs font-bold hover:underline">View changes</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification24Component {}