import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { addDays } from 'date-fns';

@Component({
	selector: 'sim-calendar-11',
	imports: [HlmCalendarImports, HlmButtonImports, HlmCardImports],
	template: `
		<div hlmCardContent class="relative rounded-2xl border p-3">
			<hlm-calendar class="border-none p-0 pb-3" [(date)]="selectedDate" />
			<button hlmBtn variant="outline" size="sm" (click)="setCurrentMonth()">Today</button>
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">With button</p>
	`,
})
export class Calendar11Component {
	protected readonly selectedDate = signal(addDays(new Date(), -38));

	protected setCurrentMonth(): void {
		const newDate = new Date();
		this.selectedDate.set(newDate);
	}
}
