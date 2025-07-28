import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGroup, lucideLaptop, lucidePlus, lucideServerCog, lucideZap } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/helm/accordion';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-06',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucidePlus, lucideGroup, lucideLaptop, lucideServerCog, lucideZap })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ icon and plus-minus</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div hlmAccordionItem class="py-2">
						<button
							hlmAccordionTrigger
							class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md px-0 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none hover:no-underline disabled:pointer-events-none disabled:opacity-50 [&>ng-icon>svg>path:last-child]:origin-center [&>ng-icon>svg>path:last-child]:transition-all [&>ng-icon>svg>path:last-child]:duration-200 [&[data-state=open]>ng-icon>svg]:rotate-180 [&[data-state=open]>ng-icon>svg>path:last-child]:rotate-90 [&[data-state=open]>ng-icon>svg>path:last-child]:opacity-0">
							<span class="flex items-center gap-3 text-[15px] leading-6 font-semibold">
								<ng-icon hlm hlmAccIcon [name]="item.icon" class="opacity-60" />
								{{ item.title }}
							</span>
							<ng-icon hlm hlmAccIcon name="lucidePlus" class="opacity-60" />
						</button>
						<hlm-accordion-content class="text-muted-foreground">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	`,
})
export class Accordion06Component {
	items = [
		{
			id: 'acc-06-1',
			icon: 'lucideGroup',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-06-2',
			icon: 'lucideLaptop',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-06-3',
			icon: 'lucideServerCog',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-06-4',
			icon: 'lucideZap',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}

export const accordion06Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGroup, lucideLaptop, lucidePlus, lucideServerCog, lucideZap } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/helm/accordion';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-06',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucidePlus, lucideGroup, lucideLaptop, lucideServerCog, lucideZap })],
	template: \`
		<div class="space-y-4">
			<h2 class="text-xl font-bold">W/ icon and plus-minus</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div hlmAccordionItem class="py-2">
						<button
							hlmAccordionTrigger
							class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md px-0 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none hover:no-underline disabled:pointer-events-none disabled:opacity-50 [&>ng-icon>svg>path:last-child]:origin-center [&>ng-icon>svg>path:last-child]:transition-all [&>ng-icon>svg>path:last-child]:duration-200 [&[data-state=open]>ng-icon>svg]:rotate-180 [&[data-state=open]>ng-icon>svg>path:last-child]:rotate-90 [&[data-state=open]>ng-icon>svg>path:last-child]:opacity-0">
							<span class="flex items-center gap-3 text-[15px] leading-6 font-semibold">
								<ng-icon hlm hlmAccIcon [name]="item.icon" class="opacity-60" />
								{{ item.title }}
							</span>
							<ng-icon hlm hlmAccIcon name="lucidePlus" class="opacity-60" />
						</button>
						<hlm-accordion-content class="text-muted-foreground">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	\`,
})
export class Accordion06Component {
	items = [
		{
			id: 'acc-06-1',
			icon: 'lucideGroup',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-06-2',
			icon: 'lucideLaptop',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-06-3',
			icon: 'lucideServerCog',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-06-4',
			icon: 'lucideZap',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}`;
