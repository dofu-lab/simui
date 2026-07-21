import { Component, model } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-calendar-09',
	imports: [HlmCalendarImports, HlmCardImports],
	template: `
		<div hlmCardContent class="relative rounded-2xl border p-0">
			<hlm-calendar [(date)]="selectedDate" [captionLayout]="_captionLayout()" [min]="minDate" [max]="maxDate" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Yearly select + nav</p>
	`,
})
export class Calendar09Component {
	protected readonly selectedDate = new Date();
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
	protected readonly _captionLayout = model<'dropdown' | 'label' | 'dropdown-months' | 'dropdown-years'>(
		'dropdown-years',
	);
}
