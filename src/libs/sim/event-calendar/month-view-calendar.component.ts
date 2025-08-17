import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
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
									[cdkDropListConnectedTo]="getAllDropListIds()"
									(cdkDropListDropped)="drop($event)"
									(click)="handleDayClick($event, day)"
									class="min-h-[calc((24+4)*2px)] sm:min-h-[calc((24+4)*3px)] lg:min-h-[calc((24+4)*4px)]">
									@for (event of getDayEvents(day); track event.id; let index = $index) {
										@if (index < visibleCount) {
											<div
												cdkDrag
												[cdkDragData]="event"
												[cdkDragDisabled]="!isFirstDay(event, day)"
												class="pt-1"
												[ngClass]="{
													'pr-1': isLastDay(event, day),
													'pl-1': isFirstDay(event, day),
													'z-20': isFirstDay(event, day),
													'opacity-75': !isFirstDay(event, day),
												}"
												(click)="$event.stopPropagation()"
												[attr.aria-label]="
													isFirstDay(event, day)
														? 'Drag to move event: ' + event.title
														: 'Event continuation: ' + event.title
												"
												role="button"
												[attr.tabindex]="isFirstDay(event, day) ? 0 : -1">
												@if (!isFirstDay(event, day)) {
													<sim-event-item
														[event]="event"
														view="month"
														[isFirstDay]="isFirstDay(event, day)"
														[isLastDay]="isLastDay(event, day)"
														(click)="editEvent(event)">
														<div class="invisible" aria-hidden="true">
															@if (!event.allDay) {
																<span>{{ event.start | date: 'h:mm' }}</span>
															}
															{{ event.title }}
														</div>
													</sim-event-item>
												} @else {
													<sim-event-item
														[event]="event"
														view="month"
														[isFirstDay]="isFirstDay(event, day)"
														[isLastDay]="isLastDay(event, day)"
														(click)="editEvent(event)"></sim-event-item>
												}
											</div>
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

	// TrackBy functions for better performance
	trackByDate = (index: number, date: Date) => date.getTime();
	trackByEventId = (index: number, event: CalendarEvent) => event.id;

	// Memoized events by day for better performance
	eventsByDay = computed(() => {
		const eventMap = new Map<string, CalendarEvent[]>();

		this.days().forEach((day) => {
			const dayKey = format(day, 'yyyy-MM-dd');
			const dayEvents = getEventsForDay(this.events(), day);
			const spanningEvents = getSpanningEventsForDay(this.events(), day);
			eventMap.set(dayKey, sortEvents([...spanningEvents, ...dayEvents]));
		});

		return eventMap;
	});

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
			startDate: new Date(day),
		});
	}

	isToday = isToday;
	public isSameMonth(day: Date): boolean {
		return isSameMonth(day, this.currentDate());
	}

	public getDayEvents(day: Date): CalendarEvent[] {
		const dayKey = format(day, 'yyyy-MM-dd');
		return this.eventsByDay().get(dayKey) || [];
	}

	public getAllDropListIds(): string[] {
		return this.days().map((day) => 'day-' + format(day, 'yyyy-MM-dd'));
	}

	public isFirstDay(event: CalendarEvent, day: Date): boolean {
		return isSameDay(day, new Date(event.start));
	}

	public isLastDay(event: CalendarEvent, day: Date): boolean {
		return isSameDay(day, new Date(event.end));
	}

	public hasMoreEvents(day: Date): boolean {
		const allEvents = this.getDayEvents(day);
		//TODO: Make this configurable
		return allEvents.length > this.visibleCount;
	}

	public remainingCount(day: Date): number {
		const allEvents = this.getDayEvents(day);
		return Math.max(0, allEvents.length - this.visibleCount);
	}

	public drop(event: CdkDragDrop<CalendarEvent[]>) {
		if (event.previousContainer === event.container) {
			// Reordering within the same day - this should be rare for calendar events
			// but we'll handle it for completeness
			if (event.container.data && event.previousIndex !== event.currentIndex) {
				moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
				// Note: For calendar events, reordering within a day typically doesn't change
				// the event data, just the display order. You might want to emit an event
				// here if your business logic requires tracking display order.
			}
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

				// Update the data arrays to reflect the move
				// Remove from previous container
				event.previousContainer.data.splice(event.previousIndex, 1);

				// Add to new container at the correct position
				event.container.data.splice(event.currentIndex, 0, updatedEvent);

				// Emit the updated event for external handling (like saving to backend)
				this.onEventUpdated.emit(updatedEvent);
			} catch (error) {
				console.error('Error updating event during drag and drop:', error);
				// Optionally revert the UI changes here if needed
			}
		}
	}

	public editEvent(event: CalendarEvent): void {
		this.onEventSelect.emit(event);
	}
}
