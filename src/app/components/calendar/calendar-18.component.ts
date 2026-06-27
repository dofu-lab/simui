import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { hlm } from '@spartan-ng/helm/utils';
import { addDays } from 'date-fns';

@Component({
	selector: 'sim-calendar-18',
	imports: [NgIcon, HlmCalendarImports, HlmButtonImports, HlmSeparatorImports],
	providers: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
	template: `
		<div class="relative flex flex-col overflow-hidden rounded-2xl border sm:flex-row">
			<div class="absolute top-0 z-10 flex w-full items-center justify-between px-3.5 pt-4">
				<button hlmBtn variant="outline" size="icon-xs" (click)="jumpToPreviousMonth()">
					<ng-icon name="lucideChevronLeft" />
				</button>
				<button hlmBtn variant="outline" size="icon-xs" (click)="jumpToNextMonth()">
					<ng-icon name="lucideChevronRight" />
				</button>
			</div>
			<hlm-calendar-range
				[class]="firstMonthClass()"
				[(startDate)]="start"
				[(endDate)]="end"
				[defaultFocusedDate]="firstMonthDate()" />
			<hlm-separator orientation="vertical" class="hidden sm:block" />
			<hlm-separator class="sm:hidden" />
			<hlm-calendar-range
				[class]="secondMonthClass()"
				[(startDate)]="start"
				[(endDate)]="end"
				[defaultFocusedDate]="secondMonthDate()" />
			<hlm-separator orientation="vertical" class="hidden sm:block" />
			<hlm-separator class="sm:hidden" />
			<hlm-calendar-range
				[class]="thirdMonthClass()"
				[(startDate)]="start"
				[(endDate)]="end"
				[defaultFocusedDate]="thirdMonthDate()" />
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Three months calendar</p>
	`,
})
export class Calendar18Component {
	protected start = signal(new Date());
	protected end = signal(addDays(new Date(), 5));
	protected focusedDate = signal(new Date());

	protected firstMonthDate = computed(() => this.focusedDate());
	protected secondMonthDate = computed(() => {
		const date = new Date(this.focusedDate());
		date.setMonth(date.getMonth() + 1);
		return date;
	});
	protected thirdMonthDate = computed(() => {
		const date = new Date(this.focusedDate());
		date.setMonth(date.getMonth() + 2);
		return date;
	});
	protected firstMonthClass = computed(() => this.getMonthClass(this.firstMonthDate()));
	protected secondMonthClass = computed(() => this.getMonthClass(this.secondMonthDate()));
	protected thirdMonthClass = computed(() => this.getMonthClass(this.thirdMonthDate()));

	private readonly baseCalendarClass =
		'[&_button[brncalendarnextbutton]]:opacity-0! [&_button[brncalendarpreviousbutton]]:opacity-0! border-none [&_[data-outside]]:hidden bg-transparent';

	private getMonthClass(monthDate: Date): string {
		const hideRangeEnd =
			monthDate?.getMonth() !== this.end()?.getMonth()
				? '[&_button[data-range-end]]:hidden! [&_td:has([data-range-end])]:after:hidden!'
				: '';
		const hideRangeStart =
			monthDate?.getMonth() !== this.start()?.getMonth()
				? '[&_button[data-range-start]]:hidden! [&_td:has([data-range-start])]:after:hidden!'
				: '';
		return hlm(this.baseCalendarClass, hideRangeEnd, hideRangeStart);
	}

	protected jumpToPreviousMonth(): void {
		const newDate = new Date(this.focusedDate());
		newDate.setMonth(newDate.getMonth() - 3);
		this.focusedDate.set(newDate);
	}

	protected jumpToNextMonth(): void {
		const newDate = new Date(this.focusedDate());
		newDate.setMonth(newDate.getMonth() + 3);
		this.focusedDate.set(newDate);
	}
}
