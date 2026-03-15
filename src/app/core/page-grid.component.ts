import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, input, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentCardComponent } from './component-card.component';
import { CodeLoaderService } from './services/code-loader.service';
import { SuggestionComponent } from './suggestion.component';
import { ComponentCardItem } from './types';

@Component({
	selector: 'page-grid',
	template: `
		<div class="flex grow flex-col">
			<div class="mb-20 flex-1 overflow-hidden">
				<div class="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px xl:*:px-12">
					@for (component of components(); track component.id) {
						<component-card
							[componentName]="component.id"
							[colNumber]="component.colNumber"
							[itemStyle]="component.itemStyle"
							[component]="component.component"
							[highlighted]="highlightedId() === component.id" />
					}
				</div>
			</div>
			<app-suggestion />
		</div>
	`,
	imports: [ComponentCardComponent, SuggestionComponent],
})
export class PageGridComponent {
	public components = input<ComponentCardItem[]>([]);
	private readonly codeLoaderService = inject(CodeLoaderService);
	private readonly route = inject(ActivatedRoute);
	private readonly document = inject(DOCUMENT);
	private readonly platformId = inject(PLATFORM_ID);
	protected readonly highlightedId = signal<string | null>(null);

	constructor() {
		effect(() => {
			const ids = this.components().map((c) => c.id);
			if (ids.length) {
				this.codeLoaderService.preloadComponents(ids);
			}
		});

		if (isPlatformBrowser(this.platformId)) {
			this.route.fragment.subscribe((fragment) => {
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
}
