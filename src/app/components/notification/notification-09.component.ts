import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleCheck, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-09',
	providers: [provideIcons({ lucideCircleCheck, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg">
			<div class="flex items-center gap-2">
				<div class="flex grow items-center gap-3">
					<ng-icon hlm name="lucideCircleCheck" size="sm" class="mt-0.5 shrink-0 text-emerald-500" />
					<div class="flex grow items-center justify-between gap-12">
						<p class="text-sm">You&lsquo;ve made changes!</p>
						<button hlmBtn size="sm">Undo</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification09Component {}

export const notification09Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleCheck, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-09',
	providers: [provideIcons({ lucideCircleCheck, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: \`
		<div class="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg">
			<div class="flex items-center gap-2">
				<div class="flex grow items-center gap-3">
					<ng-icon hlm name="lucideCircleCheck" size="sm" class="mt-0.5 shrink-0 text-emerald-500" />
					<div class="flex grow items-center justify-between gap-12">
						<p class="text-sm">You&lsquo;ve made changes!</p>
						<button hlmBtn size="sm">Undo</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Notification09Component {}`;
