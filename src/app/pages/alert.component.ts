import { Component } from '@angular/core';
import { alertComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-alert',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Alert" description="A component to display alert messages" />
		<page-grid [components]="components" />
	`,
})
export class AlertComponent {
	components = alertComponents;
}
