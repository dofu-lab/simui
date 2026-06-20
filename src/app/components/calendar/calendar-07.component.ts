import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-calendar-07',
	imports: [HlmCalendarImports, HlmCardImports],
	template: `
		<div hlmCardContent class="rounded-2xl border p-0">
			<hlm-calendar
				class="[&_button[brncalendarpreviousbutton]]:order-2 [&_div:has(>[brncalendarheader])]:justify-start [&_div:has(>[brncalendarheader])]:pl-2! [&_div[brncalendarheader]]:order-1 [&_div[brncalendarheader]]:mr-auto"
				[(date)]="selectedDate"
				[min]="minDate"
				[max]="maxDate" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Right navigation</p>
	`,
})
export class Calendar07Component {
	protected readonly selectedDate = new Date();
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
}
