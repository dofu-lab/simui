import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/helm/accordion';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-13',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucideChevronDown })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Tabs W/ left chevron</h2>
			<div hlmAccordion class="flex flex-col gap-2">
				@for (item of items; track item.id) {
					<div
						hlmAccordionItem
						class="has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 has-focus-visible:ring-[3px] has-focus-visible:outline-none">
						<button
							hlmAccordionTrigger
							class="justify-start gap-3 px-0 py-2 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
							<span class="text-[15px] leading-6 font-semibold">
								{{ item.title }}
							</span>
						</button>
						<hlm-accordion-content class="text-muted-foreground ps-7">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	`,
})
export class Accordion13Component {
	items = [
		{
			id: 'acc-13-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-13-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-13-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-13-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}

export const accordion13Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/helm/accordion';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-accordion-13',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	viewProviders: [provideIcons({ lucideChevronDown })],
	template: \`
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Tabs W/ left chevron</h2>
			<div hlmAccordion class="flex flex-col gap-2">
				@for (item of items; track item.id) {
					<div
						hlmAccordionItem
						class="has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 has-focus-visible:ring-[3px] has-focus-visible:outline-none">
						<button
							hlmAccordionTrigger
							class="justify-start gap-3 px-0 py-2 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
							<span class="text-[15px] leading-6 font-semibold">
								{{ item.title }}
							</span>
						</button>
						<hlm-accordion-content class="text-muted-foreground ps-7">
							{{ item.content }}
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	\`,
})
export class Accordion13Component {
	items = [
		{
			id: 'acc-13-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-13-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-13-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-13-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}`;
