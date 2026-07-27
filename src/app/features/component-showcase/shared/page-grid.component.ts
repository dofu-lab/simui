import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, computed, effect, inject, input, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsService } from '@core/services/analytics.service';
import { CodeLoaderService } from '@core/services/code-loader.service';
import { RegistryVersionService } from '@core/services/registry-version.service';
import { combineLatest } from 'rxjs';
import { ComponentCardComponent } from './component-card.component';
import type { ComponentNavigationRequest } from './component-full-view.component';
import { ComponentFullViewComponent } from './component-full-view.component';
import { SuggestionComponent } from './suggestion.component';
import { ComponentCardItem } from './types';

const FULL_VIEW_QUERY_PARAM = 'full';

@Component({
	selector: 'sim-page-grid',
	template: `
		<div class="flex grow flex-col">
			<div class="mb-20 flex-1 overflow-hidden">
				<div class="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px xl:*:px-12">
					@for (component of components(); track component.id) {
						<sim-component-card
							[componentName]="component.id"
							[layout]="component.layout"
							[alignment]="component.alignment"
							[component]="component.component"
							[highlighted]="highlightedId() === component.id"
							(fullViewRequested)="openFullView($event)" />
					}
				</div>
			</div>
			@if (selectedFullViewIndex() !== null) {
				<sim-component-full-view
					[components]="components()"
					[selectedIndex]="selectedFullViewIndex() ?? 0"
					[open]="fullViewOpen()"
					(previousRequested)="goToPreviousFullView($event)"
					(nextRequested)="goToNextFullView($event)"
					(closeRequested)="closeFullView()" />
			}
			<app-suggestion />
		</div>
	`,
	imports: [ComponentCardComponent, ComponentFullViewComponent, SuggestionComponent],
})
export class PageGridComponent {
	public readonly components = input<ComponentCardItem[]>([]);
	private readonly codeLoaderService = inject(CodeLoaderService);
	private readonly registryVersions = inject(RegistryVersionService);
	private readonly analyticsService = inject(AnalyticsService);
	private readonly route = inject(ActivatedRoute);
	private readonly router = inject(Router);
	private readonly document = inject(DOCUMENT);
	private readonly platformId = inject(PLATFORM_ID);
	protected readonly highlightedId = signal<string | null>(null);
	protected readonly selectedFullViewIndex = signal<number | null>(null);
	private readonly routeFullViewComponentId = signal<string | null>(null);
	protected readonly fullViewOpen = computed(() => this.selectedFullViewIndex() !== null);

	constructor() {
		effect(() => {
			const ids = this.components().map((c) => c.id);
			const version = this.registryVersions.selectedVersion();
			if (ids.length && version && this.registryVersions.isReady()) {
				this.codeLoaderService.preloadComponents(version, ids, (id) => this.registryVersions.isComponentAvailable(id));
			}
		});

		effect(() => {
			const selectedIndex = this.selectedFullViewIndex();
			if (selectedIndex === null) return;

			if (!this.components()[selectedIndex]) {
				this.selectedFullViewIndex.set(null);
			}
		});

		effect(() => {
			const componentId = this.routeFullViewComponentId();
			if (!componentId) return;

			const index = this.components().findIndex((component) => component.id === componentId);
			if (index === -1) return;

			this.selectedFullViewIndex.set(index);
		});

		if (isPlatformBrowser(this.platformId)) {
			combineLatest([this.route.fragment, this.route.queryParamMap])
				.pipe(takeUntilDestroyed())
				.subscribe(([fragment, queryParamMap]) => {
					if (queryParamMap.has(FULL_VIEW_QUERY_PARAM)) {
						this.routeFullViewComponentId.set(fragment);
						return;
					}

					this.routeFullViewComponentId.set(null);
					if (this.fullViewOpen()) {
						this.selectedFullViewIndex.set(null);
					}
					if (fragment) {
						setTimeout(() => this.scrollToAndHighlight(fragment), 150);
					}
				});
		}
	}

	private scrollToAndHighlight(id: string): void {
		const element = this.document.getElementById(id);
		if (!element) {
			return;
		}

		element.scrollIntoView({ behavior: 'smooth', block: 'center' });
		this.highlightedId.set(id);
		setTimeout(() => this.highlightedId.set(null), 2000);
	}

	protected openFullView(componentId: string): void {
		const index = this.components().findIndex((component) => component.id === componentId);
		if (index === -1) return;

		this.selectedFullViewIndex.set(index);
		this.updateComponentFragment(componentId);
	}

	protected closeFullView(): void {
		this.selectedFullViewIndex.set(null);
		this.clearFullViewUrl();
	}

	protected goToPreviousFullView(request?: ComponentNavigationRequest): void {
		const selectedIndex = this.selectedFullViewIndex();
		if (selectedIndex === null || selectedIndex <= 0) return;

		this.trackNavigationRequest(selectedIndex, selectedIndex - 1, request);
		this.selectedFullViewIndex.set(selectedIndex - 1);
		this.updateComponentFragment(this.components()[selectedIndex - 1].id);
	}

	protected goToNextFullView(request?: ComponentNavigationRequest): void {
		const selectedIndex = this.selectedFullViewIndex();
		if (selectedIndex === null || selectedIndex >= this.components().length - 1) return;

		this.trackNavigationRequest(selectedIndex, selectedIndex + 1, request);
		this.selectedFullViewIndex.set(selectedIndex + 1);
		this.updateComponentFragment(this.components()[selectedIndex + 1].id);
	}

	private updateComponentFragment(componentId: string): void {
		const tree = this.router.parseUrl(this.router.url);
		tree.queryParams = { ...tree.queryParams, [FULL_VIEW_QUERY_PARAM]: '' };
		tree.fragment = componentId;
		void this.router.navigateByUrl(tree);
	}

	private clearFullViewUrl(): void {
		const tree = this.router.parseUrl(this.router.url);
		const queryParams = { ...tree.queryParams };
		delete queryParams[FULL_VIEW_QUERY_PARAM];
		tree.queryParams = queryParams;
		tree.fragment = null;
		void this.router.navigateByUrl(tree);
	}

	private trackNavigationRequest(fromIndex: number, toIndex: number, request?: ComponentNavigationRequest): void {
		if (!request) return;

		const components = this.components();
		const component = components[fromIndex];
		const nextComponent = components[toIndex];
		if (!component) return;

		this.analyticsService.trackComponentNavigationClicked(component.id, {
			direction: request.direction,
			position: request.position,
			toComponentId: nextComponent?.id,
			fromIndex,
			toIndex,
			totalComponents: components.length,
		});
	}
}
