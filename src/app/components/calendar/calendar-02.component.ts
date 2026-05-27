import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';

@Component({
	selector: 'sim-calendar-02',
	imports: [HlmCalendarImports],
	template: `
		<hlm-calendar-range [(startDate)]="start" [(endDate)]="end" [min]="minDate" [max]="maxDate" />
		<p class="text-muted-foreground mt-4 text-center text-xs">Range calendar</p>
	`,
})
export class Calendar02Component {
	protected readonly start = new Date();
	protected readonly end = new Date(this.start.getTime() + 5 * 24 * 60 * 60 * 1000);
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
}
