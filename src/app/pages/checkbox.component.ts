import { Component } from '@angular/core';
import { checkBoxComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-checkbox',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Checkbox"
			description="Checkboxes allow users to select one or more options from a set. They are commonly used in forms and settings to toggle values on or off." />
		<page-grid [components]="components" />
	`,
})
export class CheckboxComponent {
	components = checkBoxComponents;
}
