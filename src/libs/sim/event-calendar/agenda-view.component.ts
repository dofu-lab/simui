import { Component, input, output } from '@angular/core';
import { CalendarEvent } from './type';

@Component({
	selector: 'sim-agenda-view',
	template: ``,
})
export class AgendaViewComponent {
	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();

	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<Date>();
}
