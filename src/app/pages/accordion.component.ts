import { Component } from '@angular/core';
import { accordionComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';
import { SpartanResizableComponent } from './test-spartan-resizable.component';

@Component({
	selector: 'app-accordion',
	imports: [PageGridComponent, ComponentHeaderComponent, SpartanResizableComponent],
	template: `
		<component-header
			name="Accordion"
			description="A collapsible content panel that allows users to toggle between showing and hiding sections of related content, helping to organize information in a compact, expandable interface." />
		<div class="mb-10 flex"></div>
		<div class="mb-10"></div>
		<spartan-resizable />
		<div class="mb-10"></div>
		<page-grid [components]="components" />
	`,
})
export class AccordionComponent {
	components = accordionComponents;
}
