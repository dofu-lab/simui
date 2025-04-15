import { Component } from '@angular/core';
import { notificationComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-notification',
	standalone: true,
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Notification" description="A component to display notification messages" />
		<page-grid [components]="components" />
	`,
})
export class NotificationComponent {
	components = notificationComponents;
}
