import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

@Component({
	selector: 'sim-accordion-12',
	imports: [HlmAccordionImports, BrnAccordionImports, NgIcon],
	providers: [provideIcons({ lucidePlus, lucideMinus })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Tabs W/ plus-minus</h2>
			<hlm-accordion class="gap-2">
				@for (item of items; track item.id) {
					<hlm-accordion-item
						class="has-focus-visible:ring-ring/50 rounded-md border px-4 has-focus-visible:ring-[3px] has-focus-visible:outline-none">
						<h3 brnAccordionHeader class="flex">
							<button
								brnAccordionTrigger
								data-slot="accordion-trigger"
								class="**:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-3 text-start text-sm font-medium transition-all outline-none hover:underline aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] motion-reduce:transition-none">
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
export class Accordion12Component {
	protected readonly items = [
		{
			id: 'acc-12-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-12-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-12-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-12-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}
