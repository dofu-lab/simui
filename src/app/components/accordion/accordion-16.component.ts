import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-16',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucidePlus })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Table W/ plus-minus</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div
						hlmAccordionItem
						class="bg-background has-focus-visible:ring-ring/50 relative border border-b-0 px-4 py-1 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]">
						<button
							hlmAccordionTrigger
							class="flex flex-1 items-center justify-between gap-4 rounded-md px-0 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&>ng-icon>svg>path:last-child]:origin-center [&>ng-icon>svg>path:last-child]:transition-all [&>ng-icon>svg>path:last-child]:duration-200 [&[data-state=open]>ng-icon>svg]:rotate-180 [&[data-state=open]>ng-icon>svg>path:last-child]:rotate-90 [&[data-state=open]>ng-icon>svg>path:last-child]:opacity-0">
							<span class="text-[15px] leading-6 font-semibold">
								{{ item.title }}
							</span>
							<ng-icon hlm hlmAccIcon name="lucidePlus" class="opacity-60" />
						</button>
						<hlm-accordion-content class="text-muted-foreground [&>div>p]:pb-2">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	`,
})
export class Accordion16Component {
	items = [
		{
			id: 'acc-16-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-16-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-16-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-16-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}

export const accordion16Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-16',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucidePlus })],
	template: \`
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Table W/ plus-minus</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div
						hlmAccordionItem
						class="bg-background has-focus-visible:ring-ring/50 relative border border-b-0 px-4 py-1 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]">
						<button
							hlmAccordionTrigger
							class="flex flex-1 items-center justify-between gap-4 rounded-md px-0 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&>ng-icon>svg>path:last-child]:origin-center [&>ng-icon>svg>path:last-child]:transition-all [&>ng-icon>svg>path:last-child]:duration-200 [&[data-state=open]>ng-icon>svg]:rotate-180 [&[data-state=open]>ng-icon>svg>path:last-child]:rotate-90 [&[data-state=open]>ng-icon>svg>path:last-child]:opacity-0">
							<span class="text-[15px] leading-6 font-semibold">
								{{ item.title }}
							</span>
							<ng-icon hlm hlmAccIcon name="lucidePlus" class="opacity-60" />
						</button>
						<hlm-accordion-content class="text-muted-foreground [&>div>p]:pb-2">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	\`,
})
export class Accordion16Component {
	items = [
		{
			id: 'acc-16-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-16-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-16-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-16-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}
`;
