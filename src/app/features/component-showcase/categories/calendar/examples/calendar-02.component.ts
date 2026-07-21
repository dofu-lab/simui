import { Component } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-calendar-02',
	imports: [HlmCalendarImports, HlmCardImports],
	template: `
		<div hlmCardContent class="rounded-2xl border p-0">
			<hlm-calendar-range [(startDate)]="start" [(endDate)]="end" [min]="minDate" [max]="maxDate" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Range calendar</p>
	`,
})
export class Calendar02Component {
	protected readonly start = new Date();
	protected readonly end = new Date(this.start.getTime() + 5 * 24 * 60 * 60 * 1000);
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
}
