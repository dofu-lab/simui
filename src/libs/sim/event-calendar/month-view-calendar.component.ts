import { HlmPopoverContentDirective } from '@/libs/ui/ui-popover-helm/src';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import {
	addDays,
	addMinutes,
	differenceInMinutes,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameDay,
	isSameMonth,
	isToday,
	startOfMonth,
	startOfWeek,
} from 'date-fns';
import { EventItemComponent } from './event-item.component';
import { CalendarEvent, EventDuration } from './type';
import { getDateFromContainerId, getEventsForDay, getSpanningEventsForDay, sortEvents } from './utils';

@Component({
	selector: 'sim-month-view-calendar',
	imports: [
		DatePipe,
		NgClass,
		EventItemComponent,
		BrnPopoverComponent,
		BrnPopoverContentDirective,
		BrnPopoverTriggerDirective,
		HlmPopoverContentDirective,
		CdkDrag,
		CdkDropList,
		CdkDropListGroup,
	],
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
				@for (week of weeks(); track week) {
					<div class="grid grid-cols-7 [&:last-child>*]:border-b-0">
						@for (day of week; track day) {
							<div
								class="group border-border/70 data-outside-cell:bg-muted/25 data-outside-cell:text-muted-foreground/70 border-r border-b last:border-r-0"
								[attr.data-today]="isToday(day) || undefined"
								[attr.data-outside-cell]="!isSameMonth(day) || undefined">
								<div
									class="group-data-today:bg-primary group-data-today:text-primary-foreground mt-1 ml-1 inline-flex size-6 items-center justify-center rounded-full text-sm">
									{{ day | date: 'd' }}
								</div>
								<!-- TODO: cofig constant -->
								<div
									cdkDropList
									[id]="'day-' + (day | date: 'yyyy-MM-dd')"
									[cdkDropListData]="getDayEvents(day)"
									(cdkDropListDropped)="drop($event)"
									(click)="handleDayClick($event, day)"
									class="min-h-[calc((24+4)*2px)] sm:min-h-[calc((24+4)*3px)] lg:min-h-[calc((24+4)*4px)]">
									@for (event of getDayEvents(day); track event.id; let index = $index) {
										@if (index < visibleCount) {
											@if (!isFirstDay(event, day)) {
												<div
													class="aria-hidden:label pt-1"
													[ngClass]="{ 'pr-1': isLastDay(event, day) }"
													(click)="$event.stopPropagation()">
													<sim-event-item
														[event]="event"
														view="month"
														[isFirstDay]="false"
														[isLastDay]="isLastDay(event, day)"
														(click)="onEventSelect.emit(event)">
														<div class="invisible" aria-hidden="{true}">
															@if (!event.allDay) {
																<span>{{ event.start | date: 'h:mm' }}</span>
															}
															{{ event.title }}
														</div>
													</sim-event-item>
												</div>
											} @else {
												<div
													cdkDrag
													class="z-20 pt-1 pl-1"
													[ngClass]="{ 'pr-1': isFirstDay(event, day) && isLastDay(event, day) }"
													(click)="$event.stopPropagation()">
													<sim-event-item
														[event]="event"
														view="month"
														[isFirstDay]="isFirstDay(event, day)"
														[isLastDay]="isLastDay(event, day)"
														(click)="onEventSelect.emit(event)"></sim-event-item>
												</div>
											}
										}
									}
									@if (hasMoreEvents(day)) {
										<brn-popover sideOffset="5">
											<!-- Todo: Make this configurable -->
											<!-- class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 mt-[var(--event-gap)] flex h-[var(--event-height)] w-full items-center overflow-hidden px-1 text-left text-[10px] backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] sm:px-2 sm:text-xs"> -->
											<div class="z-10 px-1" (click)="$event.stopPropagation()">
												<button
													id="edit-profile"
													variant="outline"
													brnPopoverTrigger
													class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 mt-1 flex h-6 w-full items-center overflow-hidden rounded-sm px-1 text-left text-[10px] backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] sm:px-2 sm:text-xs">
													+ {{ remainingCount(day) }} more
												</button>
											</div>
											<div hlmPopoverContent class="grid w-48 gap-1 p-3" *brnPopoverContent="let ctx">
												<span class="text-sm font-medium">{{ day | date: 'EEE dd' }}</span>
												<div class="grid gap-1">
													@for (event of getDayEvents(day); track event.id; let index = $index) {
														<sim-event-item
															view="month"
															class="rounded-sm"
															[event]="event"
															[isFirstDay]="isFirstDay(event, day)"
															[isLastDay]="isLastDay(event, day)"></sim-event-item>
													}
												</div>
											</div>
										</brn-popover>
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
	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();
	sortedEvents = computed(() => sortEvents(this.events()));
	visibleCount = 3; // TODO: calculate based on height

	onEventUpdated = output<CalendarEvent>();
	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<EventDuration>();

	days = computed(() => {
		const monthStart = startOfMonth(this.currentDate());
		const monthEnd = endOfMonth(this.currentDate());
		const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
		const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
		return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
	});
	weekdays = computed(() => {
		return Array.from({ length: 7 }).map((_, i) => {
			const date = addDays(startOfWeek(new Date()), i);
			return format(date, 'EEE');
		});
	});
	weeks = computed(() => {
		const result = [];
		let week = [];

		for (let i = 0; i < this.days().length; i++) {
			week.push(this.days()[i]);
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
	handleDayClick(event: MouseEvent, day: Date): void {
		// Check if the click target is the day container itself or just an empty area
		const target = event.target as HTMLElement;
		const currentTarget = event.currentTarget as HTMLElement;

		// If the target is not the current target and it's not a direct child with no interactive content,
		// then it's likely an event or other interactive element, so don't create a new event
		if (target !== currentTarget) {
			// Check if the clicked element or its parents have event-related classes or data attributes
			let element = target;
			while (element && element !== currentTarget) {
				// If we find an event item, popover trigger, or other interactive element, don't create event
				if (
					element.tagName === 'BUTTON' ||
					element.hasAttribute('cdkDrag') ||
					element.hasAttribute('brnPopoverTrigger') ||
					element.closest('sim-event-item') ||
					element.closest('brn-popover')
				) {
					return;
				}
				element = element.parentElement as HTMLElement;
			}
		}

		// Only emit the event creation if we clicked on empty space
		this.onEventCreate.emit({
			startDate: new Date(day)
		});
	}

	isToday = isToday;
	isSameMonth(day: Date) {
		return isSameMonth(day, this.currentDate());
	}

	getDayEvents(day: Date): CalendarEvent[] {
		const dayEvents = getEventsForDay(this.events(), day);
		const spanningEvents = getSpanningEventsForDay(this.events(), day);
		return sortEvents([...spanningEvents, ...dayEvents]);
	}

	isFirstDay(event: CalendarEvent, day: Date): boolean {
		return isSameDay(day, new Date(event.start));
	}

	isLastDay(event: CalendarEvent, day: Date): boolean {
		return isSameDay(day, new Date(event.end));
	}

	hasMoreEvents(day: Date): boolean {
		const allEvents = this.getDayEvents(day);
		//TODO: Make this configurable
		return allEvents.length > this.visibleCount;
	}

	remainingCount(day: Date): number {
		const allEvents = this.getDayEvents(day);
		return Math.max(0, allEvents.length - this.visibleCount);
	}

	drop(event: CdkDragDrop<any>) {
		if (event.previousContainer === event.container) {
			console.log('Moving item within the same list');
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			const movedEvent = event.previousContainer.data[event.previousIndex] as CalendarEvent;
			console.log('moved event', movedEvent);

			const originalStartDate = new Date(movedEvent.start);
			const originalEndDate = new Date(movedEvent.end);
			const durationMinutes = differenceInMinutes(originalEndDate, originalStartDate);

			const newStartDate = getDateFromContainerId(event.container.id);

			console.log('newStartDate', newStartDate);
			if (newStartDate && movedEvent) {
				newStartDate.setHours(
					originalStartDate.getHours(),
					originalStartDate.getMinutes(),
					originalStartDate.getSeconds(),
					originalStartDate.getMilliseconds(),
				);
				const newEndDate = addMinutes(newStartDate, durationMinutes);
				const updatedEvent = { ...movedEvent, start: newStartDate, end: newEndDate };
				this.onEventUpdated.emit(updatedEvent);
			}
		}
	}
}
