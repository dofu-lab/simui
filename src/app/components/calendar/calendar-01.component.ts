import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';

@Component({
	selector: 'sim-calendar-01',
	imports: [HlmCalendarImports],
	template: `
		<hlm-calendar [(date)]="selectedDate" [min]="minDate" [max]="maxDate" />
		<p class="text-muted-foreground mt-4 text-center text-xs">Single day selection</p>
	`,
})
export class Calendar01Component {
	protected readonly selectedDate = new Date();
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
}
