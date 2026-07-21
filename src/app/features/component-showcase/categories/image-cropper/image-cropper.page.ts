import { Component } from '@angular/core';
import { imageCropperComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-image-cropper',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Image Cropper"
			description="Crop, zoom, and preview images with a flexible and accessible image cropper." />
		<sim-page-grid [components]="components" />
	`,
})
export class ImageCropperComponent {
	components = imageCropperComponents;
}
