import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-calendar-04',
	imports: [HlmCalendarImports, HlmCardImports],
	template: `
		<div hlmCardContent class="rounded-2xl border p-0">
			<hlm-calendar-multi
				[(date)]="selectedDates"
				[min]="minDate"
				[max]="maxDate"
				[minSelection]="2"
				[maxSelection]="6" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Multiple day selection</p>
	`,
})
export class Calendar04Component {
	protected readonly selectedDates = [new Date()];
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
}
