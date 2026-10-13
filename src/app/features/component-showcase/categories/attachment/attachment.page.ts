import { Component } from '@angular/core';
import { attachmentComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-attachment',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Attachment"
			description="Display file metadata, previews, upload states, and grouped attachments in a compact, consistent format." />
		<sim-page-grid [components]="components" />
	`,
})
export class AttachmentComponent {
	protected readonly components = attachmentComponents;
}
