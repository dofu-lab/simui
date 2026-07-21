import { Component } from '@angular/core';
import { radioComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-radio',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Radio"
			description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time." />
		<sim-page-grid [components]="components" />
	`,
})
export class RadioComponent {
	components = radioComponents;
}
