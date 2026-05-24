import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { addDays } from 'date-fns';

@Component({
	selector: 'sim-calendar-11',
	imports: [HlmCalendarImports, HlmButtonImports],
	template: `
		<div class="rounded-md border p-2">
			<hlm-calendar class="**:[[brncalendar]]:border-none" [(date)]="selectedDate" />
			<button hlmBtn variant="outline" size="sm" (click)="setCurrentMonth()">Today</button>
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">With button</p>
	`,
})
export class Calendar11Component {
	protected selectedDate = addDays(new Date(), -38);

	protected setCurrentMonth(): void {
		this.selectedDate = new Date();
	}
}
