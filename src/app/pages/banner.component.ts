import { Component } from '@angular/core';
import { bannerComponents } from '../constants';
import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Banner"
			description="A banner is a graphic image that typically spans the width of a website
        and is a prime location to communicate a message" />
		<page-grid>
			@for (component of components; track component.id) {
				<component-card
					[componentName]="component.id"
					[colNumber]="component.colNumber"
					[itemStyle]="component.itemStyle"
					[component]="component.component"
					[code]="component.code" />
			}
		</page-grid>
	`,
})
export class BannerComponent {
	components = bannerComponents;
}
