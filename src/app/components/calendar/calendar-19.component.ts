import type { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { CurrencyPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import {
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	computed,
	input,
	model,
	numberAttribute,
	viewChild,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';
import { BrnCalendar, BrnCalendarImports, injectBrnCalendarI18n, type Weekday } from '@spartan-ng/brain/calendar';
import { injectDateAdapter } from '@spartan-ng/brain/date-time';
import { buttonVariants } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';
import { addMonths, format } from 'date-fns';

@Component({
	selector: 'sim-calendar-19',
	imports: [BrnCalendarImports, NgIcon, HlmIcon, HlmSelectImports, NgTemplateOutlet, NgClass, CurrencyPipe],
	viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			brnCalendar
			[min]="min()"
			[max]="max()"
			[disabled]="disabled()"
			[(date)]="date"
			[dateDisabled]="dateDisabled()"
			[weekStartsOn]="weekStartsOn()"
			[defaultFocusedDate]="defaultFocusedDate()"
			[class]="_computedCalenderClass()">
			<div class="inline-flex flex-col space-y-4">
				<!-- Header -->
				<div class="space-y-4">
					<div class="relative flex items-center justify-center pt-1">
						<div class="flex w-full items-center justify-center gap-1.5">
							<ng-template #month>
								<hlm-select brnCalendarMonthSelect>
									<hlm-select-trigger size="sm" [class]="_selectClass">
										<hlm-select-value />
									</hlm-select-trigger>
									<hlm-select-content *hlmSelectPortal class="max-h-80">
										<hlm-select-group>
											@for (month of _i18n.config().months(); track month) {
												<hlm-select-item [value]="month">{{ month }}</hlm-select-item>
											}
										</hlm-select-group>
									</hlm-select-content>
								</hlm-select>
							</ng-template>
							<ng-template #year>
								<hlm-select brnCalendarYearSelect>
									<hlm-select-trigger size="sm" [class]="_selectClass">
										<hlm-select-value />
									</hlm-select-trigger>
									<hlm-select-content *hlmSelectPortal class="max-h-80">
										<hlm-select-group>
											@for (year of _i18n.config().years(); track year) {
												<hlm-select-item [value]="year">{{ year }}</hlm-select-item>
											}
										</hlm-select-group>
									</hlm-select-content>
								</hlm-select>
							</ng-template>
							@let heading = _heading();
							@switch (captionLayout()) {
								@case ('dropdown') {
									<ng-container [ngTemplateOutlet]="month" />
									<ng-container [ngTemplateOutlet]="year" />
								}
								@case ('dropdown-months') {
									<ng-container [ngTemplateOutlet]="month" />
									<div brnCalendarHeader class="text-sm font-medium">{{ heading.year }}</div>
								}
								@case ('dropdown-years') {
									<div brnCalendarHeader class="text-sm font-medium">{{ heading.month }}</div>
									<ng-container [ngTemplateOutlet]="year" />
								}
								@case ('label') {
									<div brnCalendarHeader class="text-sm font-medium">{{ heading.header }}</div>
								}
							}
						</div>

						<div class="flex items-center space-x-1">
							<button
								brnCalendarPreviousButton
								class="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground text-popover-foreground absolute left-1 inline-flex size-8 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium whitespace-nowrap transition-colors hover:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
								<ng-icon hlm name="lucideChevronLeft" size="sm" />
							</button>

							<button
								brnCalendarNextButton
								class="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground text-popover-foreground absolute right-1 inline-flex size-8 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium whitespace-nowrap transition-colors hover:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
								<ng-icon hlm name="lucideChevronRight" size="sm" />
							</button>
						</div>
					</div>
				</div>

				<table class="w-full border-collapse space-y-1" brnCalendarGrid>
					<thead>
						<tr class="flex">
							<th
								*brnCalendarWeekday="let weekday"
								scope="col"
								class="text-muted-foreground w-12 rounded-md text-[0.8rem] font-normal"
								[attr.aria-label]="_i18n.config().labelWeekday(weekday)">
								{{ _i18n.config().formatWeekdayName(weekday) }}
							</th>
						</tr>
					</thead>

					<tbody role="rowgroup">
						<tr *brnCalendarWeek="let week" class="mt-2 flex w-full">
							@for (date of week; track _dateAdapter.getTime(date)) {
								<td
									brnCalendarCell
									class="data-[selected]:data-[outside]:bg-accent/50 data-[selected]:bg-accent relative size-12 p-0 text-center text-sm focus-within:relative focus-within:z-20 first:data-[selected]:rounded-l-md last:data-[selected]:rounded-r-md [&:has([aria-selected].day-range-end)]:rounded-r-md">
									<button brnCalendarCellButton [date]="date" [class]="_btnClass">
										<span class="flex flex-col">
											{{ _dateAdapter.getDate(date) }}
											@if (getPriceForDate(date) !== undefined) {
												<span
													class="text-muted-foreground group-data-selected:text-primary-foreground/70 text-[10px] font-medium"
													[ngClass]="{ 'text-emerald-500!': isGoodPrice(getPriceForDate(date)) }">
													{{ getPriceForDate(date) | currency: 'USD' : 'symbol' : '1.0-0' }}
												</span>
											}
										</span>
									</button>
								</td>
							}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<p class="text-muted-foreground mt-4 text-center text-xs">Pricing Calendar</p>
	`,
})
export class Calendar19Component {
	public readonly calendarClass = input<ClassValue>('');

	protected readonly _computedCalenderClass = computed(() => hlm('rounded-md border p-3', this.calendarClass()));

	/** Access the calendar i18n */
	protected readonly _i18n = injectBrnCalendarI18n();

	/** Access the date time adapter */
	protected readonly _dateAdapter = injectDateAdapter<Date>();

	/** The minimum date that can be selected.*/
	public readonly min = input<Date>();

	/** The maximum date that can be selected. */
	public readonly max = input<Date>();

	/** Show dropdowns to navigate between months or years. */
	public readonly captionLayout = input<'dropdown' | 'label' | 'dropdown-months' | 'dropdown-years'>('label');

	/** Determine if the date picker is disabled. */
	public readonly disabled = input<boolean, BooleanInput>(false, {
		transform: booleanAttribute,
	});

	/** The selected value. */
	public readonly date = model<Date>(addMonths(new Date(), 1));

	/** Whether a specific date is disabled. */
	public readonly dateDisabled = input<(date: Date) => boolean>(() => false);

	/** The day the week starts on */
	public readonly weekStartsOn = input<Weekday, NumberInput>(undefined, {
		transform: (v: unknown) => numberAttribute(v) as Weekday,
	});

	/** The default focused date. */
	public readonly defaultFocusedDate = input<Date>();

	/** Access the calendar directive */
	private readonly _calendar = viewChild.required(BrnCalendar);

	/** Get the heading for the current month and year */
	protected readonly _heading = computed(() => {
		const config = this._i18n.config();
		const date = this._calendar().focusedDate();

		return {
			header: config.formatHeader(this._dateAdapter.getMonth(date), this._dateAdapter.getYear(date)),
			month: config.formatMonth(this._dateAdapter.getMonth(date)),
			year: config.formatYear(this._dateAdapter.getYear(date)),
		};
	});

	protected readonly _btnClass = hlm(
		buttonVariants({ variant: 'ghost' }),
		'size-12 p-0 font-normal aria-selected:opacity-100',
		'data-[outside]:text-muted-foreground data-[outside]:aria-selected:bg-accent/50 data-[outside]:aria-selected:text-muted-foreground data-[outside]:opacity-50 data-[outside]:aria-selected:opacity-30',
		'data-[today]:bg-accent data-[today]:text-accent-foreground',
		'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary dark:hover:text-accent-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
		'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
		'dark:hover:text-accent-foreground',
	);

	protected readonly _selectClass = 'gap-0 px-1.5 py-2 [&>ng-icon]:ml-1';

	protected generateMockPriceData(): Record<string, number> {
		const data: Record<string, number> = {};
		const todayDate = new Date();

		for (let i = 0; i < 180; i++) {
			const date = new Date(todayDate);
			date.setDate(todayDate.getDate() + i);
			const dateKey = format(date, 'yyyy-MM-dd');
			const randomPrice = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
			data[dateKey] = randomPrice;
		}
		return data;
	}

	protected generatedMockPrice = this.generateMockPriceData();

	protected getPriceForDate(date: Date): number {
		const dateKey = format(date, 'yyyy-MM-dd');
		return this.generatedMockPrice[dateKey];
	}

	protected isGoodPrice(price: number): boolean {
		return price < 120;
	}
}
