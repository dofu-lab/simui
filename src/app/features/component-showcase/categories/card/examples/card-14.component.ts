import { NgClass } from '@angular/common';
import { afterNextRender, Component, computed, OnDestroy, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArrowDown,
	lucideArrowLeftRight,
	lucideCheck,
	lucideDot,
	lucideEllipsis,
	lucideRefreshCw,
	lucideSquircle,
} from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmProgressImports } from '@spartan-ng/helm/progress';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

interface Task {
	id: string;
	name: string;
	state: 'Booting' | 'Running';
	status: 'running' | 'idle' | 'completed';
	time?: number;
}

const INITIAL_TASKS: Task[] = [
	{ id: 'task-01', name: 'Allocate microVM', status: 'idle', state: 'Booting' },
	{ id: 'task-02', name: 'Restore snapshot', status: 'idle', state: 'Booting' },
	{ id: 'task-03', name: 'Mount ephemeral FS', status: 'idle', state: 'Booting' },
	{ id: 'task-04', name: 'Boot runtime - Node 26', status: 'idle', state: 'Booting' },
	{ id: 'task-05', name: 'Execute main.js', status: 'idle', state: 'Running' },
	{ id: 'task-06', name: 'Reclaim sandbox', status: 'idle', state: 'Booting' },
];

@Component({
	selector: 'sim-card-14',
	imports: [
		NgIcon,
		NgClass,
		HlmIconImports,
		HlmCardImports,
		HlmButtonImports,
		HlmBadgeImports,
		HlmSpinnerImports,
		HlmProgressImports,
	],
	providers: [
		provideIcons({
			lucideArrowDown,
			lucideArrowLeftRight,
			lucideSquircle,
			lucideCheck,
			lucideEllipsis,
			lucideDot,
			lucideRefreshCw,
		}),
	],
	host: { class: 'w-full' },
	template: `
		<section class="bg-muted mx-auto flex w-full max-w-120 flex-col gap-4 rounded-4xl p-1.5 py-0 shadow-none">
			<div hlmCardHeader class="flex flex-col gap-3 px-6 pt-4">
				<div class="flex w-full items-center justify-between gap-4">
					<div class="flex items-center gap-2">
						<h3 hlmCardTitle>Sandbox</h3>
						<span hlmBadge variant="outline">node26</span>
					</div>
					<div class="flex items-center gap-1">
						@if (pipelineCompleted()) {
							<span class="text-xs font-semibold text-emerald-700">Done</span>
							<div class="size-4 rounded-full border-4 border-emerald-200 bg-emerald-700 dark:border-emerald-900"></div>
						} @else {
							<span class="text-xs font-semibold text-emerald-700">{{ currentState() }}</span>
							<div
								class="size-4 animate-pulse rounded-full border-4 border-emerald-200 bg-emerald-700 dark:border-emerald-900"></div>
						}
					</div>
				</div>
				<hlm-progress class="h-1 w-full" [value]="progress()">
					<hlm-progress-indicator class="rounded-full transition-all duration-500" />
				</hlm-progress>
			</div>
			<section class="ring-background! w-full rounded-3xl py-4" hlmCard>
				<div hlmCardContent class="flex flex-col items-center gap-1 px-4">
					@for (task of taskItems(); track task.id) {
						<div
							class="flex w-full items-center justify-between rounded-lg p-2 transition-colors duration-300"
							[ngClass]="{
								'bg-muted/80': task.status === 'running',
							}">
							<div class="flex w-full items-center gap-2">
								<div class="flex w-8 items-center justify-center">
									@switch (task.status) {
										@case ('running') {
											<hlm-spinner class="animate-in zoom-in-50 fade-in duration-300" />
										}
										@case ('idle') {
											<ng-icon
												hlm
												name="lucideSquircle"
												size="sm"
												class="animate-in zoom-in-50 fade-in text-muted-foreground/40 duration-300" />
										}
										@case ('completed') {
											<div
												class="animate-in zoom-in-50 fade-in bg-primary flex size-5 items-center justify-center rounded-full duration-300">
												<ng-icon hlm name="lucideCheck" size="xs" class="text-primary-foreground" />
											</div>
										}
									}
								</div>
								<span
									class="text-sm font-medium transition-colors duration-300"
									[ngClass]="{
										'text-muted-foreground/50': task.status === 'idle',
										'text-accent-foreground': task.status !== 'idle',
									}">
									{{ task.name }}
								</span>
							</div>
							<span class="text-muted-foreground/80 flex items-center justify-end text-sm">
								@if (task.time) {
									<span class="animate-in fade-in slide-in-from-right-2 duration-300">{{ task.time }}ms</span>
								} @else if (task.status === 'idle') {
									<ng-icon
										hlm
										name="lucideDot"
										class="animate-in fade-in zoom-in-50 text-muted-foreground/40 duration-300" />
								} @else {
									<ng-icon
										hlm
										name="lucideEllipsis"
										class="animate-in fade-in zoom-in-50 text-muted-foreground/40 duration-300" />
								}
							</span>
						</div>
					}
				</div>
			</section>
			<div hlmCardFooter class="bg-muted flex-col px-6 pb-4">
				<div class="flex w-full items-center justify-between">
					<span
						class="font-mono text-sm transition-colors duration-500"
						[ngClass]="pipelineCompleted() ? 'text-primary font-medium' : 'text-muted-foreground'">
						{{ elapsedDisplay() }}
					</span>
					<div class="flex items-center gap-2">
						<span class="text-muted-foreground text-sm">{{ footerLabel() }}</span>
						@if (pipelineCompleted()) {
							<button hlmBtn variant="default" size="sm" class="rounded-full" (click)="startPipeline()">
								<ng-icon hlm name="lucideRefreshCw" size="xs" />
								Re-run
							</button>
						}
					</div>
				</div>
			</div>
		</section>
	`,
})
export class Card14Component implements OnDestroy {
	protected readonly taskItems = signal<Task[]>(INITIAL_TASKS.map((t) => ({ ...t })));
	protected readonly elapsedMs = signal(0);
	protected readonly pipelineCompleted = signal(false);

	protected readonly currentRunningTask = computed(() => this.taskItems().find((t) => t.status === 'running'));
	protected readonly currentState = computed(() => this.currentRunningTask()?.state ?? 'Booting');
	protected readonly progress = computed(() => {
		const items = this.taskItems();
		const completed = items.filter((t) => t.status === 'completed').length;
		const hasRunning = items.some((t) => t.status === 'running');
		return Math.round(((completed + (hasRunning ? 0.5 : 0)) / items.length) * 100);
	});
	protected readonly elapsedDisplay = computed(() => {
		const ms = this.elapsedMs();
		return (ms / 1000).toFixed(2) + 's';
	});
	protected readonly footerLabel = computed(() => {
		if (this.pipelineCompleted()) return 'Completed';
		const state = this.currentState();
		return state === 'Running' ? 'Executing...' : 'Provisioning...';
	});

	private timerInterval?: ReturnType<typeof setInterval>;
	private startTime = 0;

	constructor() {
		afterNextRender(() => this.startPipeline());
	}

	ngOnDestroy(): void {
		this.clearTimer();
	}

	protected async startPipeline(): Promise<void> {
		this.clearTimer();
		this.taskItems.set(INITIAL_TASKS.map((t) => ({ ...t })));
		this.elapsedMs.set(0);
		this.pipelineCompleted.set(false);

		this.startTime = Date.now();
		this.timerInterval = setInterval(() => this.elapsedMs.set(Date.now() - this.startTime), 100);

		const items = this.taskItems();
		for (let i = 0; i < items.length; i++) {
			this.taskItems.update((list) => list.map((t, idx) => (idx === i ? { ...t, status: 'running' } : t)));

			const duration = 400 + Math.random() * 2000;
			await this.sleep(duration);

			this.taskItems.update((list) =>
				list.map((t, idx) => (idx === i ? { ...t, status: 'completed', time: Math.round(duration) } : t)),
			);
		}

		this.clearTimer();
		this.pipelineCompleted.set(true);
	}

	private clearTimer(): void {
		if (this.timerInterval) {
			clearInterval(this.timerInterval);
			this.timerInterval = undefined;
		}
	}

	private sleep(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
