import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideArrowRight } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-11',
	imports: [NgIcon, HlmIcon, HlmButton, BrnPopover, BrnPopoverTrigger, BrnPopoverContent, HlmPopoverContent],
	providers: [provideIcons({ lucideArrowLeft, lucideArrowRight })],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" brnPopoverTrigger hlmBtn>Tooltip-like with nav</button>
			<div hlmPopoverContent class="grid gap-1" *brnPopoverContent="let ctx">
				<div class="text-sm font-medium">
					{{ steps[currentStep()].title }}
				</div>

				<p class="text-muted-foreground text-xs">
					{{ steps[currentStep()].description }}
				</p>

				<div class="mt-1 flex items-center justify-between gap-2">
					<span class="text-muted-foreground text-xs">{{ currentStep() + 1 }}/{{ steps.length }}</span>
					<div>
						<button
							hlmBtn
							variant="ghost"
							size="icon"
							class="size-6"
							[disabled]="currentStep() === 0"
							(click)="previousStep()">
							<ng-icon hlm name="lucideArrowLeft" size="sm" />
						</button>
						<button
							hlmBtn
							variant="ghost"
							size="icon"
							class="size-6"
							[disabled]="currentStep() === steps.length - 1"
							(click)="nextStep()">
							<ng-icon hlm name="lucideArrowRight" size="sm" />
						</button>
					</div>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover11Component {
	public readonly steps = [
		{
			title: 'Welcome',
			description:
				'Get started with a comprehensive quick overview of the interface and learn about the main features available to you.',
		},
		{
			title: 'Quick actions',
			description:
				'Access your most frequently used actions and shortcuts right from here to streamline your workflow and boost productivity.',
		},
		{
			title: 'Help',
			description:
				'Need assistance or have questions about any feature? Visit our comprehensive Help Center anytime for detailed guides.',
		},
		{
			title: 'Settings',
			description:
				'Customize your experience by adjusting preferences, themes, and configurations to match your working style and needs.',
		},
		{
			title: 'Explore',
			description:
				'Discover advanced features and hidden gems throughout the application to unlock its full potential and capabilities.',
		},
	];
	currentStep = signal(0);

	nextStep() {
		if (this.currentStep() < this.steps.length - 1) {
			this.currentStep.update((value: number) => value + 1);
		}
	}

	public previousStep() {
		if (this.currentStep() > 0) {
			this.currentStep.update((value: number) => value - 1);
		}
	}
}