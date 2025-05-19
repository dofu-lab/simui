import { Component } from '@angular/core';
import { fileUploadComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-file-upload',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="File upload"
			description="Component for uploading and managing files with support for drag and drop, file selection, and progress tracking" />
		<page-grid [components]="components" />
	`,
})
export class FileUploadComponent {
	components = fileUploadComponents;
}
