import { Component } from '@angular/core';
import { checkBoxComponents } from '../constants';
import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Checkbox"
			description="Cards are a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options." />
		<page-grid>
			@for (component of components; track component.id) {
				<component-card
					[componentName]="component.id"
					[colNumber]="component.colNumber"
					[itemStyle]="component.itemStyle"
					[component]="component.component"
					[code]="component.code" />
			}
		</page-grid>
	`,
})
export class CheckboxComponent {
	components = checkBoxComponents;
}
