import { Component } from '@angular/core';
import { cardComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PageGridComponent, ComponentHeaderComponent],
  template: `
		<component-header
			name="Card"
			description="Cards are a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options." />
		<page-grid [components]="components" />
	`,
})
export class CardComponent {
  components = cardComponents;
}
