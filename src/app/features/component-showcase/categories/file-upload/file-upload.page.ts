import { Component } from '@angular/core';
import { fileUploadComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-file-upload',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="File upload"
			description="Component for uploading and managing files with support for drag and drop, file selection, and progress tracking" />
		<sim-page-grid [components]="components" />
	`,
})
export class FileUploadComponent {
	components = fileUploadComponents;
}
