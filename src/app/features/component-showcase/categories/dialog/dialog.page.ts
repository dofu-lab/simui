import { Component } from '@angular/core';
import { dialogComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-dialog',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Dialog"
			description="A modal window that communicates information or provides actions without leaving the page. Used for additional information, user input, or directing user flow." />
		<sim-page-grid [components]="components" />
	`,
})
export class DialogComponent {
	components = dialogComponents;
}
