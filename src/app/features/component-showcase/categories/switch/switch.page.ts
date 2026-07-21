import { Component } from '@angular/core';
import { switchComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-switch',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header name="Switch" description="A switch is a toggle that can be either on or off." />
		<sim-page-grid [components]="components" />
	`,
})
export class SwitchComponent {
	components = switchComponents;
}
