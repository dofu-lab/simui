import { Component } from '@angular/core';
import { tabsComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-tabs',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Tabs"
			description="Tabs organize content into multiple sections and allow users to navigate between them. They help display related information in a compact space without overwhelming the user." />
		<sim-page-grid [components]="components" />
	`,
})
export class TabsComponent {
	components = tabsComponents;
}
