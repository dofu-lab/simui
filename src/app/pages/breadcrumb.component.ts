import { Component } from '@angular/core';
import { breadcrumbComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-breadcrumb',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Breadcrumb"
			description="A breadcrumb is a navigation aid that helps users keep track of their
        location within a website." />
		<page-grid [components]="components" />
	`,
})
export class BreadcrumbComponent {
	components = breadcrumbComponents;
}
