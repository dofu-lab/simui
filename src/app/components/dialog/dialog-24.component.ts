import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';

interface DialogStep {
	id: number;
	title: string;
	description: string;
}

@Component({
	selector: 'sim-dialog-24',
	imports: [NgIcon, HlmIconImports, HlmButtonImports, HlmDialogImports],
	providers: [provideIcons({ lucideArrowRight })],
	template: `
		<hlm-dialog>
			<button hlmDialogTrigger hlmBtn variant="outline">Onboarding</button>
			<hlm-dialog-content class="w-[calc(100vw-2rem)] gap-0 p-0 sm:max-w-[400px]" *hlmDialogPortal="let ctx">
				<div class="p-2">
					<img src="assets/logos/logo-with-bg.png" alt="Logo" class="w-full rounded-md" width="382" height="216" />
				</div>
				<div class="px-6 pt-3 pb-6">
					<div class="flex flex-col gap-1 pb-4">
						<h3 class="text-lg font-semibold">{{ currentStep()?.title }}</h3>
						<p class="text-muted-foreground text-sm">{{ currentStep()?.description }}</p>
					</div>
					<div class="flex justify-between">
						<div class="flex items-center justify-center gap-2">
							@for (step of steps; track step.id) {
								<div
									class="bg-primary size-1.5 rounded-full {{
										step.id === currentStep()?.id ? 'opacity-100' : 'opacity-20'
									}}"></div>
							}
						</div>
						<div class="flex gap-2">
							<button hlmBtn size="sm" variant="outline" (click)="closeDialog()">Skip</button>
							<button hlmBtn size="sm" class="group" (click)="onNextStep()">
								@if (currentStepIndex() === steps.length) {
									Okay
								} @else {
									Next
									<ng-icon
										hlm
										name="lucideArrowRight"
										size="sm"
										class="ms-1 transition-transform duration-150 motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5" />
								}
							</button>
						</div>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog24Component {
	protected readonly dialogRef = viewChild(HlmDialog);
	protected readonly currentStepIndex = signal(1);
	protected readonly currentStep = computed(() => this.steps.find((step) => step.id === this.currentStepIndex()));

	protected readonly steps: DialogStep[] = [
		{
			id: 1,
			title: 'Welcome to SimUI',
			description: 'Discover a powerful collection of components designed to enhance your development workflow.',
		},
		{
			id: 2,
			title: 'Explore the Components',
			description: 'Browse through a wide range of components that can be easily integrated into your projects.',
		},
		{
			id: 3,
			title: 'Join the Community',
			description: 'Connect with other developers, share your projects, and get inspired by the SimUI community.',
		},
		{
			id: 4,
			title: 'Get Started',
			description: 'Start building amazing applications with SimUI and take your development to the next level.',
		},
	];

	protected onNextStep(): void {
		if (this.currentStepIndex() < this.steps.length) {
			this.currentStepIndex.update((index) => index + 1);
		} else {
			this.closeDialog();
		}
	}

	protected closeDialog(): void {
		this.dialogRef()?.close({});
	}
}
