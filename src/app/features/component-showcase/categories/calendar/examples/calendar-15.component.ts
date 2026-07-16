import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { subDays, subMonths, subYears } from 'date-fns';

@Component({
	selector: 'sim-calendar-15',
	imports: [HlmCalendarImports, HlmButtonImports],
	template: `
		<div class="relative flex flex-col overflow-hidden rounded-2xl border sm:flex-row">
			<div class="flex flex-1 items-start gap-2 max-sm:order-1 max-sm:border-t sm:border-r">
				<div class="grid w-full gap-0.5 p-3">
					<button hlmBtn size="sm" variant="ghost" class="w-full justify-start" (click)="selectedDate.set(today)">
						Today
					</button>
					<button hlmBtn size="sm" variant="ghost" class="w-full justify-start" (click)="selectedDate.set(yesterday)">
						Yesterday
					</button>
					<button hlmBtn size="sm" variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastWeek)">
						Last week
					</button>
					<button hlmBtn size="sm" variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastMonth)">
						Last month
					</button>
					<button hlmBtn size="sm" variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastYear)">
						Last year
					</button>
				</div>
			</div>
			<hlm-calendar class="border-none" [(date)]="selectedDate" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Calendar with presets</p>
	`,
})
export class Calendar15Component {
	protected readonly selectedDate = signal(new Date());
	protected readonly today = new Date();
	protected readonly yesterday = subDays(this.today, 1);
	protected readonly lastWeek = subDays(this.today, 7);
	protected readonly lastMonth = subMonths(this.today, 1);
	protected readonly lastYear = subYears(this.today, 1);
}
