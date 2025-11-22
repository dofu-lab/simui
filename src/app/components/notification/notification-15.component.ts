import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleAlert, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-15',
	providers: [provideIcons({ lucideCircleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-medium">We Value Your Privacy 🍪</p>
						<p class="text-muted-foreground text-sm">
							We use cookies to improve your experience, and show personalized content.
						</p>
					</div>
					<div class="flex gap-2">
						<button hlmBtn size="sm" class="h-8 text-xs">Accept</button>
						<button hlmBtn size="sm" variant="outline" class="h-8 text-xs">Decline</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification15Component {}

export const notification15Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleAlert, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-15',
	providers: [provideIcons({ lucideCircleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: \`
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-medium">We Value Your Privacy 🍪</p>
						<p class="text-muted-foreground text-sm">
							We use cookies to improve your experience, and show personalized content.
						</p>
					</div>
					<div class="flex gap-2">
						<button hlmBtn size="sm" class="h-8 text-xs">Accept</button>
						<button hlmBtn size="sm" variant="outline" class="h-8 text-xs">Decline</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Notification15Component {}`;
