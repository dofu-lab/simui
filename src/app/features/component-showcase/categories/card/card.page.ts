import { Component } from '@angular/core';
import { cardComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-card',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Card"
			description="Cards are a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options." />
		<sim-page-grid [components]="components" />
	`,
})
export class CardComponent {
	components = cardComponents;
}
