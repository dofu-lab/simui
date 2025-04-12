import { Component } from '@angular/core';
import { alertComponents } from '../constants';
import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-alert',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Alert" description="A component to display alert messages" />
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
export class AlertComponent {
	components = alertComponents;
}
