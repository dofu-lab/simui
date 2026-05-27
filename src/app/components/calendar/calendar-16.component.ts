import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subDays, subMonths, subYears } from 'date-fns';
import { NgScrollbarModule } from 'ngx-scrollbar';

type DateRange = {
	from: Date;
	to: Date;
};
@Component({
	selector: 'sim-calendar-16',
	imports: [HlmCalendarImports, HlmScrollAreaImports, HlmSeparatorImports, HlmButtonImports, NgScrollbarModule],
	template: `
		<div class="flex items-start rounded-md border">
			<div class="flex h-full flex-1 items-start gap-2">
				<div class="grid gap-0.5 p-3 max-sm:grid-cols-2">
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(todayRange)">
						Today
					</button>
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(yesterday)">
						Yesterday
					</button>
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(last7Days)">
						Last 7 days
					</button>
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(last30Days)">
						Last 30 days
					</button>
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(monthToDate)">
						Month to date
					</button>
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastMonth)">
						Last month
					</button>
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(yearToDate)">
						Year to date
					</button>
					<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastYear)">
						Last year
					</button>
				</div>
			</div>
			<hlm-separator orientation="vertical" />
			<hlm-calendar-range
				calendarClass="border-none"
				[startDate]="selectedDate().from"
				[endDate]="selectedDate().to" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Range calendar with presets</p>
	`,
})
export class Calendar16Component {
	protected readonly today = new Date();
	protected readonly todayRange: DateRange = {
		from: new Date(),
		to: new Date(),
	};
	protected readonly yesterday: DateRange = {
		from: subDays(this.today, 1),
		to: subDays(this.today, 1),
	};
	protected readonly last7Days: DateRange = {
		from: subDays(this.today, 6),
		to: this.today,
	};
	protected readonly last30Days: DateRange = {
		from: subDays(this.today, 29),
		to: this.today,
	};
	protected readonly monthToDate: DateRange = {
		from: startOfMonth(this.today),
		to: this.today,
	};
	protected readonly lastMonth: DateRange = {
		from: startOfMonth(subMonths(this.today, 1)),
		to: endOfMonth(subMonths(this.today, 1)),
	};
	protected readonly yearToDate: DateRange = {
		from: startOfYear(this.today),
		to: this.today,
	};
	protected readonly lastYear: DateRange = {
		from: startOfYear(subYears(this.today, 1)),
		to: endOfYear(subYears(this.today, 1)),
	};
	protected readonly selectedDate = signal<DateRange>(this.last7Days);
}
