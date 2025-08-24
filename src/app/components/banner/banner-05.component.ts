import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSparkles, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-05',
	standalone: true,
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideSparkles, lucideX })],
	host: {
		class: 'w-full',
	},
	template: `
		@if (isVisible()) {
			<div class="bg-background z-50 border-b px-4 py-3">
				<div class="relative flex gap-2 md:items-center">
					<div class="flex grow flex-col justify-center gap-0.5 md:flex-row md:items-center md:gap-3">
						<span class="text-primary font-semibold">New feature was launched!</span>
						<div class="text-muted-foreground">
							Try out the
							<a href="#" class="underline hover:no-underline">new dashboard</a>
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
export class Banner05Component {
	isVisible = signal<boolean>(true);

	onHideBanner() {
		this.isVisible.set(false);
	}
}

export const banner05Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSparkles, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-05',
	standalone: true,
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideSparkles, lucideX })],
	host: {
		class: 'w-full',
	},
	template: \`
		@if (isVisible()) {
			<div class="bg-background z-50 border-b px-4 py-3">
				<div class="relative flex gap-2 md:items-center">
					<div class="flex grow flex-col justify-center gap-0.5 md:flex-row md:items-center md:gap-3">
						<span class="text-primary font-semibold">New feature was launched!</span>
						<div class="text-muted-foreground">
							Try out the
							<a href="#" class="underline hover:no-underline">new dashboard</a>
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
export class Banner05Component {
	isVisible = signal<boolean>(true);

	onHideBanner() {
		this.isVisible.set(false);
	}
}`;
