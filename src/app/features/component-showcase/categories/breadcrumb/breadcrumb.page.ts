import { Component } from '@angular/core';
import { breadcrumbComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-breadcrumb',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Breadcrumb"
			description="A breadcrumb is a navigation aid that helps users keep track of their
        location within a website." />
		<sim-page-grid [components]="components" />
	`,
})
export class BreadcrumbComponent {
	components = breadcrumbComponents;
}
