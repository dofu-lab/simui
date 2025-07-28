import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRadio, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-17',
	standalone: true,
	providers: [
		provideIcons({
			lucideX,
			lucideRadio,
		}),
	],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex items-center gap-2">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
					<ng-icon hlm name="lucideRadio" size="sm" class="opacity-60" />
				</div>
				<div class="flex grow items-center gap-12">
					<div class="space-y-1">
						<p class="text-sm font-medium">Live in 27 hours</p>
						<p class="text-muted-foreground text-xs">November 20 at 8:00 PM.</p>
					</div>
					<button hlmBtn size="sm" class="h-8 text-xs">Notify me</button>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification17Component {}

export const notification17Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRadio, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-17',
	standalone: true,
	providers: [
		provideIcons({
			lucideX,
			lucideRadio,
		}),
	],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	template: \`
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex items-center gap-2">
				<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
					<ng-icon hlm name="lucideRadio" size="sm" class="opacity-60" />
				</div>
				<div class="flex grow items-center gap-12">
					<div class="space-y-1">
						<p class="text-sm font-medium">Live in 27 hours</p>
						<p class="text-muted-foreground text-xs">November 20 at 8:00 PM.</p>
					</div>
					<button hlmBtn size="sm" class="h-8 text-xs">Notify me</button>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Notification17Component {}`;
