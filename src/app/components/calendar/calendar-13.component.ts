import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-calendar-13',
	imports: [HlmCalendarImports, HlmInputGroupImports, HlmLabel, NgIcon],
	providers: [provideIcons({ lucideClock })],
	template: `
		<div class="flex flex-col items-center rounded-md border">
			<hlm-calendar class="p-2 pb-0 **:[[brncalendar]]:border-none" [(date)]="selectedDate" />
			<div class="flex w-full items-center gap-2 border-t p-3">
				<label hlmLabel for="time-input-13" class="shrink-0 text-xs">Enter time</label>
				<hlm-input-group>
					<input
						hlmInputGroupInput
						id="time-input-13"
						type="time"
						value="13:00:00"
						class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
					<hlm-input-group-addon>
						<ng-icon name="lucideClock" />
					</hlm-input-group-addon>
				</hlm-input-group>
			</div>
		</div>
	`,
})
export class Calendar13Component {
	protected readonly selectedDate = signal(new Date());
}
