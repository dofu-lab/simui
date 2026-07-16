import { Component } from '@angular/core';
import { alertComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-alert',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header name="Alert" description="A component to display alert messages" />
		<sim-page-grid [components]="components" />
	`,
})
export class AlertComponent {
	components = alertComponents;
}
