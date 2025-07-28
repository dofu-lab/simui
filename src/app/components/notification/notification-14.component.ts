import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleAlert, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-14',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow gap-3">
					<ng-icon hlm size="sm" name="lucideCircleAlert" class="mt-0.5 shrink-0 text-blue-500" />
					<div class="flex grow flex-col gap-3">
						<div class="space-y-1">
							<p class="text-sm font-medium">Here is some helpful information!</p>
							<p class="text-muted-foreground text-sm">
								It aims to provide clarity or support for better decision-making.
							</p>
						</div>
						<div>
							<button hlmBtn size="sm" class="h-8 text-xs">Learn more</button>
						</div>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification14Component {}

export const notification14Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleAlert, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-14',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	template: \`
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow gap-3">
					<ng-icon hlm size="sm" name="lucideCircleAlert" class="mt-0.5 shrink-0 text-blue-500" />
					<div class="flex grow flex-col gap-3">
						<div class="space-y-1">
							<p class="text-sm font-medium">Here is some helpful information!</p>
							<p class="text-muted-foreground text-sm">
								It aims to provide clarity or support for better decision-making.
							</p>
						</div>
						<div>
							<button hlmBtn size="sm" class="h-8 text-xs">Learn more</button>
						</div>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Notification14Component {}`;
