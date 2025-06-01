import { Component, input, output } from '@angular/core';
import { CalendarEvent } from './type';

@Component({
	selector: 'sim-day-view-calendar',
	template: ``,
})
export class DayViewCalendarComponent {
	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();

	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<Date>();
}
