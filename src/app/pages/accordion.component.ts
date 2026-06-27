import { Component } from '@angular/core';
import { accordionComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-accordion',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Accordion"
			description="A collapsible content panel that allows users to toggle between showing and hiding sections of related content, helping to organize information in a compact, expandable interface." />
		<sim-page-grid [components]="components" />
	`,
})
export class AccordionComponent {
	components = accordionComponents;
}
