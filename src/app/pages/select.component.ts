import { Component } from '@angular/core';
import { selectComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-select',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Select" description="Select component." />
		<page-grid [components]="components" />
	`,
})
export class SelectComponent {
	components = selectComponents;
}
