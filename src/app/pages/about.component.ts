import { Component } from '@angular/core';
import { ComponentHeaderComponent } from '../core';

@Component({
	selector: 'app-about',
	imports: [ComponentHeaderComponent],
	template: `
		<component-header name="About SimUI" description="" />
	`,
})
export class AboutComponent {}
