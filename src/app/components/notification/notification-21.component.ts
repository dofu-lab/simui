import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleAlert, lucideX } from '@ng-icons/lucide';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-21',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton, HlmAspectRatio],
	template: `
		<div class="flex">
			<div [hlmAspectRatio]="16 / 3">
				<img
					src="assets/backgrounds/bg-01.jpg"
					class="rounded-r-0 h-[134px] w-50 overflow-hidden rounded-l-md border border-r-0" />
			</div>
			<div class="bg-background rounded-l-0 z-50 flex max-w-[400px] flex-col gap-4 rounded-r-md border p-4">
				<div class="flex gap-2">
					<div class="flex grow flex-col gap-3">
						<div class="space-y-1">
							<p class="text-sm font-medium">We’ve just released a new update!</p>
							<p class="text-muted-foreground text-sm">
								Check out the all new dashboard view. Pages and exports now load faster.
							</p>
						</div>
					</div>
					<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
						<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
					</button>
				</div>
				<div class="flex gap-3">
					<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
					<button class="text-primary h-5 text-xs font-bold hover:underline">Changelog</button>
				</div>
			</div>
		</div>
	`,
})
export class Notification21Component {}

export const notification21Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleAlert, lucideX } from '@ng-icons/lucide';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-21',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton, HlmAspectRatio],
	template: \`
		<div class="flex">
			<div [hlmAspectRatio]="16 / 3">
				<img
					src="assets/backgrounds/bg-01.jpg"
					class="rounded-r-0 h-[134px] w-50 overflow-hidden rounded-l-md border border-r-0" />
			</div>
			<div class="bg-background rounded-l-0 z-50 flex max-w-[400px] flex-col gap-4 rounded-r-md border p-4">
				<div class="flex gap-2">
					<div class="flex grow flex-col gap-3">
						<div class="space-y-1">
							<p class="text-sm font-medium">We’ve just released a new update!</p>
							<p class="text-muted-foreground text-sm">
								Check out the all new dashboard view. Pages and exports now load faster.
							</p>
						</div>
					</div>
					<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
						<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
					</button>
				</div>
				<div class="flex gap-3">
					<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
					<button class="text-primary h-5 text-xs font-bold hover:underline">Changelog</button>
				</div>
			</div>
		</div>
	\`,
})
export class Notification21Component {}`;
