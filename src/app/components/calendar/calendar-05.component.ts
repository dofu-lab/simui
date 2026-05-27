import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';

@Component({
	selector: 'sim-calendar-05',
	imports: [HlmCalendarImports],
	template: `
		<hlm-calendar
			class="[&_button[brncalendarcellbutton]]:rounded-full!"
			[(date)]="selectedDate"
			[min]="minDate"
			[max]="maxDate" />
		<p class="text-muted-foreground mt-4 text-center text-xs">Custom select day style</p>
	`,
})
export class Calendar05Component {
	protected readonly selectedDate = new Date();
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
}
