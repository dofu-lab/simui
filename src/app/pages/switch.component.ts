import { Component } from '@angular/core';
import { switchComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-switch',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Switch" description="A switch is a toggle that can be either on or off." />
		<page-grid [components]="components" />
	`,
})
export class SwitchComponent {
	components = switchComponents;
}
