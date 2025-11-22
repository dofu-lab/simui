import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSparkles, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-02',
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideSparkles, lucideX })],
	host: {
		class: 'w-full',
	},
	template: `
		@if (isVisible()) {
			<div class="bg-background z-50 rounded-md border px-4 py-3 shadow-lg">
				<div class="relative flex gap-2 md:items-center">
					<div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
						<div class="flex items-start gap-2 md:items-center">
							<div class="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-lg border shadow-xs">
								<ng-icon hlm name="lucideSparkles" size="sm" />
							</div>
							<div class="flex gap-1.5">
								<span class="text-primary pr-4">
									We use third-party cookies in order to personalize your experience. Read our
									<a href="#" class="text-muted-foreground underline hover:no-underline">Cookie Policy</a>
								</span>
							</div>
						</div>
						<div class="relative flex flex-col gap-3 max-md:flex-wrap md:flex-row">
							<button hlmBtn variant="outline" size="sm" class="h-8">Decline</button>
							<button hlmBtn variant="default" size="sm" class="h-8">Allow</button>
						</div>
					</div>
					<button
						hlmBtn
						variant="ghost"
						size="icon"
						class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0"
						(click)="onHideBanner()">
						<ng-icon
							hlm
							name="lucideX"
							size="sm"
							class="text-primary opacity-60 transition-opacity group-hover:opacity-100" />
					</button>
				</div>
			</div>
		}
	`,
})
export class Banner02Component {
	isVisible = signal<boolean>(true);

	onHideBanner() {
		this.isVisible.set(false);
	}
}

export const banner02Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSparkles, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-02',
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideSparkles, lucideX })],
	host: {
		class: 'w-full',
	},
	template: \`
		@if (isVisible()) {
			<div class="bg-background z-50 rounded-md border px-4 py-3 shadow-lg">
				<div class="relative flex gap-2 md:items-center">
					<div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
						<div class="flex items-start gap-2 md:items-center">
							<div class="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-lg border shadow-xs">
								<ng-icon hlm name="lucideSparkles" size="sm" />
							</div>
							<div class="flex gap-1.5">
								<span class="text-primary pr-4">
									We use third-party cookies in order to personalize your experience. Read our
									<a href="#" class="text-muted-foreground underline hover:no-underline">Cookie Policy</a>
								</span>
							</div>
						</div>
						<div class="relative flex flex-col gap-3 max-md:flex-wrap md:flex-row">
							<button hlmBtn variant="outline" size="sm" class="h-8">Decline</button>
							<button hlmBtn variant="default" size="sm" class="h-8">Allow</button>
						</div>
					</div>
					<button
						hlmBtn
						variant="ghost"
						size="icon"
						class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0"
						(click)="onHideBanner()">
						<ng-icon
							hlm
							name="lucideX"
							size="sm"
							class="text-primary opacity-60 transition-opacity group-hover:opacity-100" />
					</button>
				</div>
			</div>
		}
	\`,
})
export class Banner02Component {
	isVisible = signal<boolean>(true);

	onHideBanner() {
		this.isVisible.set(false);
	}
}`;
