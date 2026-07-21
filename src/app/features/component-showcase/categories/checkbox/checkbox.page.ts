import { Component } from '@angular/core';
import { checkBoxComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-checkbox',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Checkbox"
			description="Checkboxes allow users to select one or more options from a set. They are commonly used in forms and settings to toggle values on or off." />
		<sim-page-grid [components]="components" />
	`,
})
export class CheckboxComponent {
	components = checkBoxComponents;
}
