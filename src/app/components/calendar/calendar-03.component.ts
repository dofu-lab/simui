import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { addDays, isSameDay, isWeekend } from 'date-fns';

@Component({
	selector: 'sim-calendar-03',
	imports: [HlmCalendarImports, HlmCardImports],
	template: `
		<div hlmCardContent class="rounded-2xl border p-0">
			<hlm-calendar-range [dateDisabled]="isDateUnavailable" [min]="minDate" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Disabled dates</p>
	`,
})
export class Calendar03Component {
	protected readonly minDate = new Date();
	protected readonly isDateUnavailable = (date: Date): boolean => {
		// Check if the date is a weekend
		if (isWeekend(date)) {
			return true;
		}

		// Check if the date is one of the specifically disabled dates
		return this.disabledRanges.some((disabledDate) => isSameDay(date, disabledDate));
	};

	private readonly disabledRanges: Date[] = [
		this.minDate, // Disables today
		addDays(this.minDate, 14), // Disables only the 14th day from now
		addDays(this.minDate, 23), // Disables only the 23rd day from now
	];
}
