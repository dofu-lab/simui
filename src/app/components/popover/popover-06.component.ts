import { Component, signal } from '@angular/core';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-06',
	imports: [HlmButton, BrnPopover, BrnPopoverTrigger, BrnPopoverContent, HlmPopoverContent],
	template: `
		<brn-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">Tooltip-like with steps</button>
			<div hlmPopoverContent class="grid gap-1" *brnPopoverContent="let ctx">
				<div class="text-sm font-medium">
					{{ steps[currentStep()].title }}
				</div>

				<p class="text-muted-foreground text-xs">
					{{ steps[currentStep()].description }}
				</p>

				<div class="mt-1 flex items-center justify-between gap-2">
					<span class="text-muted-foreground text-xs">{{ currentStep() + 1 }}/{{ steps.length }}</span>
					<button class="text-xs font-medium hover:underline" (click)="nextStep()">
						@if (currentStep() === steps.length - 1) {
							Start over
						} @else {
							Next
						}
					</button>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover06Component {
	public readonly steps = [
		{
			title: 'Welcome',
			description: 'Get started with a quick overview of the interface.',
		},
		{
			title: 'Quick actions',
			description: 'Access your most frequent actions right from here.',
		},
		{
			title: 'Help',
			description: 'Need assistance? Visit our Help Center anytime.',
		},
	];
	currentStep = signal(0);

	nextStep() {
		this.currentStep.update((value: number) => (value + 1) % this.steps.length);
	}
}