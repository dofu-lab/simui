import { Checkbox21Component } from '@/app/components/checkbox';
import { Component } from '@angular/core';

@Component({
	selector: 'app-day-toggle',
	imports: [Checkbox21Component],
	template: `
		<sim-checkbox-21 />
	`,
})
export class DayToggle {}
