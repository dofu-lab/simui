import { Component } from '@angular/core';
import { bannerComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-banner',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header
			name="Banner"
			description="A banner is a graphic image that typically spans the width of a website
        and is a prime location to communicate a message" />
		<sim-page-grid [components]="components" />
	`,
})
export class BannerComponent {
	components = bannerComponents;
}
