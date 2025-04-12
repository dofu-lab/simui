import { Component } from '@angular/core';
import { breadcrumbComponents } from '../constants';
import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Breadcrumb"
			description="A breadcrumb is a navigation aid that helps users keep track of their
        location within a website." />
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
export class BreadcrumbComponent {
	components = breadcrumbComponents;
}
