import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePause, lucidePlay, lucideRotateCcw, lucideX } from '@ng-icons/lucide';
import { type AttachmentState, HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmIconImports } from '@spartan-ng/helm/icon';

const FILE_SIZE_MB = 2.3;
const INITIAL_PROGRESS = 39;
const PROGRESS_INTERVAL_MS = 80;
const COMPLETION_HOLD_MS = 250;

@Component({
	selector: 'sim-attachment-13',
	imports: [NgIcon, HlmAttachmentImports, HlmIconImports],
	providers: [provideIcons({ lucidePause, lucidePlay, lucideRotateCcw, lucideX })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full max-w-sm' },
	template: `
		<hlm-attachment
			class="bg-background w-full items-start overflow-hidden data-[state=idle]:border-solid"
			[state]="attachmentState()">
			<div class="pointer-events-none absolute inset-0" aria-hidden="true">
				<div
					class="from-muted/25 to-muted size-full origin-left bg-linear-to-r transition-transform duration-150 ease-linear motion-reduce:transition-none"
					[style.transform]="progressTransform()"></div>
				<div
					class="bg-background absolute inset-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] motion-reduce:transition-none"
					[style.transform]="backgroundWipeTransform()"></div>
			</div>

			<div class="relative z-10 flex size-8 shrink-0 items-center self-stretch">
				<svg viewBox="0 0 48 48" class="inline-block size-full" aria-hidden="true">
					<g transform="translate(3)">
						<path
							class="fill-slate-500 stroke-slate-500"
							d="M8 1h21.586L41 12.414V40a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z"
							stroke-width="2" />
						<path class="fill-slate-400" d="M33 13h9v-1L30 0h-1v9a4 4 0 0 0 4 4Z" />
						<path
							class="fill-white"
							transform="translate(5 5) scale(.5833)"
							d="M22 13v7a1 1 0 0 1-1 1h-8v-8h9Zm-11 0v8H3a1 1 0 0 1-1-1v-7h9Zm0-10v8H2V4a1 1 0 0 1 1-1h8Zm10 0a1 1 0 0 1 1 1v7h-9V3h8Z" />
						<text x="21" y="40" text-anchor="middle" class="text-ui-control-xs fill-white font-bold">XLSX</text>
					</g>
				</svg>
			</div>
			<hlm-attachment-content class="relative z-10">
				<span hlmAttachmentTitle>create-ui.xlsx</span>
				<span hlmAttachmentDescription>{{ statusText() }}</span>
				<span
					class="sr-only"
					role="progressbar"
					aria-label="Upload progress for create-ui.xlsx"
					aria-valuemin="0"
					aria-valuemax="100"
					[attr.aria-valuenow]="progressValue()"
					[attr.aria-valuetext]="statusText()"></span>
				<span class="sr-only" aria-live="polite">{{ isComplete() ? 'Upload complete' : '' }}</span>
			</hlm-attachment-content>
			<hlm-attachment-actions class="gap-0.5">
				<button hlmAttachmentAction [attr.aria-label]="uploadControl().label" (click)="toggleUpload()">
					<ng-icon hlm [name]="uploadControl().icon" size="xs" />
				</button>
				<button hlmAttachmentAction aria-label="Reset create-ui.xlsx upload" (click)="resetUpload()">
					<ng-icon hlm name="lucideX" size="xs" />
				</button>
			</hlm-attachment-actions>
		</hlm-attachment>
		<p class="text-muted-foreground mt-2 truncate text-center text-xs">Interactive attachment upload progress</p>
	`,
})
export class Attachment13Component {
	private readonly destroyRef = inject(DestroyRef);
	private intervalId?: ReturnType<typeof setInterval>;
	private completionTimeoutId?: ReturnType<typeof setTimeout>;

	protected readonly progressValue = signal(INITIAL_PROGRESS);
	protected readonly isPaused = signal(true);
	protected readonly isBackgroundWiped = signal(false);
	protected readonly isComplete = computed(() => this.progressValue() === 100);
	protected readonly attachmentState = computed<AttachmentState>(() => {
		if (this.isComplete()) return 'done';
		return this.isPaused() ? 'idle' : 'uploading';
	});
	protected readonly uploadedSize = computed(() => ((this.progressValue() / 100) * FILE_SIZE_MB).toFixed(1));
	protected readonly statusText = computed(() => {
		if (this.isComplete()) return `Upload complete · ${FILE_SIZE_MB} MB`;

		const status = this.isPaused() ? 'Paused' : `Uploading ${this.progressValue()}%`;
		return `${status} · ${this.uploadedSize()} MB of ${FILE_SIZE_MB} MB`;
	});
	protected readonly progressTransform = computed(() => `scaleX(${this.progressValue() / 100})`);
	protected readonly backgroundWipeTransform = computed(() => `scaleX(${this.isBackgroundWiped() ? 1 : 0})`);
	protected readonly uploadControl = computed(() => {
		if (this.isComplete()) {
			return { icon: 'lucideRotateCcw', label: 'Upload create-ui.xlsx again' };
		}

		return this.isPaused()
			? { icon: 'lucidePlay', label: 'Resume uploading create-ui.xlsx' }
			: { icon: 'lucidePause', label: 'Pause uploading create-ui.xlsx' };
	});

	constructor() {
		this.destroyRef.onDestroy(() => this.stopTimers());
	}

	protected toggleUpload(): void {
		if (this.isComplete()) {
			this.restartUpload();
			return;
		}

		if (this.isPaused()) {
			this.isPaused.set(false);
			this.startUpload();
		} else {
			this.isPaused.set(true);
			this.stopInterval();
		}
	}

	private restartUpload(): void {
		this.stopTimers();
		this.progressValue.set(0);
		this.isPaused.set(false);
		this.isBackgroundWiped.set(false);
		this.startUpload();
	}

	protected resetUpload(): void {
		this.stopTimers();
		this.progressValue.set(INITIAL_PROGRESS);
		this.isPaused.set(true);
		this.isBackgroundWiped.set(false);
	}

	private startUpload(): void {
		if (this.intervalId !== undefined || this.isComplete()) return;

		this.intervalId = setInterval(() => {
			const nextProgress = Math.min(100, this.progressValue() + 1);
			this.progressValue.set(nextProgress);

			if (nextProgress === 100) {
				this.stopInterval();
				this.completionTimeoutId = setTimeout(() => {
					this.isBackgroundWiped.set(true);
					this.completionTimeoutId = undefined;
				}, COMPLETION_HOLD_MS);
			}
		}, PROGRESS_INTERVAL_MS);
	}

	private stopInterval(): void {
		if (this.intervalId === undefined) return;
		clearInterval(this.intervalId);
		this.intervalId = undefined;
	}

	private stopTimers(): void {
		this.stopInterval();
		if (this.completionTimeoutId === undefined) return;
		clearTimeout(this.completionTimeoutId);
		this.completionTimeoutId = undefined;
	}
}
