import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-19',
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
			<h2 class="text-xl font-bold">Multi-level</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div
						hlmAccordionItem
						class="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border border-b-0 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]">
						<button
							hlmAccordionTrigger
							class="px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
							<span class="text-[15px] leading-6 font-semibold">
								{{ item.title }}
							</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
						<hlm-accordion-content class="[&>div>p]:p-0">
							<div hlmAccordion class="bg-accent">
								@for (subItem of item.subItem; track subItem.id) {
									<div hlmAccordionItem class="border-t border-b-0 px-4 py-3">
										<button
											hlmAccordionTrigger
											class="justify-start gap-4 px-0 py-0 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
											<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
											<span class="text-[15px] leading-6 font-semibold">
												{{ subItem.title }}
											</span>
										</button>
										<hlm-accordion-content class="text-muted-foreground ps-8 [&>div>p]:pb-0">
											{{ subItem.content }}
										</hlm-accordion-content>
									</div>
								}
							</div>
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	`,
})
export class Accordion19Component {
	items = [
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

export const accordion19Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-19',
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
			<h2 class="text-xl font-bold">Multi-level</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div
						hlmAccordionItem
						class="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border border-b-0 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]">
						<button
							hlmAccordionTrigger
							class="px-4 py-3 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
							<span class="text-[15px] leading-6 font-semibold">
								{{ item.title }}
							</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
						<hlm-accordion-content class="[&>div>p]:p-0">
							<div hlmAccordion class="bg-accent">
								@for (subItem of item.subItem; track subItem.id) {
									<div hlmAccordionItem class="border-t border-b-0 px-4 py-3">
										<button
											hlmAccordionTrigger
											class="justify-start gap-4 px-0 py-0 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
											<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
											<span class="text-[15px] leading-6 font-semibold">
												{{ subItem.title }}
											</span>
										</button>
										<hlm-accordion-content class="text-muted-foreground ps-8 [&>div>p]:pb-0">
											{{ subItem.content }}
										</hlm-accordion-content>
									</div>
								}
							</div>
						</hlm-accordion-content>
					</div>
				}
			</div>
		</div>
	\`,
})
export class Accordion19Component {
	items = [
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
`;
