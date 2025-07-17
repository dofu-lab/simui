import { Component, input } from '@angular/core';
import { ComponentCardComponent } from './component-card.component';
import { SuggestionComponent } from './suggestion.component';
import { ComponentCardItem } from './types';

@Component({
	selector: 'page-grid',
	standalone: true,
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
							[code]="component.code" />
					}
				</div>
			</div>
			<app-suggestion />
		</div>
	`,
	imports: [ComponentCardComponent, SuggestionComponent],
})
export class PageGridComponent {
	components = input<ComponentCardItem[]>([]);
}
