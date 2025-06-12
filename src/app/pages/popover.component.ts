import { Component } from '@angular/core';
import { popoverComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-button',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Popover"
			description="A popover is a transient UI element that displays contextual information or actions when triggered by user interaction." />
		<page-grid [components]="components" />
	`,
})
export class PopoverComponent {
	components = popoverComponents;
}
