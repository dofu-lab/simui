import { Component, input, output } from '@angular/core';
import { CalendarEvent } from './type';

@Component({
	selector: 'sim-week-view-calendar',
	template: ``,
})
export class WeekViewCalendarComponent {
	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();

	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<Date>();
}
