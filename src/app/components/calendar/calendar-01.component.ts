import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';

@Component({
	selector: 'sim-calendar-01',
	imports: [HlmCalendarImports],
	template: `
		<hlm-calendar [(date)]="selectedDate" [min]="minDate" [max]="maxDate" />
	`,
})
export class Calendar01Component {
	public selectedDate = new Date();
	public minDate = new Date(2023, 0, 1);
	public maxDate = new Date(2030, 11, 31);
}
