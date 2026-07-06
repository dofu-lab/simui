import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, computed, effect, inject, input, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';
import { ComponentCardComponent } from './component-card.component';
import type { ComponentNavigationRequest } from './component-full-view.component';
import { ComponentFullViewComponent } from './component-full-view.component';
import { CodeLoaderService } from './services/code-loader.service';
import { SuggestionComponent } from './suggestion.component';
import { ComponentCardItem } from './types';

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
	private readonly analyticsService = inject(AnalyticsService);
	private readonly route = inject(ActivatedRoute);
	private readonly document = inject(DOCUMENT);
	private readonly platformId = inject(PLATFORM_ID);
	protected readonly highlightedId = signal<string | null>(null);
	protected readonly selectedFullViewIndex = signal<number | null>(null);
	protected readonly fullViewOpen = computed(() => this.selectedFullViewIndex() !== null);

	constructor() {
		effect(() => {
			const ids = this.components().map((c) => c.id);
			if (ids.length) {
				this.codeLoaderService.preloadComponents(ids);
			}
		});

		effect(() => {
			const selectedIndex = this.selectedFullViewIndex();
			if (selectedIndex === null) return;

			if (!this.components()[selectedIndex]) {
				this.selectedFullViewIndex.set(null);
			}
		});

		if (isPlatformBrowser(this.platformId)) {
			this.route.fragment.pipe(takeUntilDestroyed()).subscribe((fragment) => {
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
	}

	protected closeFullView(): void {
		this.selectedFullViewIndex.set(null);
	}

	protected goToPreviousFullView(request?: ComponentNavigationRequest): void {
		const selectedIndex = this.selectedFullViewIndex();
		if (selectedIndex === null || selectedIndex <= 0) return;

		this.trackNavigationRequest(selectedIndex, selectedIndex - 1, request);
		this.selectedFullViewIndex.set(selectedIndex - 1);
	}

	protected goToNextFullView(request?: ComponentNavigationRequest): void {
		const selectedIndex = this.selectedFullViewIndex();
		if (selectedIndex === null || selectedIndex >= this.components().length - 1) return;

		this.trackNavigationRequest(selectedIndex, selectedIndex + 1, request);
		this.selectedFullViewIndex.set(selectedIndex + 1);
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
