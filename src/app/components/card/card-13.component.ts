import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArrowDown,
	lucideArrowLeftRight,
	lucideArrowRight,
	lucideBot,
	lucideCheck,
	lucideMessageSquare,
	lucidePlay,
	lucideSparkle,
} from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';

interface Step {
	id: string;
	icon: string;
	title: string;
	content: string;
	isFinished: boolean;
}

const stepsData: Step[] = [
	{
		id: 'card-13-1',
		icon: 'lucideBot',
		title: 'Meet your agent',
		content: 'A focused workspace where you brief an agent, watch it work, and pick up the results.',
		isFinished: false,
	},
	{
		id: 'card-13-2',
		icon: 'lucideSparkle',
		title: 'Skills add abilities',
		content:
			'Drop in skills to extend your agent’s capabilities. SimUI’s modular design allows you to easily integrate new features and customize existing ones to fit your needs.',
		isFinished: false,
	},
	{
		id: 'card-13-3',
		icon: 'lucideMessageSquare',
		title: 'Chats keep history',
		content:
			'Every task lives as a chat. Reopen one anytime to review the history, pick up where you left off, or even share it with a friend. SimUI’s intuitive interface makes it easy to manage and navigate your chats.',
		isFinished: false,
	},
	{
		id: 'card-13-4',
		icon: 'lucidePlay',
		title: 'Try a task',
		content:
			"SimUI is built with performance in mind. Components are lightweight, tree-shakable, and optimized  for modern browsers. They're designed to maintain responsiveness even in complex applications.",
		isFinished: false,
	},
];

@Component({
	selector: 'sim-card-13',
	imports: [
		NgIcon,
		HlmIconImports,
		HlmCardImports,
		HlmButtonImports,
		HlmBadgeImports,
		HlmAccordionImports,
		BrnAccordionImports,
	],
	providers: [
		provideIcons({
			lucideArrowDown,
			lucideArrowLeftRight,
			lucideArrowRight,
			lucideBot,
			lucideSparkle,
			lucideMessageSquare,
			lucidePlay,
			lucideCheck,
		}),
	],
	host: { class: 'w-full' },
	styles: [
		`
			@keyframes contentEnter {
				from {
					opacity: 0;
					transform: translateY(6px);
				}
				to {
					opacity: 1;
					transform: translateY(0);
				}
			}
			@keyframes contentLeave {
				from {
					opacity: 1;
					transform: translateY(0);
				}
				to {
					opacity: 0;
					transform: translateY(-6px);
				}
			}
			.content-enter {
				animation: contentEnter 220ms 80ms cubic-bezier(0.215, 0.61, 0.355, 1) both;
			}
			.content-leave {
				animation: contentLeave 150ms cubic-bezier(0.55, 0, 1, 0.45) both;
			}
			@media (prefers-reduced-motion: reduce) {
				.content-enter,
				.content-leave {
					animation-duration: 1ms;
					animation-delay: 0ms;
				}
			}
		`,
	],
	template: `
		<section class="bg-muted mx-auto flex w-full max-w-120 flex-col gap-4 rounded-4xl p-1.5 shadow-none">
			<div hlmCardHeader class="flex flex-row items-center justify-between px-6 pt-4">
				<div class="flex items-center gap-2">
					<h3 hlmCardTitle>Get started</h3>
					<span hlmBadge variant="outline" class="text-muted-foreground">
						{{ currentStepIndex() }} / {{ totalStep }}
					</span>
				</div>
				@if (numberOfLeftSteps() > 0) {
					<span class="text-muted-foreground text-xs">
						{{ numberOfLeftSteps() }} {{ numberOfLeftSteps() === 1 ? 'step' : 'steps' }} left
					</span>
				} @else {
					<span class="text-muted-foreground text-xs">All done</span>
				}
			</div>
			<section class="ring-background! w-full rounded-3xl py-4" hlmCard>
				<div hlmCardContent class="flex flex-col gap-1 px-4">
					@if (numberOfLeftSteps() === 0) {
						<div [animate.enter]="'content-enter'" class="flex flex-col items-start gap-4 px-4 py-6">
							<div class="flex size-10 items-center justify-center rounded-lg bg-emerald-100">
								<ng-icon hlm name="lucideCheck" class="text-emerald-600" />
							</div>
							<div class="flex flex-col items-start gap-1">
								<h2 class="text-lg font-semibold">You're all set</h2>
								<span class="text-muted-foreground text-sm">That's the tour. Time to make something cool!</span>
							</div>
							<button hlmBtn variant="secondary" class="rounded-full" (click)="resetSteps()">Start over</button>
						</div>
					} @else {
						<div [animate.enter]="'content-enter'" class="px-2">
							<hlm-accordion>
								@for (item of steps(); track item.id) {
									<hlm-accordion-item class="border-dashed" [isOpened]="currentStep() === item.id">
										<h3 brnAccordionHeader class="flex">
											<button
												brnAccordionTrigger
												data-slot="accordion-trigger"
												class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! **:data-[slot=accordion-support-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-start text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-support-icon]:text-[calc(var(--spacing)*4)] **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)] motion-reduce:transition-none">
												<ng-icon
													data-slot="accordion-support-icon"
													[name]="item.icon"
													class="pointer-events-none me-4 shrink-0" />
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
										<hlm-accordion-content class="flex flex-col gap-1 pl-8.5">
											<p class="text-muted-foreground">
												{{ item.content }}
											</p>
											<button hlmBtn class="rounded-full" (click)="finishStep(item.id)">
												Got it
												<ng-icon
													name="lucideArrowRight"
													class="transition-transform motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover/btn09:translate-x-0.5" />
											</button>
										</hlm-accordion-content>
									</hlm-accordion-item>
								}
							</hlm-accordion>
						</div>
					}
				</div>
			</section>
		</section>
	`,
})
export class Card13Component {
	protected readonly steps = signal<Step[]>(stepsData);
	protected readonly totalStep = this.steps().length;

	protected currentStep = computed(() => {
		const current = this.steps().find((item) => !item.isFinished);
		return current ? current.id : this.steps()[this.steps().length - 1].id;
	});
	protected currentStepIndex = computed(() => this.steps().findIndex((item) => item.id === this.currentStep()) + 1);
	protected numberOfLeftSteps = computed(() => this.steps().filter((item) => !item.isFinished).length);

	protected finishStep(id: string): void {
		this.steps.update((steps) => steps.map((item) => (item.id === id ? { ...item, isFinished: true } : item)));
	}

	protected resetSteps(): void {
		this.steps.update((steps) => steps.map((item) => ({ ...item, isFinished: false })));
	}
}
