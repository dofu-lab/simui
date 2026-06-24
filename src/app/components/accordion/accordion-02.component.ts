import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

@Component({
	selector: 'sim-accordion-02',
	imports: [HlmAccordionImports, NgIcon, BrnAccordionImports],
	providers: [provideIcons({ lucidePlus, lucideMinus })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ plus-minus</h2>
			<hlm-accordion>
				@for (item of items; track item.id) {
					<hlm-accordion-item>
						<h3 brnAccordionHeader class="flex">
							<button
								brnAccordionTrigger
								data-slot="accordion-trigger"
								class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-start text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] motion-reduce:transition-none">
								{{ item.title }}
								<ng-icon
									name="lucidePlus"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
								<ng-icon
									name="lucideMinus"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
							</button>
						</h3>
						<hlm-accordion-content>
							{{ item.content }}
						</hlm-accordion-content>
					</hlm-accordion-item>
				}
			</hlm-accordion>
		</div>
	`,
})
export class Accordion02Component {
	protected readonly items = [
		{
			id: 'acc-02-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-02-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-02-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-02-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}
