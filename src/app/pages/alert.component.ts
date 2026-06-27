import { Component } from '@angular/core';
import { alertComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

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
