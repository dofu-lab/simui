import { Component } from '@angular/core';
import { badgeComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-badge',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Badge"
			description="Badges help highlight important information, such as notifications or
        new and unread messages." />
		<sim-page-grid [components]="components" />
	`,
})
export class BadgeComponent {
	components = badgeComponents;
}
