import { Component } from '@angular/core';
import { dropdownComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-dropdown',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Dropdown"
			description="A dropdown menu that displays a list of options for the user to choose from." />
		<sim-page-grid [components]="components" />
	`,
})
export class DropdownComponent {
	components = dropdownComponents;
}
