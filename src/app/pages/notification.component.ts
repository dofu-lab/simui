import { Component } from '@angular/core';
import { notificationComponents } from '../constants';
import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-notification',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Notification" description="A component to display notification messages" />
		<page-grid>
			@for (component of components; track component.id) {
				<component-card
					[componentName]="component.id"
					[colNumber]="component.colNumber"
					[itemStyle]="component.itemStyle"
					[component]="component.component"
					[code]="component.code" />
			}
		</page-grid>
	`,
})
export class NotificationComponent {
	components = notificationComponents;
}
