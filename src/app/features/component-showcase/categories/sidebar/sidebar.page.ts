import { Component } from '@angular/core';
import { sidebarComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

const SIDEBAR_PREVIEW_CLASS =
	'**:data-[slot=sidebar-container]:absolute **:data-[slot=sidebar-container]:h-full **:data-[slot=sidebar-wrapper]:relative **:data-[slot=sidebar-wrapper]:mx-auto **:data-[slot=sidebar-wrapper]:aspect-[16/10] **:data-[slot=sidebar-wrapper]:min-h-0 **:data-[slot=sidebar-wrapper]:w-full **:data-[slot=sidebar-wrapper]:overflow-hidden **:data-[slot=sidebar-wrapper]:rounded-md **:data-[slot=sidebar-wrapper]:border [&_[data-testid=component-preview-animation-host]>*]:w-full [&_hlm-sidebar]:h-auto [&_sim-component-card>.contents>*]:w-full';

@Component({
	selector: 'app-sidebar',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Sidebar"
			description="Sidebar components for application navigation, workspaces, and collapsible layouts." />
		<sim-page-grid
			[class]="sidebarPreviewClass"
			[fullViewPreviewClass]="sidebarPreviewClass"
			[components]="components" />
	`,
})
export class SidebarComponent {
	protected readonly components = sidebarComponents;
	protected readonly sidebarPreviewClass = SIDEBAR_PREVIEW_CLASS;
}
