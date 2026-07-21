import { Component } from '@angular/core';
import { calendarComponents } from '@features/component-showcase/categories';
import { ComponentHeaderComponent, PageGridComponent } from '@features/component-showcase/shared';

@Component({
	selector: 'app-calendar',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header name="Calendar" description="Calendar component." />
		<sim-page-grid [components]="components" />
	`,
})
export class CalendarComponent {
	components = calendarComponents;
}
