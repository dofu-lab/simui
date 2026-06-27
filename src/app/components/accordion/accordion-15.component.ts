import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

interface AccordionItem {
	id: string;
	title: string;
	content: string;
}

@Component({
	selector: 'sim-accordion-15',
	imports: [HlmAccordionImports],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Table W/ chevron</h2>
			<hlm-accordion class="rounded-lg border">
				@for (item of items; track $index) {
					<hlm-accordion-item class="border-b px-4 last:border-b-0">
						<hlm-accordion-trigger>
							{{ item.title }}
						</hlm-accordion-trigger>
						<hlm-accordion-content>{{ item.content }}</hlm-accordion-content>
					</hlm-accordion-item>
				}
			</hlm-accordion>
		</div>
	`,
})
export class Accordion15Component {
	protected readonly items: AccordionItem[] = [
		{
			id: 'acc-15-1',
			title: 'Why choose SimUI?',
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-15-2',
			title: 'Is it developer-friendly?',
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-15-3',
			title: 'Can I customize it?',
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand.  The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-15-4',
			title: 'What about performance?',
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}
