import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';

@Component({
	selector: 'sim-calendar-02',
	imports: [HlmCalendarImports],
	template: `
		<hlm-calendar-range [(startDate)]="start" [(endDate)]="end" [min]="minDate" [max]="maxDate" />
	`,
})
export class Calendar02Component {
	public start = new Date();
	public end = new Date(this.start.getTime() + 5 * 24 * 60 * 60 * 1000);
	public minDate = new Date(2023, 0, 1);
	public maxDate = new Date(2030, 11, 31);
}
