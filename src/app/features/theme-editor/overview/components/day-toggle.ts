import { Component } from '@angular/core';
import { Checkbox21Component } from '@features/component-showcase/categories/checkbox/examples';

@Component({
	selector: 'app-day-toggle',
	imports: [Checkbox21Component],
	template: `
		<sim-checkbox-21 />
	`,
})
export class DayToggle {}
