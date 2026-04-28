import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { RadiusSliderComponent } from './radius-slider';
import { ShadowConfigComponent } from './shadow-config';
import { SpacingSliderComponent } from './spacing-slider';

@Component({
	selector: 'sim-theme-layout',
	imports: [
		HlmAccordionImports,
		BrnAccordionImports,
		NgIcon,
		RadiusSliderComponent,
		SpacingSliderComponent,
		ShadowConfigComponent,
	],
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	template: `
		<div #layoutScrollContainer class="relative h-full overflow-y-auto pt-2">
			<hlm-accordion type="multiple" class="absolute w-full gap-4 px-4 pb-4">
				<hlm-accordion-item
					id="radius"
					[isOpened]="true"
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Radius</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>
					<hlm-accordion-content class="data-[state=open]:h-fit [&>div]:pb-0">
						<div class="border-t p-4">
							<sim-radius-slider />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="spacing"
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Spacing</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>
					<hlm-accordion-content class="data-[state=open]:h-fit [&>div]:pb-0">
						<div class="border-t p-4">
							<sim-spacing-slider />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="shadow"
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Shadow</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>
					<hlm-accordion-content class="data-[state=open]:h-fit [&>div]:pb-0">
						<div class="border-t p-4">
							<sim-shadow-config />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>
		</div>
	`,
})
export class ThemeLayoutComponent {}
