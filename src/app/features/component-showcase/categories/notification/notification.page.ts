import { Component } from '@angular/core';
import { notificationComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-notification',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header name="Notification" description="A component to display notification messages" />
		<sim-page-grid [components]="components" />
	`,
})
export class NotificationComponent {
	components = notificationComponents;
}
