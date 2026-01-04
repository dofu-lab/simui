import { Input48Component } from '@/app/components/input';
import { Component } from '@angular/core';

@Component({
	selector: 'app-password',
	imports: [Input48Component],
	host: { class: 'w-full' },
	template: `
		<sim-input-48 />
	`,
})
export class PasswordDemo {}
