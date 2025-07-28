import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-10',
	standalone: true,
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	providers: [provideIcons({ lucideMail, lucideX })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="bg-secondary-foreground z-50 px-4 py-3">
			<div class="relative flex gap-2 md:items-center">
				<div class="flex grow flex-col justify-between gap-2 md:flex-row md:items-center md:gap-3">
					<div class="flex items-start gap-3 md:items-center">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border shadow-xs md:h-12 md:w-12">
							<ng-icon hlm name="lucideMail" class="text-primary-foreground" />
						</div>
						<div class="flex flex-col max-md:pr-4">
							<span class="text-primary-foreground font-semibold">
								Stay up to date with the latest news and updates
							</span>
							<span class="text-muted">Subscribe to our newsletter and get the latest updates and news</span>
						</div>
					</div>
					<button hlmBtn variant="secondary">Subscribe</button>
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
export class Banner10Component {}

export const banner10Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-banner-10',
	standalone: true,
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	providers: [provideIcons({ lucideMail, lucideX })],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="bg-secondary-foreground z-50 px-4 py-3">
			<div class="relative flex gap-2 md:items-center">
				<div class="flex grow flex-col justify-between gap-2 md:flex-row md:items-center md:gap-3">
					<div class="flex items-start gap-3 md:items-center">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border shadow-xs md:h-12 md:w-12">
							<ng-icon hlm name="lucideMail" class="text-primary-foreground" />
						</div>
						<div class="flex flex-col max-md:pr-4">
							<span class="text-primary-foreground font-semibold">
								Stay up to date with the latest news and updates
							</span>
							<span class="text-muted">Subscribe to our newsletter and get the latest updates and news</span>
						</div>
					</div>
					<button hlmBtn variant="secondary">Subscribe</button>
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
export class Banner10Component {}`;
