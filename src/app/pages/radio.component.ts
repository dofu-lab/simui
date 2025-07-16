import { Component } from '@angular/core';
import { radioComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-radio',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Radio"
			description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time." />
		<page-grid [components]="components" />
	`,
})
export class RadioComponent {
	components = radioComponents;
}
