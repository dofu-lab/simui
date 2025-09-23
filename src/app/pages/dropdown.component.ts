import { Component } from '@angular/core';
import { dropdownComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-dropdown',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Dropdown"
			description="A dropdown menu that displays a list of options for the user to choose from." />
		<page-grid [components]="components" />
	`,
})
export class DropdownComponent {
	components = dropdownComponents;
}
