import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';

@Component({
	selector: 'sim-calendar-07',
	imports: [HlmCalendarImports],
	template: `
		<hlm-calendar
			class="[&_button[brncalendarnextbutton]]:relative! [&_button[brncalendarpreviousbutton]]:relative! [&_div:has(>[brncalendarheader])]:justify-start! [&_div:has(>[brncalendarheader])]:pl-2!"
			[(date)]="selectedDate"
			[min]="minDate"
			[max]="maxDate" />
		<p class="text-muted-foreground mt-4 text-center text-xs">Right navigation</p>
	`,
})
export class Calendar07Component {
	protected readonly selectedDate = new Date();
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
}
