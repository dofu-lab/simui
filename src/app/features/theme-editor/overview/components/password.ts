import { Component } from '@angular/core';
import { Input48Component } from '@features/component-showcase/categories/input/examples';

@Component({
	selector: 'app-password',
	imports: [Input48Component],
	host: { class: 'w-full' },
	template: `
		<sim-input-48 />
	`,
})
export class PasswordDemo {}
