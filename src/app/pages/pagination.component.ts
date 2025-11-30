import { Component } from '@angular/core';
import { paginationComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-pagination',
	template: `
		<component-header name="Pagination" description="Component for pagination with various styles and options" />
		<page-grid [components]="components" />
	`,
	imports: [ComponentHeaderComponent, PageGridComponent],
})
export class PaginationComponent {
	components = paginationComponents;
}
