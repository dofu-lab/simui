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
		<div class="flex flex-col items-start rounded-md border sm:flex-row">
			<hlm-calendar calendarClass="border-none" [(date)]="selectedDate" />
			<div class="flex h-full w-full flex-1 flex-col items-start gap-2 max-sm:border-t sm:border-l">
				<p class="px-3 pt-3 text-sm font-medium">{{ selectedDate() | date: 'EEE, dd' }}</p>
				<ng-scrollbar hlm class="h-40 w-full sm:h-72 sm:w-40" appearance="compact">
					<div class="grid gap-1.5 px-4 pb-2 max-sm:grid-cols-2">
						@for (timeslot of timeSlots; track timeslot.time) {
							<button
								hlmBtn
								size="sm"
								[disabled]="!timeslot.available"
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
	protected readonly selectedTime = signal('');

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
