import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { subDays, subMonths, subYears } from 'date-fns';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
	selector: 'sim-calendar-15',
	imports: [HlmCalendarImports, HlmScrollAreaImports, HlmSeparatorImports, HlmButtonImports, NgScrollbarModule],
	template: `
		<div class="flex items-start rounded-md border">
			<div class="flex h-full flex-1 items-start gap-2">
				<ng-scrollbar hlm class="h-72" appearance="compact">
					<div class="grid gap-0.5 p-3 max-sm:grid-cols-2">
						<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(today)">Today</button>
						<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(yesterday)">
							Yesterday
						</button>
						<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastWeek)">
							Last week
						</button>
						<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastMonth)">
							Last month
						</button>
						<button hlmBtn variant="ghost" class="w-full justify-start" (click)="selectedDate.set(lastYear)">
							Last year
						</button>
					</div>
				</ng-scrollbar>
			</div>
			<hlm-separator orientation="vertical" />
			<hlm-calendar calendarClass="border-none" [(date)]="selectedDate" />
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
