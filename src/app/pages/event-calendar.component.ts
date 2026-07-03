import { Component } from '@angular/core';
import { EventCalendar01Component } from '../components/event-calendar';
import { ComponentCardItem, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-event-calendar',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header name="Event Calendar" description="A component to display alert messages" />
		<sim-page-grid [components]="components" />
	`,
})
export class EventCalendarComponent {
	protected readonly components: ComponentCardItem[] = [
		{
			id: 'event-calendar-01',
			component: EventCalendar01Component,
			layout: 'full',
			alignment: 'center',
		},
	];
}
