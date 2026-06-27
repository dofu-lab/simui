import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

interface AccordionSubItem {
	id: string;
	title: string;
	content: string;
}

interface AccordionItem {
	id: string;
	title: string;
	subItem: AccordionSubItem[];
	content: string;
}

@Component({
	selector: 'sim-accordion-19',
	imports: [HlmAccordionImports, BrnAccordionImports, NgIcon],
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	host: { ngSkipHydration: 'true' },
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Multi-level</h2>
			<hlm-accordion class="rounded-lg border">
				@for (item of items; track $index) {
					<hlm-accordion-item class="border-b last:border-b-0">
						<h3 brnAccordionHeader class="flex px-4">
							<button
								brnAccordionTrigger
								data-slot="accordion-trigger"
								class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-start text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] motion-reduce:transition-none">
								{{ item.title }}
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
						<hlm-accordion-content class="has-data-[state=open]:h-auto! data-[state=closed]:h-0! [&>div]:pb-0!">
							<hlm-accordion class="bg-accent border-t">
								@for (subItem of item.subItem; track subItem.id) {
									<hlm-accordion-item>
										<h3 brnAccordionHeader class="flex px-4">
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
												<span data-slot="accordion-trigger-label" class="ms-2">{{ subItem.title }}</span>
											</button>
										</h3>
										<hlm-accordion-content class="pl-10">
											{{ subItem.content }}
										</hlm-accordion-content>
									</hlm-accordion-item>
								}
							</hlm-accordion>
						</hlm-accordion-content>
					</hlm-accordion-item>
				}
			</hlm-accordion>
		</div>
	`,
})
export class Accordion19Component {
	protected readonly items: AccordionItem[] = [
		{
			id: 'acc-19-1',
			title: 'Why choose SimUI?',
			subItem: [
				{
					id: 'acc-19-subItem1',
					title: 'Modern Architecture',
					content:
						'SimUI is built on Angular and Spartan UI, providing a robust foundation with the latest web standards. Its architecture ensures scalability and future-proofing for enterprise applications.',
				},
				{
					id: 'acc-19-subItem2',
					title: 'Design Philosophy',
					content:
						'We balanced aesthetics with functionality to create components that are visually appealing yet highly practical. Every design decision prioritizes both user experience and developer ergonomics.',
				},
			],
			content:
				'SimUI offers a carefully crafted component library that balances aesthetics with functionality. Built on Angular and Spartan UI, it provides a solid foundation for modern web applications.',
		},
		{
			id: 'acc-19-2',
			title: 'Is it developer-friendly?',
			subItem: [
				{
					id: 'acc-19-subItem3',
					title: 'Developer Experience',
					content:
						'With consistent APIs across all components, comprehensive TypeScript support, and detailed documentation, SimUI reduces the learning curve and accelerates development velocity.',
				},
				{
					id: 'acc-19-subItem4',
					title: 'Tooling & Integration',
					content:
						'SimUI seamlessly integrates with the Angular ecosystem and popular development tools. CLI generators, DevTools extensions, and linting rules are available to enhance your workflow.',
				},
			],
			content:
				'Absolutely. SimUI components are designed with a consistent API, comprehensive documentation, and ready-to-use examples to make implementation straightforward and intuitive.',
		},
		{
			id: 'acc-19-3',
			title: 'Can I customize it?',
			subItem: [
				{
					id: 'acc-19-subItem5',
					title: 'Theming System',
					content:
						"SimUI's powerful theming system leverages Tailwind CSS to enable comprehensive styling options. Define your brand colors, typography, and other design tokens in one place to affect the entire system.",
				},
				{
					id: 'acc-19-subItem6',
					title: 'Component Variants',
					content:
						"Create custom variants of any component with minimal effort. SimUI's architecture allows you to extend existing components without duplicating code, making maintenance straightforward.",
				},
			],
			content:
				'Yes. With Tailwind CSS integration, SimUI components can be easily styled to match your brand. The underlying architecture supports theming and allows for component variants with minimal effort.',
		},
		{
			id: 'acc-19-4',
			title: 'What about performance?',
			subItem: [
				{
					id: 'acc-19-subItem7',
					title: 'Runtime Efficiency',
					content:
						'SimUI components are designed for minimal runtime overhead. With careful optimization of change detection, rendering processes, and DOM interactions, your application remains responsive even at scale.',
				},
				{
					id: 'acc-19-subItem8',
					title: 'Bundle Optimization',
					content:
						'All components are fully tree-shakable and lazy-loadable, ensuring your application only includes what it needs. This results in smaller bundles, faster loading times, and improved initial rendering.',
				},
			],
			content:
				"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		},
	];
}
