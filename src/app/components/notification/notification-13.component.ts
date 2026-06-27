import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleCheck, lucideX } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-13',
	imports: [NgIcon, HlmIconImports, HlmButtonImports],
	providers: [provideIcons({ lucideCircleCheck, lucideArrowRight, lucideX })],
	template: `
		<div class="bg-background max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow gap-3">
					<ng-icon hlm size="sm" name="lucideCircleCheck" class="mt-0.5 shrink-0 text-emerald-500" />
					<div class="flex grow flex-col gap-3">
						<div class="space-y-1">
							<p class="text-sm font-medium">Your request was completed!</p>
							<p class="text-muted-foreground text-sm">It demonstrates that the task or request has been processed.</p>
						</div>
						<div>
							<button hlmBtn size="sm" class="h-8 text-xs">Learn more</button>
						</div>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon
						hlm
						size="sm"
						name="lucideX"
						class="opacity-60 transition-opacity group-hover:opacity-100 motion-reduce:transition-none" />
				</button>
			</div>
		</div>
	`,
})
export class Notification13Component {}
