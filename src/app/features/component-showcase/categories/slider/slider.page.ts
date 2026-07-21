import { Component } from '@angular/core';
import { sliderComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-slider',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Slider"
			description="Sliders enable users to choose values from a continuous range. They provide an intuitive way to adjust settings or filter content dynamically." />
		<sim-page-grid [components]="components" />
	`,
})
export class SliderComponent {
	components = sliderComponents;
}
