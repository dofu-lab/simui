import { Component, input, output } from '@angular/core';
import { CalendarEvent } from './type';

@Component({
	selector: 'sim-month-view-calendar',
	template: ``,
})
export class MonthViewCalendarComponent {
	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();

	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<Date>();
}
