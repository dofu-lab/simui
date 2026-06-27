import { Component } from '@angular/core';
import { selectComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-select',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header name="Select" description="Select component." />
		<sim-page-grid [components]="components" />
	`,
})
export class SelectComponent {
	components = selectComponents;
}
