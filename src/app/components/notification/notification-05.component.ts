import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideTriangleAlert, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-05',
	standalone: true,
	providers: [provideIcons({ lucideTriangleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow gap-3">
					<ng-icon hlm size="sm" name="lucideTriangleAlert" class="mt-0.5 shrink-0 text-amber-500" />
					<div class="flex grow justify-between gap-12">
						<p class="text-sm">Some information is missing!</p>
						<a href="#" class="group flex items-center text-sm font-medium whitespace-nowrap">
							Link
							<ng-icon
								hlm
								size="sm"
								name="lucideArrowRight"
								class="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5" />
						</a>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification05Component {}

export const notification05Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideTriangleAlert, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-notification-05',
	standalone: true,
	providers: [provideIcons({ lucideTriangleAlert, lucideArrowRight, lucideX })],
	imports: [NgIcon, HlmIcon, HlmButton],
	template: \`
		<div class="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow gap-3">
					<ng-icon hlm size="sm" name="lucideTriangleAlert" class="mt-0.5 shrink-0 text-amber-500" />
					<div class="flex grow justify-between gap-12">
						<p class="text-sm">Some information is missing!</p>
						<a href="#" class="group flex items-center text-sm font-medium whitespace-nowrap">
							Link
							<ng-icon
								hlm
								size="sm"
								name="lucideArrowRight"
								class="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5" />
						</a>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Notification05Component {}`;
