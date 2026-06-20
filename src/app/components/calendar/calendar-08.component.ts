import { Component, model } from '@angular/core';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-calendar-08',
	imports: [HlmCalendarImports, HlmCardImports],
	template: `
		<div hlmCardContent class="relative rounded-2xl border p-0">
			<hlm-calendar
				class="[&_button[brncalendarnextbutton]]:hidden! [&_button[brncalendarpreviousbutton]]:hidden! **:[[brncalendarmonthselect]]:flex-1! **:[[brnselecttrigger]]:w-full!"
				[(date)]="selectedDate"
				[captionLayout]="_captionLayout()"
				[min]="minDate"
				[max]="maxDate" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Monthly / yearly selects</p>
	`,
})
export class Calendar08Component {
	protected readonly selectedDate = new Date();
	protected readonly minDate = new Date(2023, 0, 1);
	protected readonly maxDate = new Date(2030, 11, 31);
	protected readonly _captionLayout = model<'dropdown' | 'label' | 'dropdown-months' | 'dropdown-years'>('dropdown');
}
