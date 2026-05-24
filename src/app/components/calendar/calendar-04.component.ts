import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';

@Component({
	selector: 'sim-calendar-04',
	imports: [HlmCalendarImports],
	template: `
		<hlm-calendar-multi
			[(date)]="selectedDates"
			[min]="minDate"
			[max]="maxDate"
			[minSelection]="2"
			[maxSelection]="6" />
		<p class="text-muted-foreground mt-4 text-center text-xs">Multiple day selection</p>
	`,
})
export class Calendar04Component {
	public selectedDates = [new Date()];
	public minDate = new Date(2023, 0, 1);
	public maxDate = new Date(2030, 11, 31);
}
