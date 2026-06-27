import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideX } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-banner-03',
	imports: [NgIcon, HlmIconImports, HlmButtonImports, HlmInputImports],
	providers: [provideIcons({ lucideMail, lucideX })],
	host: {
		class: 'w-full',
	},
	template: `
		@if (isVisible()) {
			<div class="bg-background rounded-md border px-4 py-3 shadow-lg">
				<div class="relative flex gap-2 md:items-center">
					<div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
						<div class="flex items-start gap-3 md:items-center">
							<div class="flex size-10 shrink-0 items-center justify-center rounded-lg border shadow-xs md:size-12">
								<ng-icon hlm name="lucideMail" />
							</div>
							<div class="flex flex-col">
								<p class="text-primary font-semibold">Stay up to date with the latest news and updates</p>
								<p class="text-muted-foreground">Subscribe to our newsletter and get the latest updates and news</p>
							</div>
						</div>
						<div class="flex gap-3 max-md:flex-col max-md:flex-wrap">
							<input hlmInput placeholder="Enter your email" />
							<button hlmBtn>Subscribe</button>
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
							class="text-primary opacity-60 transition-opacity group-hover:opacity-100 motion-reduce:transition-none" />
					</button>
				</div>
			</div>
		}
	`,
})
export class Banner03Component {
	protected readonly isVisible = signal<boolean>(true);

	protected onHideBanner(): void {
		this.isVisible.set(false);
	}
}
