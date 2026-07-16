import { Component } from '@angular/core';
import { selectComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

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
