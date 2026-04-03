import { Component } from '@angular/core';
import { imageCropperComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-image-cropper',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Image Cropper"
			description="Crop, zoom, and preview images with a flexible and accessible image cropper." />
		<page-grid [components]="components" />
	`,
})
export class ImageCropperComponent {
	components = imageCropperComponents;
}
