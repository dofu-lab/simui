import { Component } from '@angular/core';
import { accordionComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

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
