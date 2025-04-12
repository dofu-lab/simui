import { Component } from '@angular/core';
import { badgeComponents } from '../constants';
import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-badge',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Badge"
			description="Badges help highlight important information, such as notifications or
        new and unread messages." />
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
export class BadgeComponent {
	components = badgeComponents;
}
