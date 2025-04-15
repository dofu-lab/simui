import { Component, input } from '@angular/core';
import { ComponentCardComponent } from './component-card.component';
import { SuggestionComponent } from './suggestion.component';
import { ComponentCardItem } from './types';

@Component({
	selector: 'page-grid',
	standalone: true,
	template: `
		<div class="mb-20 overflow-hidden">
			<div class="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8 xl:*:px-12">
				@for (component of components(); track component.id) {
					<component-card
						[componentName]="component.id"
						[colNumber]="component.colNumber"
						[itemStyle]="component.itemStyle"
						[component]="component.component"
						[code]="component.code" />
				}
			</div>
		</div>
		<app-suggestion />
	`,
	imports: [ComponentCardComponent, SuggestionComponent],
})
export class PageGridComponent {
	components = input<ComponentCardItem[]>([]);
}
