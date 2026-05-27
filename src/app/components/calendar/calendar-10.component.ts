import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { addDays } from 'date-fns';

@Component({
	selector: 'sim-calendar-10',
	imports: [HlmCalendarImports, HlmButtonImports],
	template: `
		<div class="rounded-md border p-3">
			<hlm-calendar calendarClass="p-0 pb-3 border-none" [(date)]="selectedDate" [defaultFocusedDate]="month" />
			<button hlmBtn variant="outline" size="sm" (click)="setCurrentMonth()">Current Month</button>
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">With button</p>
	`,
})
export class Calendar10Component {
	protected readonly selectedDate = addDays(new Date(), -28);
	protected month = this.selectedDate;

	protected setCurrentMonth(): void {
		const newDate = new Date();
		this.month = newDate;
	}
}
