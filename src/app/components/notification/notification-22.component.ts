import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBox, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-22',
	standalone: true,
	providers: [
		provideIcons({
			lucideX,
			lucideBox,
		}),
	],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideBox" size="sm" class="shadow-xs" />
				</div>
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-semibold">Version 1.4 is now available!</p>
						<p class="text-muted-foreground text-sm">
							This update contains several bug fixes and performance improvements.
						</p>
					</div>
					<div class="flex gap-3">
						<button class="text-secondary-foreground h-5 text-xs hover:underline">Later</button>
						<button class="text-primary h-5 text-xs font-bold hover:underline">Install now</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification22Component {}

export const notification22Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBox, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-22',
	standalone: true,
	providers: [
		provideIcons({
			lucideX,
			lucideBox,
		}),
	],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	template: \`
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideBox" size="sm" class="shadow-xs" />
				</div>
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-semibold">Version 1.4 is now available!</p>
						<p class="text-muted-foreground text-sm">
							This update contains several bug fixes and performance improvements.
						</p>
					</div>
					<div class="flex gap-3">
						<button class="text-secondary-foreground h-5 text-xs hover:underline">Later</button>
						<button class="text-primary h-5 text-xs font-bold hover:underline">Install now</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Notification22Component {}`;
