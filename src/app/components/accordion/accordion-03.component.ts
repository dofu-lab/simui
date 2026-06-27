import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

interface AccordionItem {
	id: string;
	title: string;
	content: string;
}

@Component({
	selector: 'sim-accordion-03',
	imports: [HlmAccordionImports, BrnAccordionImports, NgIcon],
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ left chevron</h2>
			<hlm-accordion>
				@for (item of items; track item.id) {
					<hlm-accordion-item>
						<h3 brnAccordionHeader class="flex">
							<button
								brnAccordionTrigger
								data-slot="accordion-trigger"
								class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-start text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] **:data-[slot=accordion-trigger-label]:me-auto motion-reduce:transition-none">
								<ng-icon
									name="lucideChevronDown"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
								<ng-icon
									name="lucideChevronUp"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
								<span data-slot="accordion-trigger-label" class="ms-2">{{ item.title }}</span>
							</button>
						</h3>
						<hlm-accordion-content class="pl-6">
							{{ item.content }}
						</hlm-accordion-content>
					</hlm-accordion-item>
				}
			</hlm-accordion>
		</div>
	`,
})
export class Accordion03Component {
	protected readonly items: AccordionItem[] = [
		{
			id: 'acc-03-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-03-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-03-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-03-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}
