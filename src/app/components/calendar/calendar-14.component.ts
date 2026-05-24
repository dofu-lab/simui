import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
	selector: 'sim-calendar-14',
	imports: [
		HlmCalendarImports,
		HlmScrollAreaImports,
		HlmSeparatorImports,
		HlmButtonImports,
		DatePipe,
		NgScrollbarModule,
	],
	template: `
		<div class="flex items-start rounded-md border">
			<hlm-calendar class="p-2 pb-0 **:[[brncalendar]]:border-none" [(date)]="selectedDate" />
			<hlm-separator orientation="vertical" />
			<div class="flex h-full flex-1 flex-col items-start gap-2">
				<p class="px-3 pt-2 text-sm font-medium">{{ selectedDate() | date: 'EEE, dd' }}</p>
				<ng-scrollbar hlm class="h-72 w-48" appearance="compact">
					<div class="grid gap-1.5 px-3 pb-2 max-sm:grid-cols-2">
						@for (timeslot of timeSlots; track timeslot.time) {
							<button
								hlmBtn
								[variant]="timeslot.time === selectedTime() ? 'default' : 'outline'"
								(click)="selectedTime.set(timeslot.time)">
								{{ timeslot.time }}
							</button>
						}
					</div>
				</ng-scrollbar>
			</div>
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Appointment picker</p>
	`,
})
export class Calendar14Component {
	protected readonly selectedDate = signal(new Date());
	protected readonly selectedTime = signal('09:00');

	protected readonly timeSlots = [
		{ available: false, time: '09:00' },
		{ available: false, time: '09:30' },
		{ available: true, time: '10:00' },
		{ available: true, time: '10:30' },
		{ available: true, time: '11:00' },
		{ available: true, time: '11:30' },
		{ available: false, time: '12:00' },
		{ available: true, time: '12:30' },
		{ available: true, time: '13:00' },
		{ available: true, time: '13:30' },
		{ available: true, time: '14:00' },
		{ available: false, time: '14:30' },
		{ available: false, time: '15:00' },
		{ available: true, time: '15:30' },
		{ available: true, time: '16:00' },
		{ available: true, time: '16:30' },
		{ available: true, time: '17:00' },
		{ available: true, time: '17:30' },
	];
}
