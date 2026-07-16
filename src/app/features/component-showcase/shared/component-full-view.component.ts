import { BreakpointObserver } from '@angular/cdk/layout';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	computed,
	effect,
	inject,
	input,
	output,
	signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import type { ComponentNavigationDirection, ComponentNavigationPosition } from '@core/services/analytics.service';
import { CodeLoaderService } from '@core/services/code-loader.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight, lucideX } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmResizableImports } from '@spartan-ng/helm/resizable';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { map } from 'rxjs';
import { CodePreviewComponent } from './code-preview.component';
import type { ComponentCardItem } from './types';

export type ComponentNavigationRequest = {
	direction: ComponentNavigationDirection;
	position: ComponentNavigationPosition;
};

@Component({
	selector: 'sim-component-full-view',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		NgComponentOutlet,
		NgTemplateOutlet,
		NgIcon,
		CodePreviewComponent,
		HlmButtonImports,
		HlmIconImports,
		HlmResizableImports,
		HlmSheetImports,
		HlmTabsImports,
	],
	providers: [provideIcons({ lucideChevronLeft, lucideChevronRight, lucideX })],
	styles: [
		`
			@keyframes previewNextEnter {
				from {
					transform: translate3d(100%, 0, 0);
				}
				to {
					transform: translate3d(0, 0, 0);
				}
			}
			@keyframes previewNextLeave {
				from {
					transform: translate3d(0, 0, 0);
				}
				to {
					transform: translate3d(-100%, 0, 0);
				}
			}
			@keyframes previewPreviousEnter {
				from {
					transform: translate3d(-100%, 0, 0);
				}
				to {
					transform: translate3d(0, 0, 0);
				}
			}
			@keyframes previewPreviousLeave {
				from {
					transform: translate3d(0, 0, 0);
				}
				to {
					transform: translate3d(100%, 0, 0);
				}
			}
			.preview-swipe-next-enter {
				animation: previewNextEnter 220ms cubic-bezier(0.645, 0.045, 0.355, 1) both;
				will-change: transform, opacity;
			}
			.preview-swipe-next-leave {
				animation: previewNextLeave 220ms cubic-bezier(0.645, 0.045, 0.355, 1) both;
				will-change: transform, opacity;
			}
			.preview-swipe-previous-enter {
				animation: previewPreviousEnter 220ms cubic-bezier(0.645, 0.045, 0.355, 1) both;
				will-change: transform, opacity;
			}
			.preview-swipe-previous-leave {
				animation: previewPreviousLeave 220ms cubic-bezier(0.645, 0.045, 0.355, 1) both;
				will-change: transform, opacity;
			}
			@media (prefers-reduced-motion: reduce) {
				.preview-swipe-next-enter,
				.preview-swipe-next-leave,
				.preview-swipe-previous-enter,
				.preview-swipe-previous-leave {
					animation: none;
					will-change: auto;
				}
			}
		`,
	],
	template: `
		<hlm-sheet
			side="bottom"
			[state]="open() ? 'open' : 'closed'"
			(stateChanged)="handleSheetStateChange($event)"
			aria-label="Component full view">
			<hlm-sheet-content
				*hlmSheetPortal="let ctx"
				showCloseButton="false"
				class="bg-background text-foreground flex min-h-0 flex-col gap-0 overflow-hidden p-2 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-dvh data-[side=bottom]:max-h-dvh data-[side=bottom]:w-dvw">
				<hlm-sheet-header
					class="border-border bg-background sticky top-0 z-20 flex-row items-center justify-between gap-3 p-0 pb-2">
					<div class="min-w-0">
						<p hlmSheetDescription class="sr-only">
							Preview the selected component and inspect installation and source code.
						</p>
					</div>
					<div class="flex shrink-0 items-center gap-1">
						@if (isDesktop()) {
							<button
								hlmBtn
								size="sm"
								variant="outline"
								aria-label="Previous component"
								class="focus-visible:ring-ring focus-visible:ring-2"
								[disabled]="!canGoPrevious()"
								(click)="requestNavigation('previous', 'header')">
								<ng-icon hlm name="lucideChevronLeft" size="sm" />
								Previous
							</button>
							<button
								hlmBtn
								size="sm"
								variant="outline"
								aria-label="Next component"
								class="focus-visible:ring-ring focus-visible:ring-2"
								[disabled]="!canGoNext()"
								(click)="requestNavigation('next', 'header')">
								Next
								<ng-icon hlm name="lucideChevronRight" size="sm" />
							</button>
						}
						<button
							hlmBtn
							size="icon-sm"
							variant="ghost"
							aria-label="Close full view"
							class="focus-visible:ring-ring size-9 focus-visible:ring-2"
							(click)="closeRequested.emit()">
							<ng-icon hlm name="lucideX" size="sm" />
						</button>
					</div>
				</hlm-sheet-header>

				@if (selectedItem(); as item) {
					@if (isDesktop()) {
						<div class="min-h-0 flex-1 overflow-hidden rounded-lg border">
							<hlm-resizable-group>
								<hlm-resizable-panel defaultSize="42" minSize="30">
									<ng-container [ngTemplateOutlet]="previewPanel" [ngTemplateOutletContext]="{ $implicit: item }" />
								</hlm-resizable-panel>
								<hlm-resizable-handle withHandle="true" />
								<hlm-resizable-panel defaultSize="58" minSize="28">
									<ng-container [ngTemplateOutlet]="codePanel" [ngTemplateOutletContext]="{ $implicit: item }" />
								</hlm-resizable-panel>
							</hlm-resizable-group>
						</div>
					} @else {
						<hlm-tabs tab="preview" class="flex min-h-0 flex-1 flex-col overflow-hidden">
							<div class="border-border bg-background border-b p-2">
								<hlm-tabs-list class="grid w-full grid-cols-2" aria-label="Full view sections">
									<button hlmTabsTrigger="preview">Preview</button>
									<button hlmTabsTrigger="code">Code</button>
								</hlm-tabs-list>
							</div>
							<div hlmTabsContent="preview" class="mt-0 min-h-0 overflow-hidden">
								<ng-container [ngTemplateOutlet]="previewPanel" [ngTemplateOutletContext]="{ $implicit: item }" />
							</div>
							<div hlmTabsContent="code" class="mt-0 min-h-0 overflow-hidden">
								<ng-container [ngTemplateOutlet]="codePanel" [ngTemplateOutletContext]="{ $implicit: item }" />
							</div>
						</hlm-tabs>
					}
				}
			</hlm-sheet-content>
		</hlm-sheet>

		<ng-template #previewPanel let-item>
			<div class="bg-background relative flex size-full min-h-0 overflow-auto p-4">
				<div class="m-auto grid min-h-40 w-full min-w-0 overflow-hidden py-2">
					@for (previewItem of [item]; track previewItem.id) {
						<div
							data-testid="component-preview-animation-host"
							[animate.enter]="previewEnterAnimationClass()"
							[animate.leave]="previewLeaveAnimationClass()"
							class="col-start-1 row-start-1 flex min-h-40 w-full min-w-0 items-center justify-center">
							<ng-container *ngComponentOutlet="previewItem.component"></ng-container>
						</div>
					}
				</div>
				<div class="absolute bottom-0 left-1/2 flex shrink-0 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
					<button
						hlmBtn
						size="icon-sm"
						variant="outline"
						aria-label="Previous component"
						class="focus-visible:ring-ring focus-visible:ring-2"
						[disabled]="!canGoPrevious()"
						(click)="requestNavigation('previous', 'left_panel')">
						<ng-icon hlm name="lucideChevronLeft" size="sm" />
					</button>
					<button
						hlmBtn
						size="icon-sm"
						variant="outline"
						aria-label="Next component"
						class="focus-visible:ring-ring focus-visible:ring-2"
						[disabled]="!canGoNext()"
						(click)="requestNavigation('next', 'left_panel')">
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</div>
			</div>
		</ng-template>

		<ng-template #codePanel let-item>
			<div class="bg-card border-border flex size-full min-h-0 flex-col overflow-hidden">
				<div class="spartan-scroll flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4">
					<section class="flex shrink-0 flex-col gap-2">
						<h3 class="text-sm font-semibold">Installation</h3>
						<sim-code-preview
							language="sh"
							analyticsCopyKind="install_cli"
							[analyticsComponentId]="item.id"
							[code]="installCommand()"
							[fileName]="'Install ' + item.id"
							[showLineNumbers]="false" />
					</section>

					<section class="flex min-h-0 flex-1 flex-col gap-2">
						<h3 class="text-sm font-semibold">Code</h3>
						@if (codeLoading()) {
							<div class="text-muted-foreground flex min-h-72 flex-1 items-center justify-center text-sm">
								Loading...
							</div>
						} @else {
							<sim-code-preview
								class="min-h-72 flex-1"
								analyticsCopyKind="component_code"
								[analyticsComponentId]="item.id"
								[code]="displayCode()"
								[fileName]="item.id" />
						}
					</section>
				</div>
			</div>
		</ng-template>
	`,
})
export class ComponentFullViewComponent {
	private readonly destroyRef = inject(DestroyRef);
	private readonly breakpointObserver = inject(BreakpointObserver);
	private readonly codeLoaderService = inject(CodeLoaderService);

	public readonly components = input.required<ComponentCardItem[]>();
	public readonly selectedIndex = input.required<number>();
	public readonly open = input(false);
	public readonly cliScope = input('@dofu-lab/simui-cli');
	public readonly previousRequested = output<ComponentNavigationRequest>();
	public readonly nextRequested = output<ComponentNavigationRequest>();
	public readonly closeRequested = output<void>();

	private readonly codeByComponentId = signal<Record<string, string>>({});
	private readonly loadingComponentId = signal<string | null>(null);
	protected readonly previewNavigationDirection = signal<ComponentNavigationDirection | null>(null);

	protected readonly isDesktop = toSignal(
		this.breakpointObserver.observe('(min-width: 768px)').pipe(map((state) => state.matches)),
		{ initialValue: true },
	);
	protected readonly selectedItem = computed(() => this.components()[this.selectedIndex()] ?? null);
	protected readonly canGoPrevious = computed(() => this.selectedIndex() > 0);
	protected readonly canGoNext = computed(() => this.selectedIndex() < this.components().length - 1);
	protected readonly installCommand = computed(() =>
		`npx ${this.cliScope()} add ${this.selectedItem()?.id ?? ''}`.trim(),
	);
	protected readonly displayCode = computed(() => {
		const id = this.selectedItem()?.id;
		return id ? (this.codeByComponentId()[id] ?? '') : '';
	});
	protected readonly codeLoading = computed(() => this.loadingComponentId() === this.selectedItem()?.id);
	protected readonly previewEnterAnimationClass = computed(() => {
		const direction = this.previewNavigationDirection();
		if (!direction) {
			return '';
		}

		return direction === 'next' ? 'preview-swipe-next-enter' : 'preview-swipe-previous-enter';
	});
	protected readonly previewLeaveAnimationClass = computed(() => {
		const direction = this.previewNavigationDirection();
		if (!direction) {
			return '';
		}

		return direction === 'next' ? 'preview-swipe-next-leave' : 'preview-swipe-previous-leave';
	});

	constructor() {
		effect(() => {
			const item = this.selectedItem();
			if (!item || this.codeByComponentId()[item.id] !== undefined || this.loadingComponentId() === item.id) {
				return;
			}

			this.loadingComponentId.set(item.id);
			this.codeLoaderService
				.loadComponentCode(item.id)
				.pipe(takeUntilDestroyed(this.destroyRef))
				.subscribe({
					next: (code) => {
						this.codeByComponentId.update((value) => ({ ...value, [item.id]: code }));
						if (this.loadingComponentId() === item.id) {
							this.loadingComponentId.set(null);
						}
					},
					error: () => {
						if (this.loadingComponentId() === item.id) {
							this.loadingComponentId.set(null);
						}
					},
				});
		});
	}

	protected handleSheetStateChange(state: 'open' | 'closed'): void {
		if (state === 'closed' && this.open()) {
			this.closeRequested.emit();
		}
	}

	protected requestNavigation(direction: ComponentNavigationDirection, position: ComponentNavigationPosition): void {
		if ((direction === 'previous' && !this.canGoPrevious()) || (direction === 'next' && !this.canGoNext())) {
			return;
		}

		this.previewNavigationDirection.set(direction);

		const request: ComponentNavigationRequest = { direction, position };
		if (direction === 'previous') {
			this.previousRequested.emit(request);
		} else {
			this.nextRequested.emit(request);
		}
	}
}
