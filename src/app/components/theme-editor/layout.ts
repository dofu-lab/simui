import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { RadiusSliderComponent } from './radius-slider';

@Component({
	selector: 'sim-theme-layout',
	imports: [HlmAccordionImports, NgIcon, HlmIcon, RadiusSliderComponent],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<div hlmAccordion type="multiple" class="w-full gap-4 px-4 pb-4">
			<div
				hlmAccordionItem
				class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
				<h3 class="contents">
					<button
						hlmAccordionTrigger
						class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
						<span class="text-sm leading-6">Radius</span>
						<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
					</button>
				</h3>

				<hlm-accordion-content class="[&>div]:pb-0">
					<div class="border-t p-4">
						<sim-radius-slider />
					</div>
				</hlm-accordion-content>
			</div>
		</div>
	`,
})
export class ThemeLayoutComponent {}
