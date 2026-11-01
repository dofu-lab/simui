import { Component } from '@angular/core';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';
import { emptyStateComponents } from './empty-state.registry';

@Component({
	selector: 'app-empty-state',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Empty State"
			description="Help users take the next step with empty states for projects, search results, teams, and integrations." />
		<sim-page-grid [components]="components" />
	`,
})
export class EmptyStateComponent {
	protected readonly components = emptyStateComponents;
}
