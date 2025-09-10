import { Component } from '@angular/core';
import { inputComponents } from '../constants/input.constant';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-input',
	template: `
		<component-header name="Input" description="Component for text input with various styles and validation options" />
		<page-grid [components]="components" />
	`,
	imports: [ComponentHeaderComponent, PageGridComponent],
})
export class InputComponent {
	components = inputComponents;
}
