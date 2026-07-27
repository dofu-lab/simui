import { Clipboard } from '@angular/cdk/clipboard';
import { DOCUMENT, isPlatformBrowser, NgComponentOutlet } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	computed,
	DestroyRef,
	effect,
	ElementRef,
	inject,
	input,
	isDevMode,
	OnDestroy,
	output,
	PLATFORM_ID,
	signal,
	Type,
	viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import type { ComponentInteractionType } from '@core/services/analytics.service';
import { AnalyticsService } from '@core/services/analytics.service';
import { CodeLoaderService } from '@core/services/code-loader.service';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCode, lucideFullscreen, lucideLink } from '@ng-icons/lucide';
import { ResizableSheetHandle } from '@shared/components/resizable-sheet-handle';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSheet, HlmSheetImports } from '@spartan-ng/helm/sheet';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';
import { CodePreviewComponent } from './code-preview.component';
import type { ComponentCardAlignment, ComponentCardLayout } from './types';

const CARD_ALIGNMENT_CLASSES: Record<ComponentCardAlignment, string> = {
	center: 'flex justify-center items-center',
	'text-center': 'text-center',
	'column-center': 'flex flex-col items-center',
	start: 'flex justify-start items-center',
};

const CARD_LAYOUT_CLASSES: Record<ComponentCardLayout, string> = {
	third: 'col-span-12 sm:col-span-6 lg:col-span-4',
	half: 'col-span-12 sm:col-span-6 lg:col-span-6',
	full: 'col-span-12 sm:col-span-12 lg:col-span-12',
};

@Component({
	selector: 'sim-component-card',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [provideIcons({ lucideCode, lucideLink, lucideCheck, lucideFullscreen })],
	imports: [
		NgIcon,
		NgComponentOutlet,
		CodePreviewComponent,
		ResizableSheetHandle,
		HlmButtonImports,
		HlmIconImports,
		HlmSheetImports,
		HlmTooltipImports,
	],
	template: `
		<div
			class="contents"
			(click)="trackDemoInteraction('click')"
			(input)="trackDemoInteraction('input')"
			(change)="trackDemoInteraction('change')"
			(keydown)="trackDemoInteraction('keyboard')">
			<ng-container *ngComponentOutlet="component()"></ng-container>
		</div>
		<hlm-sheet #sheet side="right">
			<div class="absolute -top-2 right-0 flex w-full items-center justify-between px-2 pt-2">
				<span class="text-muted-foreground/80 me-1 text-xs">
					@if (showComponentName) {
						{{ componentName() }}
					}
				</span>
				<div
					class="flex items-center lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
					<button
						hlmBtn
						size="icon"
						variant="link"
						class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
						[hlmTooltip]="shareTooltip"
						(click)="shareComponent()">
						<ng-icon hlm [name]="linkCopied() ? 'lucideCheck' : 'lucideLink'" size="sm" />
					</button>
					<ng-template #shareTooltip><span class="flex items-center">Copy link</span></ng-template>
					<button
						hlmBtn
						size="icon"
						variant="link"
						aria-label="Open full view"
						class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
						[hlmTooltip]="fullViewTooltip"
						(click)="requestFullView()">
						<ng-icon hlm name="lucideFullscreen" size="sm" />
					</button>
					<ng-template #fullViewTooltip><span class="flex items-center">Full view</span></ng-template>
					<button
						hlmBtn
						size="icon"
						variant="link"
						aria-label="View code"
						class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100"
						[hlmTooltip]="viewCodeTooltip"
						(click)="trackCodeClick()">
						<ng-icon hlm name="lucideCode" size="sm" />
					</button>
					<ng-template #viewCodeTooltip><span class="flex items-center">View code</span></ng-template>
				</div>
			</div>
			<hlm-sheet-content
				*hlmSheetPortal="let ctx"
				class="flex max-h-dvh min-h-0 flex-col overflow-visible data-[side=right]:w-[calc(100%-(--spacing(12)))] data-[side=right]:max-w-sm data-[side=right]:sm:max-w-3xl">
				<sim-resizable-sheet-handle />
				<div class="spartan-scroll flex min-h-0 flex-1 flex-col overflow-y-auto p-4">
					<!-- Installation -->
					<div class="mb-4">
						<h4 class="mb-2 text-lg font-semibold">
							Installation
							@if (registryVersions.selectedVersion(); as version) {
								<span class="text-muted-foreground text-sm font-normal">for SpartanUI {{ version }}</span>
							}
						</h4>
						<div class="mt-3">
							@if (registryVersions.isLoading()) {
								<p class="text-muted-foreground text-sm">Loading published registry versions…</p>
							} @else if (registryVersions.hasError()) {
								<p class="text-muted-foreground text-sm">
									Installation is unavailable because the registry manifest could not be loaded.
								</p>
							} @else if (!componentAvailable()) {
								<p class="text-muted-foreground text-sm">
									{{ componentName() }} is not available for SpartanUI {{ registryVersions.selectedVersion() }}.
								</p>
							} @else {
								<sim-code-preview
									language="sh"
									analyticsCopyKind="install_cli"
									[analyticsComponentId]="componentName()"
									[analyticsSpartanVersion]="registryVersions.selectedVersion() ?? undefined"
									[code]="installCommand()"
									[fileName]="'Install ' + componentName()" />
							}
						</div>
						<ng-template #installTooltip><span class="flex items-center">Copy install command</span></ng-template>
					</div>

					<!-- Code -->
					<div class="flex min-h-0 flex-1 flex-col">
						<h4 class="mb-2 text-lg font-semibold">
							Code
							@if (registryVersions.selectedVersion(); as version) {
								<span class="text-muted-foreground text-sm font-normal">for SpartanUI {{ version }}</span>
							}
						</h4>
						@if (sourceStatus() === 'loading' || sourceStatus() === 'manifest-loading') {
							<div class="text-muted-foreground flex h-full items-center justify-center text-sm">
								Loading registry source…
							</div>
						} @else if (sourceStatus() === 'unavailable') {
							<div class="text-muted-foreground flex h-full items-center justify-center text-sm">
								This component is unavailable for the selected SpartanUI version.
							</div>
						} @else if (sourceStatus() === 'manifest-error') {
							<div class="text-muted-foreground flex h-full items-center justify-center text-sm">
								Registry source is unavailable because the manifest could not be loaded.
							</div>
						} @else if (sourceStatus() === 'error') {
							<div class="text-muted-foreground flex h-full items-center justify-center text-sm">
								Source could not be loaded. Close and reopen the code panel to retry.
							</div>
						} @else if (sourceStatus() === 'ready') {
							<sim-code-preview
								analyticsCopyKind="component_code"
								[analyticsComponentId]="componentName()"
								[analyticsSpartanVersion]="registryVersions.selectedVersion() ?? undefined"
								[code]="displayCode()"
								[fileName]="componentName()" />
						}
					</div>
					<ng-template #codeTooltip><span class="flex items-center">Copy code to clipboard</span></ng-template>
				</div>
			</hlm-sheet-content>
		</hlm-sheet>
	`,
	host: {
		'[class]': '_computedClass()',
		'[id]': 'componentName()',
	},
})
export class ComponentCardComponent implements AfterViewInit, OnDestroy {
	protected readonly showComponentName = isDevMode();

	private readonly codeLoaderService = inject(CodeLoaderService);
	protected readonly registryVersions = inject(RegistryVersionService);
	private readonly analyticsService = inject(AnalyticsService);
	private readonly clipboard = inject(Clipboard);
	private readonly document = inject(DOCUMENT);
	private readonly destroyRef = inject(DestroyRef);
	private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly router = inject(Router);
	private readonly sheetRef = viewChild<HlmSheet>('sheet');
	private intersectionObserver?: IntersectionObserver;
	private demoInteractionTracked = false;

	public readonly component = input.required<Type<unknown> | null>();
	public readonly componentName = input.required<string>();
	public readonly highlighted = input<boolean>(false);
	public readonly code = input<string | undefined>('');
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly layout = input<ComponentCardLayout>('third');
	public readonly alignment = input<ComponentCardAlignment>('center');
	public readonly fullViewRequested = output<string>();
	// CLI scope/package to display for copying. Configurable via input binding.
	public readonly cliScope = input<string>('@dofu-lab/simui-cli');

	protected readonly displayCode = signal<string>('');
	protected readonly sourceStatus = signal<
		'idle' | 'manifest-loading' | 'manifest-error' | 'loading' | 'ready' | 'error' | 'unavailable'
	>('idle');
	private readonly codeRequested = signal(false);
	private readonly codeByRegistryKey = signal<Record<string, string>>({});
	private activeRequestKey: string | null = null;
	protected readonly linkCopied = signal<boolean>(false);
	protected readonly componentAvailable = computed(
		() => this.registryVersions.isReady() && this.registryVersions.isComponentAvailable(this.componentName()),
	);
	protected readonly installCommand = computed(() => {
		const version = this.registryVersions.selectedVersion();
		return version ? `npx ${this.cliScope()} add ${this.componentName()} --spartan-version ${version}` : '';
	});

	constructor() {
		effect(() => {
			if (!this.codeRequested()) return;

			const status = this.registryVersions.status();
			const version = this.registryVersions.selectedVersion();
			const componentId = this.componentName();
			this.activeRequestKey = null;
			this.displayCode.set('');

			if (status === 'loading') {
				this.sourceStatus.set('manifest-loading');
				return;
			}
			if (status === 'error' || !version) {
				this.sourceStatus.set('manifest-error');
				return;
			}
			if (!this.registryVersions.isComponentAvailable(componentId)) {
				this.sourceStatus.set('unavailable');
				return;
			}

			const key = `${version}:${componentId}`;
			const cachedCode = this.codeByRegistryKey()[key];
			if (cachedCode !== undefined) {
				this.displayCode.set(cachedCode);
				this.sourceStatus.set('ready');
				return;
			}

			this.activeRequestKey = key;
			this.sourceStatus.set('loading');
			this.codeLoaderService
				.loadComponentCode(version, componentId)
				.pipe(takeUntilDestroyed(this.destroyRef))
				.subscribe({
					next: (code) => {
						this.codeByRegistryKey.update((value) => ({ ...value, [key]: code }));
						if (this.activeRequestKey === key) {
							this.displayCode.set(code);
							this.sourceStatus.set('ready');
						}
					},
					error: () => {
						if (this.activeRequestKey === key) {
							this.sourceStatus.set('error');
						}
					},
				});
		});
	}

	ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') return;

		this.intersectionObserver = new IntersectionObserver(
			(entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;

				this.analyticsService.trackComponentViewed(this.componentName());
				this.intersectionObserver?.disconnect();
				this.intersectionObserver = undefined;
			},
			{ threshold: 0.5 },
		);
		this.intersectionObserver.observe(this.elementRef.nativeElement);
	}

	ngOnDestroy(): void {
		this.intersectionObserver?.disconnect();
	}

	protected readonly styleClasses = computed(() => CARD_ALIGNMENT_CLASSES[this.alignment()]);

	protected readonly colSpanClasses = computed(() => CARD_LAYOUT_CLASSES[this.layout()]);

	protected readonly _computedClass = computed(() =>
		hlm(
			'group/item flex border has-[[data-comp-loading=true]]:border-none relative group transition-[box-shadow] duration-500',
			this.highlighted() ? 'ring-2 ring-inset ring-primary/50' : '',
			this.colSpanClasses(),
			this.styleClasses(),
			this.userClass(),
		),
	);

	protected shareComponent(): void {
		const loc = this.document.location;
		const tree = this.router.parseUrl(this.router.url);
		const version = this.registryVersions.selectedVersion();
		if (version) {
			tree.queryParams = { ...tree.queryParams, spartan: version };
		}
		tree.fragment = this.componentName();
		const url = `${loc.origin}${this.router.serializeUrl(tree)}`;
		this.clipboard.copy(url);
		this.linkCopied.set(true);
		setTimeout(() => this.linkCopied.set(false), 3000);
		this.analyticsService.trackComponentShared(this.componentName());
	}

	protected trackCodeClick(): void {
		this.sheetRef()?.open();
		this.analyticsService.trackComponentCodeSheetOpened(this.componentName());
		this.codeRequested.set(true);
	}

	protected requestFullView(): void {
		this.analyticsService.trackComponentFullViewRequested(this.componentName());
		this.fullViewRequested.emit(this.componentName());
	}

	protected trackDemoInteraction(interactionType: ComponentInteractionType): void {
		if (this.demoInteractionTracked) return;

		this.demoInteractionTracked = true;
		this.analyticsService.trackComponentDemoInteracted(this.componentName(), interactionType);
	}
}
