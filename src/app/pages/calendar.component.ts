import { Component } from '@angular/core';
import { calendarComponents } from '../constants';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-calendar',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Calendar" description="Calendar component." />
		<page-grid [components]="components" />
	`,
})
export class CalendarComponent {
	components = calendarComponents;
}
