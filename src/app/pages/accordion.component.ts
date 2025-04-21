import { Component } from '@angular/core';
import { accordionComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Accordion" description="" />
		<page-grid [components]="components" />
	`,
})
export class AccordionComponent {
	components = accordionComponents;
}
