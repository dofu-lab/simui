import { ComponentHeaderComponent, PageGridComponent } from '@/app/core';
import { Component } from '@angular/core';
import { sliderComponents } from '../constants';

@Component({
	selector: 'app-slider',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Slider"
			description="Sliders enable users to choose values from a continuous range. They provide an intuitive way to adjust settings or filter content dynamically." />
		<page-grid [components]="components" />
	`,
})
export class SliderComponent {
	components = sliderComponents;
}
