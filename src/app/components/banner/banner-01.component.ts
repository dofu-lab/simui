import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-01',
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideMail, lucideX })],
	host: {
		class: 'w-full',
	},
	template: `
		@if (isVisible()) {
			<div class="bg-background z-50 rounded-md border px-4 py-3 shadow-lg">
				<div class="relative flex gap-2 md:items-center">
					<div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
						<div class="flex items-center gap-3">
							<div class="flex h-[32px] w-[32px] items-center justify-center rounded-lg border shadow-xs">
								<ng-icon hlm name="lucideMail" size="sm" />
							</div>
							<div class="font-semibold">Stay up to date with the latest news and updates</div>
						</div>
						<div class="flex flex-col gap-2">
							<button hlmBtn variant="default" size="sm" class="h-8">Subscribe</button>
						</div>
					</div>
					<button
						hlmBtn
						variant="ghost"
						size="icon"
						class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0"
						(click)="onHideBanner()">
						<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
					</button>
				</div>
			</div>
		}
	`,
})
export class Banner01Component {
	isVisible = signal<boolean>(true);

	onHideBanner() {
		this.isVisible.set(false);
	}
}

export const banner01Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-01',
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideMail, lucideX })],
	host: {
		class: 'w-full',
	},
	template: \`
		@if (isVisible()) {
			<div class="bg-background z-50 rounded-md border px-4 py-3 shadow-lg">
				<div class="relative flex gap-2 md:items-center">
					<div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
						<div class="flex items-center gap-3">
							<div class="flex h-[32px] w-[32px] items-center justify-center rounded-lg border shadow-xs">
								<ng-icon hlm name="lucideMail" size="sm" />
							</div>
							<div class="font-semibold">Stay up to date with the latest news and updates</div>
						</div>
						<div class="flex flex-col gap-2">
							<button hlmBtn variant="default" size="sm" class="h-8">Subscribe</button>
						</div>
					</div>
					<button
						hlmBtn
						variant="ghost"
						size="icon"
						class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0"
						(click)="onHideBanner()">
						<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
					</button>
				</div>
			</div>
		}
	\`,
})
export class Banner01Component {
	isVisible = signal<boolean>(true);

	onHideBanner() {
		this.isVisible.set(false);
	}
}`;
