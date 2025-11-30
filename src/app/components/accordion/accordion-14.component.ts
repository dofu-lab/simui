import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import {
	HlmAccordion,
	HlmAccordionContent,
	HlmAccordionIcon,
	HlmAccordionItem,
	HlmAccordionTrigger,
} from '@spartan-ng/helm/accordion';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-14',
	imports: [
		HlmAccordion,
		HlmAccordionItem,
		HlmAccordionTrigger,
		HlmAccordionContent,
		HlmAccordionIcon,
		HlmIcon,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucidePlus, lucideMinus })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Tabs W/ left plus-minus</h2>
			<div hlmAccordion class="flex flex-col gap-2">
				@for (item of items; track item.id) {
					<div
						hlmAccordionItem
						class="has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 has-focus-visible:ring-[3px] has-focus-visible:outline-none">
						<h3 class="contents">
							<button
								hlmAccordionTrigger
								class="flex flex-1 items-center justify-start gap-3 rounded-md px-0 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&>ng-icon>svg>path:last-child]:origin-center [&>ng-icon>svg>path:last-child]:transition-all [&>ng-icon>svg>path:last-child]:duration-200 [&[data-state=open]>ng-icon>svg]:rotate-180 [&[data-state=open]>ng-icon>svg>path:last-child]:rotate-90 [&[data-state=open]>ng-icon>svg>path:last-child]:opacity-0">
								<ng-icon hlm hlmAccIcon name="lucidePlus" class="opacity-60" />
								<span class="text-[15px] leading-6 font-semibold">
									{{ item.title }}
								</span>
							</button>
						</h3>

						<hlm-accordion-content class="text-muted-foreground ps-7">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	`,
})
export class Accordion14Component {
	items = [
		{
			id: 'acc-14-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-14-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-14-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-14-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}