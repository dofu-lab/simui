import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import {
	addDays,
	addMinutes,
	differenceInMinutes,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameMonth,
	isToday,
	startOfMonth,
	startOfWeek,
} from 'date-fns';
import {
	buildDayBuckets,
	CalendarDayBucket,
	getDayKey,
	isInteractiveCalendarTarget,
	normalizeCalendarEvents,
} from './calendar-view-model';
import { EventItemComponent } from './event-item.component';
import { CalendarEvent, EventDuration } from './type';
import { getDateFromContainerId } from './utils';

@Component({
	selector: 'sim-month-view-calendar',
	imports: [DatePipe, NgClass, EventItemComponent, CdkDrag, CdkDropList, CdkDropListGroup, HlmPopoverImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="contents">
			<div class="border-border/70 grid grid-cols-7 border-b">
				@for (weekday of weekdays(); track weekday; let i = $index) {
					<div key="{day}" class="text-muted-foreground/70 py-2 text-center text-sm">
						{{ weekday }}
					</div>
				}
			</div>
			<div class="grid flex-1 auto-rows-fr" cdkDropListGroup>
				@for (week of weeks(); track week[0].key) {
					<div class="grid grid-cols-7 [&:last-child>*]:border-b-0">
						@for (dayBucket of week; track dayBucket.key) {
							<div
								class="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0"
								[attr.data-today]="isToday(dayBucket.date) || undefined"
								[attr.data-outside-cell]="!isSameMonth(dayBucket.date) || undefined">
								<div
									class="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 ml-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
									{{ dayBucket.date | date: 'd' }}
								</div>
								<!-- TODO: cofig constant -->
								<div
									cdkDropList
									[id]="'day-' + dayBucket.key"
									[cdkDropListData]="dayBucket.events"
									[cdkDropListConnectedTo]="allDropListIds()"
									(cdkDropListDropped)="drop($event)"
									(click)="handleDayClick($event, dayBucket.date)"
									class="min-h-[calc((24+4)*2px)] sm:min-h-[calc((24+4)*3px)] lg:min-h-[calc((24+4)*4px)]">
									@for (eventView of dayBucket.visibleEvents; track eventView.event.id) {
										<div
											cdkDrag
											[cdkDragData]="eventView.event"
											[cdkDragDisabled]="!eventView.isFirstDay"
											class="pt-1"
											[ngClass]="{
												'pr-1': eventView.isLastDay,
												'pl-1': eventView.isFirstDay,
												'z-20': eventView.isFirstDay,
												'opacity-75': !eventView.isFirstDay,
											}"
											(click)="$event.stopPropagation()"
											[attr.aria-label]="
												eventView.isFirstDay
													? 'Drag to move event: ' + eventView.event.title
													: 'Event continuation: ' + eventView.event.title
											"
											role="button"
											[attr.tabindex]="eventView.isFirstDay ? 0 : -1">
											@if (!eventView.isFirstDay) {
												<sim-event-item
													[event]="eventView.event"
													view="month"
													[isFirstDay]="eventView.isFirstDay"
													[isLastDay]="eventView.isLastDay"
													(click)="editEvent(eventView.event)">
													<div class="invisible truncate" aria-hidden="true">
														{{ eventView.event.title }}
													</div>
												</sim-event-item>
											} @else {
												<sim-event-item
													[event]="eventView.event"
													view="month"
													[isFirstDay]="eventView.isFirstDay"
													[isLastDay]="eventView.isLastDay"
													(click)="editEvent(eventView.event)"></sim-event-item>
											}
										</div>
									}
									@if (dayBucket.hasMoreEvents) {
										<hlm-popover sideOffset="5">
											<!-- Todo: Make this configurable -->
											<!-- class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 mt-[var(--event-gap)] flex h-[var(--event-height)] w-full items-center overflow-hidden px-1 text-left text-[10px] backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] sm:px-2 sm:text-xs"> -->
											<div class="z-10 px-1" (click)="$event.stopPropagation()">
												<button
													id="edit-profile"
													variant="outline"
													hlmPopoverTrigger
													class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 mt-1 flex h-6 w-full items-center overflow-hidden rounded-sm px-1 text-left text-[10px] backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] sm:px-2 sm:text-xs">
													+ {{ dayBucket.remainingCount }} more
												</button>
											</div>
											<div hlmPopoverContent class="grid w-48 gap-1 p-3" *hlmPopoverPortal="let ctx">
												<span class="text-sm font-medium">{{ dayBucket.date | date: 'EEE dd' }}</span>
												<div class="grid gap-1">
													@for (eventView of dayBucket.eventViews; track eventView.event.id) {
														<sim-event-item
															view="month"
															class="rounded-sm"
															[event]="eventView.event"
															[isFirstDay]="eventView.isFirstDay"
															[isLastDay]="eventView.isLastDay"></sim-event-item>
													}
												</div>
											</div>
										</hlm-popover>
									}
								</div>
							</div>
						}
					</div>
				}
			</div>
		</div>
	`,
})
export class MonthViewCalendarComponent {
	public readonly currentDate = input.required<Date>();
	public readonly events = input.required<CalendarEvent[]>();
	private readonly visibleCount = 3; // TODO: calculate based on height

	public readonly onEventUpdated = output<CalendarEvent>();
	public readonly onEventSelect = output<CalendarEvent>();
	public readonly onEventCreate = output<EventDuration>();

	private readonly days = computed(() => {
		const monthStart = startOfMonth(this.currentDate());
		const monthEnd = endOfMonth(this.currentDate());
		const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
		const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
		return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
	});
	protected readonly weekdays = computed(() => {
		return Array.from({ length: 7 }).map((_, i) => {
			const date = addDays(startOfWeek(new Date()), i);
			return format(date, 'EEE');
		});
	});
	private readonly normalizedEvents = computed(() => normalizeCalendarEvents(this.events()));
	private readonly dayBuckets = computed(() =>
		buildDayBuckets(this.days(), this.normalizedEvents(), this.visibleCount),
	);
	protected readonly allDropListIds = computed(() => this.days().map((day) => 'day-' + getDayKey(day)));
	protected readonly weeks = computed(() => {
		const result: CalendarDayBucket[][] = [];
		let week: CalendarDayBucket[] = [];

		for (let i = 0; i < this.days().length; i++) {
			const day = this.days()[i];
			const bucket = this.dayBuckets().get(getDayKey(day));
			if (bucket) {
				week.push(bucket);
			}
			if (week.length === 7 || i === this.days().length - 1) {
				result.push(week);
				week = [];
			}
		}

		return result;
	});

	/**
	 * Handle click on day container, but prevent triggering when clicking on child elements
	 */
	protected handleDayClick(event: MouseEvent, day: Date): void {
		if (isInteractiveCalendarTarget(event)) {
			return;
		}

		this.onEventCreate.emit({
			startDate: new Date(day),
		});
	}

	protected readonly isToday = isToday;
	protected isSameMonth(day: Date): boolean {
		return isSameMonth(day, this.currentDate());
	}

	protected drop(event: CdkDragDrop<CalendarEvent[]>): void {
		if (event.previousContainer === event.container) {
			return;
		} else {
			// Moving between different days
			const movedEvent = event.previousContainer.data?.[event.previousIndex];
			if (!movedEvent) {
				console.error('No event found at the specified index');
				return;
			}

			try {
				const originalStartDate = new Date(movedEvent.start);
				const originalEndDate = new Date(movedEvent.end);
				const durationMinutes = differenceInMinutes(originalEndDate, originalStartDate);

				const newStartDate = getDateFromContainerId(event.container.id);
				if (!newStartDate) {
					console.error('Invalid container ID or unable to parse date');
					return;
				}

				// Preserve the original time when moving to a new day
				newStartDate.setHours(
					originalStartDate.getHours(),
					originalStartDate.getMinutes(),
					originalStartDate.getSeconds(),
					originalStartDate.getMilliseconds(),
				);

				const newEndDate = addMinutes(newStartDate, durationMinutes);
				const updatedEvent: CalendarEvent = {
					...movedEvent,
					start: newStartDate,
					end: newEndDate,
				};
				// Emit the updated event for external handling (like saving to backend)
				this.onEventUpdated.emit(updatedEvent);
			} catch (error) {
				console.error('Error updating event during drag and drop:', error);
				// Optionally revert the UI changes here if needed
			}
		}
	}

	protected editEvent(event: CalendarEvent): void {
		this.onEventSelect.emit(event);
	}
}
