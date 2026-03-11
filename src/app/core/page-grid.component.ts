import { Component, effect, inject, input } from '@angular/core';
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
							[component]="component.component" />
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

	constructor() {
		effect(() => {
			const ids = this.components().map((c) => c.id);
			if (ids.length) {
				this.codeLoaderService.preloadComponents(ids);
			}
		});
	}
}
