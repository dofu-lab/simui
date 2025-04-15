import { Component } from '@angular/core';
import { checkBoxComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Checkbox"
			description="Cards are a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options." />
		<page-grid [components]="components" />
	`,
})
export class CheckboxComponent {
	components = checkBoxComponents;
}
