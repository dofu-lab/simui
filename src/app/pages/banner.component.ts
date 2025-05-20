import { Component } from '@angular/core';
import { bannerComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-banner',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header
			name="Banner"
			description="A banner is a graphic image that typically spans the width of a website
        and is a prime location to communicate a message" />
		<page-grid [components]="components" />
	`,
})
export class BannerComponent {
	components = bannerComponents;
}
