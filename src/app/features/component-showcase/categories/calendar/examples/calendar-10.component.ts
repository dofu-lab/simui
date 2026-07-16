import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { addDays } from 'date-fns';

@Component({
	selector: 'sim-calendar-10',
	imports: [HlmCalendarImports, HlmButtonImports, HlmCardImports],
	template: `
		<div hlmCardContent class="relative rounded-2xl border p-3">
			<hlm-calendar class="border-none p-0 pb-3" [(date)]="selectedDate" [defaultFocusedDate]="month()" />
			<button hlmBtn variant="outline" size="sm" (click)="setCurrentMonth()">Current Month</button>
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">With button</p>
	`,
})
export class Calendar10Component {
	protected readonly selectedDate = signal(addDays(new Date(), -28));
	protected readonly month = signal(this.selectedDate());

	protected setCurrentMonth(): void {
		const newDate = new Date();
		this.month.set(newDate);
	}
}
