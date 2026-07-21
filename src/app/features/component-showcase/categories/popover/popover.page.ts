import { Component } from '@angular/core';
import { popoverComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-button',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Popover"
			description="A popover is a transient UI element that displays contextual information or actions when triggered by user interaction." />
		<sim-page-grid [components]="components" />
	`,
})
export class PopoverComponent {
	components = popoverComponents;
}
