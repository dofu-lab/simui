import { Component } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-06',
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" brnPopoverTrigger hlmBtn>Popover with steps</button>
			<div hlmPopoverContent class="grid gap-4" *brnPopoverContent="let ctx">
				<div class="text-sm font-semibold">
					{{ steps[currentStep].title }}
				</div>

				<p class="text-muted-foreground text-sm">
					{{ steps[currentStep].description }}
				</p>

				<div class="flex items-center justify-between gap-2">
					<span class="text-muted-foreground text-xs">{{ currentStep + 1 }}/{{ steps.length }}</span>
					<button hlmBtn size="sm" variant="link" (click)="nextStep()">
						@if (currentStep === steps.length - 1) {
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
	currentStep = 0;

	steps = [
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

	nextStep() {
		this.currentStep = (this.currentStep + 1) % this.steps.length;
	}
}

export const Popover06Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
  selector: 'sim-popover-06',
  imports: [
    HlmButtonDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
  ],
  template: \`
    <brn-popover sideOffset="5">
      <button variant="outline" brnPopoverTrigger hlmBtn>
        Popover with steps
      </button>
      <div hlmPopoverContent class="grid gap-4" *brnPopoverContent="let ctx">
        <div class="text-sm font-semibold">
          {{ steps[currentStep].title }}
        </div>

        <p class="text-sm text-muted-foreground">
          {{ steps[currentStep].description }}
        </p>

        <div class="flex items-center justify-between gap-2 ">
          <span class="text-xs text-muted-foreground">{{ currentStep + 1 }}/{{ steps.length }}</span>
          <button hlmBtn size="sm" variant="link" (click)="nextStep()">
            @if (currentStep === steps.length - 1) {
              Start over
            } @else {
              Next
            }
          </button>
        </div>
      </div>
    </brn-popover>
  \`,
})
export class Popover06Component {
  currentStep = 0;

  steps = [
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

  nextStep() {
    this.currentStep = (this.currentStep + 1) % this.steps.length;
  }
}
`;
