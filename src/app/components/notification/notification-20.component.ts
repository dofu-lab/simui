import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-20',
	providers: [provideIcons({ lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton, HlmAspectRatio],
	template: `
		<div class="bg-background z-50 flex max-w-[400px] flex-col gap-4 rounded-md border p-4 shadow-lg">
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
			<div class="shadow-xs" [hlmAspectRatio]="16 / 9">
				<img alt="Mountain views" src="assets/backgrounds/bg-01.jpg" class="rounded-md" />
			</div>
			<div class="flex gap-3">
				<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
				<button class="text-primary h-5 text-xs font-bold hover:underline">Changelog</button>
			</div>
		</div>
	`,
})
export class Notification20Component {}

export const notification20Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-20',
	providers: [provideIcons({ lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton, HlmAspectRatio],
	template: \`
		<div class="bg-background z-50 flex max-w-[400px] flex-col gap-4 rounded-md border p-4 shadow-lg">
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
			<div class="shadow-xs" [hlmAspectRatio]="16 / 9">
				<img alt="Mountain views" src="assets/backgrounds/bg-01.jpg" class="rounded-md" />
			</div>
			<div class="flex gap-3">
				<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
				<button class="text-primary h-5 text-xs font-bold hover:underline">Changelog</button>
			</div>
		</div>
	\`,
})
export class Notification20Component {}`;
