import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChevronDown,
	lucideChevronUp,
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
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

@Component({
	selector: 'sim-accordion-20',
	imports: [HlmAccordionImports, BrnAccordionImports, NgIcon],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideChevronUp,
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
	host: { ngSkipHydration: 'true' },
	template: `
		<div class="space-y-4">
			<h2 class="text-xl font-bold">Multi-level W/ icon</h2>
			<hlm-accordion>
				@for (item of items; track $index) {
					<hlm-accordion-item>
						<h3 brnAccordionHeader class="flex">
							<button
								brnAccordionTrigger
								data-slot="accordion-trigger"
								class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! **:data-[slot=accordion-support-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-support-icon]:text-[calc(var(--spacing)*4)] **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] **:data-[slot=accordion-trigger-label]:me-auto">
								<ng-icon
									name="lucideChevronDown"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
								<ng-icon
									name="lucideChevronUp"
									data-slot="accordion-trigger-icon"
									class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
								<ng-icon
									data-slot="accordion-support-icon"
									[name]="item.icon"
									class="pointer-events-none ms-2 me-1 shrink-0" />
								<span data-slot="accordion-trigger-label" class="ms-2">{{ item.title }}</span>
							</button>
						</h3>
						<hlm-accordion-content class="has-data-[state=open]:h-auto! data-[state=closed]:h-0! [&>div]:pb-0!">
							<hlm-accordion class="border-t">
								@for (subItem of item.subItem; track subItem.id) {
									<hlm-accordion-item>
										<h3 brnAccordionHeader class="flex ps-6 pe-4">
											<button
												brnAccordionTrigger
												data-slot="accordion-trigger"
												class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! **:data-[slot=accordion-support-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-support-icon]:text-[calc(var(--spacing)*4)] **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] **:data-[slot=accordion-trigger-label]:me-auto">
												<ng-icon
													name="lucideChevronDown"
													data-slot="accordion-trigger-icon"
													class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
												<ng-icon
													name="lucideChevronUp"
													data-slot="accordion-trigger-icon"
													class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />

												<ng-icon
													data-slot="accordion-support-icon"
													[name]="subItem.icon"
													class="pointer-events-none ms-2 me-1 shrink-0" />
												<span data-slot="accordion-trigger-label" class="ms-2">{{ subItem.title }}</span>
											</button>
										</h3>
										<hlm-accordion-content class="pl-12">
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
export class Accordion20Component {
	protected readonly items = [
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
