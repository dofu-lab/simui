import { Component } from '@angular/core';
import { dialogComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-dialog',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Dialog"
			description="A modal window that communicates information or provides actions without leaving the page. Used for additional information, user input, or directing user flow." />
		<page-grid [components]="components" />
	`,
})
export class DialogComponent {
	components = dialogComponents;
}
