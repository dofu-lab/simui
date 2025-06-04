import { Component } from '@angular/core';
import { EventCalendar01Component, eventCalendarCode01 } from '../components/event-calendar';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-event-calendar',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Event Calendar" description="A component to display alert messages" />
		<page-grid [components]="components" />
	`,
})
export class EventCalendarComponent {
	components = [
		{
			id: 'event-calendar-01',
			component: EventCalendar01Component,
			code: eventCalendarCode01,
			colNumber: 3,
			itemStyle: 1,
		},
	];
}
