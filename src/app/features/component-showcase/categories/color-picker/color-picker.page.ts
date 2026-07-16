import { Component } from '@angular/core';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';
import { colorPickerComponents } from './color-picker.registry';

@Component({
	selector: 'app-color-picker',
	imports: [ComponentHeaderComponent, PageGridComponent],
	template: `
		<sim-component-header
			name="Color Picker"
			description="A solid color picker with saturation, hue, opacity, formats, and presets." />
		<sim-page-grid [components]="components" />
	`,
})
export class ColorPickerPageComponent {
	protected readonly components = colorPickerComponents;
}
