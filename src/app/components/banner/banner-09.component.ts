import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideSparkles, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-09',
	standalone: true,
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideX, lucideArrowRight, lucideSparkles })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="bg-secondary-foreground px-4 py-3">
			<div class="relative flex gap-2 md:items-center">
				<div class="flex grow flex-col justify-between gap-0.5 md:flex-row md:items-center md:gap-3">
					<div class="flex items-start gap-2 md:items-center">
						<div class="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-lg border shadow-xs">
							<ng-icon hlm name="lucideSparkles" size="sm" class="text-primary-foreground" />
						</div>
						<span class="text-primary-foreground max-md:pr-4">
							We use third-party cookies in order to personalize your experience. Read our
							<a href="#" class="text-muted underline hover:no-underline">Cookie Policy</a>
						</span>
					</div>
					<div class="relative flex flex-col gap-3 max-md:flex-wrap md:flex-row">
						<button hlmBtn variant="default" size="sm" class="h-8">Decline</button>
						<button hlmBtn variant="secondary" size="sm" class="h-8">Allow</button>
					</div>
				</div>
				<button
					hlmBtn
					variant="ghost"
					size="icon"
					class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0">
					<ng-icon
						hlm
						name="lucideX"
						size="sm"
						class="text-primary-foreground opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Banner09Component {}

export const banner09Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideSparkles, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-09',
	standalone: true,
	imports: [NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideX, lucideArrowRight, lucideSparkles })],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="bg-secondary-foreground px-4 py-3">
			<div class="relative flex gap-2 md:items-center">
				<div class="flex grow flex-col justify-between gap-0.5 md:flex-row md:items-center md:gap-3">
					<div class="flex items-start gap-2 md:items-center">
						<div class="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-lg border shadow-xs">
							<ng-icon hlm name="lucideSparkles" size="sm" class="text-primary-foreground" />
						</div>
						<span class="text-primary-foreground max-md:pr-4">
							We use third-party cookies in order to personalize your experience. Read our
							<a href="#" class="text-muted underline hover:no-underline">Cookie Policy</a>
						</span>
					</div>
					<div class="relative flex flex-col gap-3 max-md:flex-wrap md:flex-row">
						<button hlmBtn variant="default" size="sm" class="h-8">Decline</button>
						<button hlmBtn variant="secondary" size="sm" class="h-8">Allow</button>
					</div>
				</div>
				<button
					hlmBtn
					variant="ghost"
					size="icon"
					class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0">
					<ng-icon
						hlm
						name="lucideX"
						size="sm"
						class="text-primary-foreground opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	\`,
})
export class Banner09Component {}`;
