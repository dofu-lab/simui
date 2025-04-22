import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChevronDown,
	lucideFlaskConical,
	lucideGauge,
	lucideGroup,
	lucideHandshake,
	lucideLaptop,
	lucidePackageCheck,
	lucidePalette,
	lucidePuzzle,
	lucidePyramid,
	lucideRatio,
	lucideServerCog,
	lucideZap,
} from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-20',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideGroup,
			lucideLaptop,
			lucideServerCog,
			lucideZap,
			lucidePyramid,
			lucideRatio,
			lucideFlaskConical,
			lucideHandshake,
			lucidePalette,
			lucidePuzzle,
			lucideGauge,
			lucidePackageCheck,
		}),
	],
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Multi-level W/ icon</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div hlmAccordionItem>
						<button
							hlmAccordionTrigger
							class="justify-start gap-3 py-3 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
							<span class="flex items-center gap-3 text-[15px] leading-6 font-semibold">
								<ng-icon hlm hlmAccIcon [name]="item.icon" class="opacity-60" />
								{{ item.title }}
							</span>
						</button>
						<hlm-accordion-content class="[&>div>p]:p-0">
							<div hlmAccordion>
								@for (subItem of item.subItem; track subItem.title) {
									<div hlmAccordionItem class="border-t border-b-0 py-3 ps-6 pe-4">
										<button
											hlmAccordionTrigger
											class="justify-start gap-4 px-0 py-0 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
											<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
											<span class="flex items-center gap-3 text-[15px] leading-6 font-semibold">
												<ng-icon hlm hlmAccIcon [name]="subItem.icon" class="opacity-60" />
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
export class Accordion20Component {
	items = [
		{
			id: 'acc-20-item1',
			title: 'Why choose SimUI?',
			icon: 'lucideGroup',
			subItem: [
				{
					id: 'acc-20-subItem1',
					icon: 'lucidePyramid',
					title: 'Modern Architecture',
					content:
						'SimUI is built on Angular and Spartan UI, providing a robust foundation with the latest web standards. Its architecture ensures scalability and future-proofing for enterprise applications.',
				},
				{
					id: 'acc-20-subItem2',
					icon: 'lucideRatio',
					title: 'Design Philosophy',
					content:
						'We balanced aesthetics with functionality to create components that are visually appealing yet highly practical. Every design decision prioritizes both user experience and developer ergonomics.',
				},
			],
		},
		{
			id: 'acc-20-item2',
			title: 'Is it developer-friendly?',
			icon: 'lucideLaptop',
			subItem: [
				{
					id: 'acc-20-subItem3',
					icon: 'lucideFlaskConical',
					title: 'Developer Experience',
					content:
						'With consistent APIs across all components, comprehensive TypeScript support, and detailed documentation, SimUI reduces the learning curve and accelerates development velocity.',
				},
				{
					id: 'acc-20-subItem4',
					icon: 'lucideHandshake',
					title: 'Tooling & Integration',
					content:
						'SimUI seamlessly integrates with the Angular ecosystem and popular development tools. CLI generators, DevTools extensions, and linting rules are available to enhance your workflow.',
				},
			],
		},
		{
			id: 'acc-20-item3',
			title: 'Can I customize it?',
			icon: 'lucideServerCog',
			subItem: [
				{
					id: 'acc-20-subItem5',
					icon: 'lucidePalette',
					title: 'Theming System',
					content:
						"SimUI's powerful theming system leverages Tailwind CSS to enable comprehensive styling options. Define your brand colors, typography, and other design tokens in one place to affect the entire system.",
				},
				{
					id: 'acc-20-subItem6',
					icon: 'lucidePuzzle',
					title: 'Component Variants',
					content:
						"Create custom variants of any component with minimal effort. SimUI's architecture allows you to extend existing components without duplicating code, making maintenance straightforward.",
				},
			],
		},
		{
			id: 'acc-20-item4',
			title: 'What about performance?',
			icon: 'lucideZap',
			subItem: [
				{
					id: 'acc-20-subItem7',
					icon: 'lucideGauge',
					title: 'Runtime Efficiency',
					content:
						'SimUI components are designed for minimal runtime overhead. With careful optimization of change detection, rendering processes, and DOM interactions, your application remains responsive even at scale.',
				},
				{
					id: 'acc-20-subItem8',
					icon: 'lucidePackageCheck',
					title: 'Bundle Optimization',
					content:
						'All components are fully tree-shakable and lazy-loadable, ensuring your application only includes what it needs. This results in smaller bundles, faster loading times, and improved initial rendering.',
				},
			],
		},
	];
}

export const accordion20Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChevronDown,
	lucideFlaskConical,
	lucideGauge,
	lucideGroup,
	lucideHandshake,
	lucideLaptop,
	lucidePackageCheck,
	lucidePalette,
	lucidePuzzle,
	lucidePyramid,
	lucideRatio,
	lucideServerCog,
	lucideZap,
} from '@ng-icons/lucide';
import {
	HlmAccordionContentComponent,
	HlmAccordionDirective,
	HlmAccordionIconDirective,
	HlmAccordionItemDirective,
	HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-accordion-20',
	imports: [
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentComponent,
		HlmAccordionIconDirective,
		HlmIconDirective,
		NgIcon,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideGroup,
			lucideLaptop,
			lucideServerCog,
			lucideZap,
			lucidePyramid,
			lucideRatio,
			lucideFlaskConical,
			lucideHandshake,
			lucidePalette,
			lucidePuzzle,
			lucideGauge,
			lucidePackageCheck,
		}),
	],
	template: \`
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Multi-level W/ icon</h2>
			<div hlmAccordion>
				@for (item of items; track item.id) {
					<div hlmAccordionItem>
						<button
							hlmAccordionTrigger
							class="justify-start gap-3 py-3 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
							<span class="flex items-center gap-3 text-[15px] leading-6 font-semibold">
								<ng-icon hlm hlmAccIcon [name]="item.icon" class="opacity-60" />
								{{ item.title }}
							</span>
						</button>
						<hlm-accordion-content class="[&>div>p]:p-0">
							<div hlmAccordion>
								@for (subItem of item.subItem; track subItem.title) {
									<div hlmAccordionItem class="border-t border-b-0 py-3 ps-6 pe-4">
										<button
											hlmAccordionTrigger
											class="justify-start gap-4 px-0 py-0 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0">
											<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
											<span class="flex items-center gap-3 text-[15px] leading-6 font-semibold">
												<ng-icon hlm hlmAccIcon [name]="subItem.icon" class="opacity-60" />
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
export class Accordion20Component {
	items = [
		{
			id: 'acc-20-item1',
			title: 'Why choose SimUI?',
			icon: 'lucideGroup',
			subItem: [
				{
					id: 'acc-20-subItem1',
					icon: 'lucidePyramid',
					title: 'Modern Architecture',
					content:
						'SimUI is built on Angular and Spartan UI, providing a robust foundation with the latest web standards. Its architecture ensures scalability and future-proofing for enterprise applications.',
				},
				{
					id: 'acc-20-subItem2',
					icon: 'lucideRatio',
					title: 'Design Philosophy',
					content:
						'We balanced aesthetics with functionality to create components that are visually appealing yet highly practical. Every design decision prioritizes both user experience and developer ergonomics.',
				},
			],
		},
		{
			id: 'acc-20-item2',
			title: 'Is it developer-friendly?',
			icon: 'lucideLaptop',
			subItem: [
				{
					id: 'acc-20-subItem3',
					icon: 'lucideFlaskConical',
					title: 'Developer Experience',
					content:
						'With consistent APIs across all components, comprehensive TypeScript support, and detailed documentation, SimUI reduces the learning curve and accelerates development velocity.',
				},
				{
					id: 'acc-20-subItem4',
					icon: 'lucideHandshake',
					title: 'Tooling & Integration',
					content:
						'SimUI seamlessly integrates with the Angular ecosystem and popular development tools. CLI generators, DevTools extensions, and linting rules are available to enhance your workflow.',
				},
			],
		},
		{
			id: 'acc-20-item3',
			title: 'Can I customize it?',
			icon: 'lucideServerCog',
			subItem: [
				{
					id: 'acc-20-subItem5',
					icon: 'lucidePalette',
					title: 'Theming System',
					content:
						"SimUI's powerful theming system leverages Tailwind CSS to enable comprehensive styling options. Define your brand colors, typography, and other design tokens in one place to affect the entire system.",
				},
				{
					id: 'acc-20-subItem6',
					icon: 'lucidePuzzle',
					title: 'Component Variants',
					content:
						"Create custom variants of any component with minimal effort. SimUI's architecture allows you to extend existing components without duplicating code, making maintenance straightforward.",
				},
			],
		},
		{
			id: 'acc-20-item4',
			title: 'What about performance?',
			icon: 'lucideZap',
			subItem: [
				{
					id: 'acc-20-subItem7',
					icon: 'lucideGauge',
					title: 'Runtime Efficiency',
					content:
						'SimUI components are designed for minimal runtime overhead. With careful optimization of change detection, rendering processes, and DOM interactions, your application remains responsive even at scale.',
				},
				{
					id: 'acc-20-subItem8',
					icon: 'lucidePackageCheck',
					title: 'Bundle Optimization',
					content:
						'All components are fully tree-shakable and lazy-loadable, ensuring your application only includes what it needs. This results in smaller bundles, faster loading times, and improved initial rendering.',
				},
			],
		},
	];
}
`;
