import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { hlm } from '@spartan-ng/brain/core';
import {
	addHours,
	addMinutes,
	areIntervalsOverlapping,
	differenceInMinutes,
	eachDayOfInterval,
	eachHourOfInterval,
	endOfWeek,
	getHours,
	getMinutes,
	isSameDay,
	isToday,
	startOfDay,
	startOfWeek,
} from 'date-fns';
import { EndHour, StartHour, WeekCellsHeight } from './constants';
import { CurrentTimeIndicatorService } from './current-time-indicator.service';
import { EventItemComponent } from './event-item.component';
import { CalendarEvent, EventDuration, PositionedEvent } from './type';
import { getDateFromContainerId, isMultiDayEvent } from './utils';

@Component({
	selector: 'sim-day-view-calendar',
	imports: [NgClass, DatePipe, EventItemComponent, CdkDropListGroup, CdkDropList, CdkDrag],
	providers: [CurrentTimeIndicatorService],
	template: `
		<div data-slot="day-view" class="border-border/70 flex h-full flex-col border-t">
			@if (showAllDaySection()) {
				<div class="border-border/70 bg-muted/50 grid grid-cols-[64px_auto] border-b">
					<div class="border-border/70 relative flex w-[64px] items-center justify-end border-r">
						<span
							class="text-muted-foreground/70 flex h-6 w-16 max-w-full items-center justify-center text-[10px] sm:text-xs">
							All day
						</span>
					</div>
					<div class="grid auto-cols-fr grid-flow-row">
						@for (event of allDayEvents(); track event.id + '-all-day-event-item'; let dayIndex = $index) {
							<div class="border-border/70 relative flex flex-col gap-1 border-r py-1 last:border-r-0">
								<div class="" [ngClass]="{ 'pl-1': isFirstDay(event), 'pr-1': isLastDay(event) }">
									<sim-event-item
										view="month"
										[event]="event"
										[isFirstDay]="isFirstDay(event)"
										[isLastDay]="isLastDay(event)">
										<div class="truncate">
											{{ event.title }}
										</div>
									</sim-event-item>
								</div>
							</div>
						}
					</div>
				</div>
			}

			<div cdkDropListGroup class="grid flex-1 grid-cols-[64px_auto] overflow-hidden">
				<div class="border-border/70 grid auto-cols-fr border-r">
					@for (hour of hours(); track hour.toString(); let index = $index) {
						<div class="border-border/70 relative h-[64px] border-b last:border-b-0">
							@if (index > 0) {
								<span
									class="bg-background text-muted-foreground/70 absolute -top-3 left-0 flex h-6 w-16 max-w-full items-center justify-end pe-2 text-[10px] sm:pe-4 sm:text-xs">
									{{ hour | date: 'h a' }}
								</span>
							}
						</div>
					}
				</div>

				<div class="border-border/70 relative grid auto-cols-fr border-r last:border-r-0">
					@if (currentTimeIndicator()?.currentTimeVisible) {
						<div
							class="pointer-events-none absolute right-0 left-0 z-20"
							[style]="{ top: currentTimeIndicator()?.currentTimePosition + '%' }">
							<div class="relative flex items-center">
								@if (isToday()) {
									<div class="bg-primary absolute -left-1 h-2 w-2 rounded-full"></div>
									<div class="bg-primary h-[2px] w-full"></div>
								} @else {
									<div class="border-primary mx-[1px] w-full border-t-[2px] border-dashed"></div>
								}
							</div>
						</div>
					}

					@for (hour of hours(); track hour.toString()) {
						<div class="border-border/70 relative h-[64px] border-b last:border-b-0">
							@for (quarter of [0, 1, 2, 3]; track quarter) {
								<div
									cdkDropList
									class="hover:bg-muted/60"
									[id]="'day-' + getQuarterTime(hour, quarter)"
									[class]="generateCellClass(quarter)"
									[cdkDropListData]="getProcessedEventsForDay(hour, quarter)"
									(cdkDropListDropped)="drop($event)"
									(click)="handleDayClick($event, hour, quarter)">
									@for (positionedEvent of getProcessedEventsForDay(hour, quarter); track positionedEvent.event.id) {
										<div
											cdkDrag
											[cdkDragData]="positionedEvent.event"
											class="absolute z-20 px-0.5"
											[style]="{
												height: positionedEvent.height + 'px',
												left: positionedEvent.left * 100 + '%',
												width: positionedEvent.width * 100 + '%',
												'z-index': positionedEvent.zIndex.toString(),
											}">
											<sim-event-item
												[event]="positionedEvent.event"
												view="week"
												[height]="positionedEvent.height"
												[isFirstDay]="true"
												[isLastDay]="true"></sim-event-item>
										</div>
									}
								</div>
							}
						</div>
					}
				</div>
			</div>
		</div>
	`,
})
export class DayViewCalendarComponent {
	private _currentTimeIndicatorService = inject(CurrentTimeIndicatorService);

	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();

	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<EventDuration>();
	onEventUpdated = output<CalendarEvent>();

	currentTimeIndicator = toSignal(this._currentTimeIndicatorService.getCurrentTimeIndicator());
	isToday = computed(() => isToday(this.currentDate()));
	days = computed(() => {
		const weekStart = startOfWeek(this.currentDate());
		const weekEnd = endOfWeek(this.currentDate());
		return eachDayOfInterval({ start: weekStart, end: weekEnd });
	});
	hours = computed(() => {
		const dayStart = startOfDay(this.currentDate());
		return eachHourOfInterval({
			start: addHours(dayStart, StartHour),
			end: addHours(dayStart, EndHour - 1),
		});
	});
	dayEvents = computed(() => {
		return this.events()
			.filter((event) => {
				const eventStart = new Date(event.start);
				const eventEnd = new Date(event.end);
				return (
					isSameDay(this.currentDate(), eventStart) ||
					isSameDay(this.currentDate(), eventEnd) ||
					(this.currentDate() > eventStart && this.currentDate() < eventEnd)
				);
			})
			.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
	});
	allDayEvents = computed(() => {
		return this.dayEvents().filter((event) => {
			return event.allDay || isMultiDayEvent(event);
		});
	});
	showAllDaySection = computed(() => this.allDayEvents().length > 0);
	processedDayEvents = computed(() => {
		// Get events for this day that are not all-day events or multi-day events
		const dayEvents = this.events().filter((event) => {
			// Skip all-day events and multi-day events
			if (event.allDay || isMultiDayEvent(event)) return false;

			const eventStart = new Date(event.start);
			const eventEnd = new Date(event.end);

			// Check if event is on this day
			return (
				isSameDay(this.currentDate(), eventStart) ||
				isSameDay(this.currentDate(), eventEnd) ||
				(eventStart < this.currentDate() && eventEnd > this.currentDate())
			);
		});

		// Sort events by start time and duration
		const sortedEvents = [...dayEvents].sort((a, b) => {
			const aStart = new Date(a.start);
			const bStart = new Date(b.start);
			const aEnd = new Date(a.end);
			const bEnd = new Date(b.end);

			// First sort by start time
			if (aStart < bStart) return -1;
			if (aStart > bStart) return 1;

			// If start times are equal, sort by duration (longer events first)
			const aDuration = differenceInMinutes(aEnd, aStart);
			const bDuration = differenceInMinutes(bEnd, bStart);
			return bDuration - aDuration;
		});

		// Calculate positions for each event
		const positionedEvents: PositionedEvent[] = [];
		const dayStart = startOfDay(this.currentDate());

		// Track columns for overlapping events
		const columns: { event: CalendarEvent; end: Date }[][] = [];

		sortedEvents.forEach((event) => {
			const eventStart = new Date(event.start);
			const eventEnd = new Date(event.end);

			// Adjust start and end times if they're outside this day
			const adjustedStart = isSameDay(this.currentDate(), eventStart) ? eventStart : dayStart;
			const adjustedEnd = isSameDay(this.currentDate(), eventEnd) ? eventEnd : addHours(dayStart, 24);

			// Calculate top position and height
			const startHour = getHours(adjustedStart) + getMinutes(adjustedStart) / 60;
			const endHour = getHours(adjustedEnd) + getMinutes(adjustedEnd) / 60;

			// Adjust the top calculation to account for the new start time
			const top = (startHour - StartHour) * WeekCellsHeight;
			const height = (endHour - startHour) * WeekCellsHeight;

			// Find a column for this event
			let columnIndex = 0;
			let placed = false;

			while (!placed) {
				const col = columns[columnIndex] || [];
				if (col.length === 0) {
					columns[columnIndex] = col;
					placed = true;
				} else {
					const overlaps = col.some((c) =>
						areIntervalsOverlapping(
							{ start: adjustedStart, end: adjustedEnd },
							{
								start: new Date(c.event.start),
								end: new Date(c.event.end),
							},
						),
					);
					if (!overlaps) {
						placed = true;
					} else {
						columnIndex++;
					}
				}
			}

			// Ensure column is initialized before pushing
			const currentColumn = columns[columnIndex] || [];
			columns[columnIndex] = currentColumn;
			currentColumn.push({ event, end: adjustedEnd });

			// Calculate width and left position based on number of columns
			const width = columnIndex === 0 ? 1 : 0.9;
			const left = columnIndex === 0 ? 0 : columnIndex * 0.1;

			// Calculate hour and quarter for positioning
			const startHourFloor = Math.floor(startHour);
			const startMinutes = getMinutes(adjustedStart);
			const startQuarter = Math.floor(startMinutes / 15); // 0, 1, 2, or 3

			const endHourFloor = Math.floor(endHour);
			const endMinutes = getMinutes(adjustedEnd);
			const endQuarter = Math.floor(endMinutes / 15); // 0, 1, 2, or 3

			positionedEvents.push({
				event,
				top,
				height,
				left,
				width,
				zIndex: 10 + columnIndex, // Higher columns get higher z-index
				startHour: startHourFloor,
				startQuarter,
				endHour: endHourFloor,
				endQuarter,
			});
		});

		return positionedEvents;
	});
	getQuarterTime(hour: Date, quarter: number): string {
		const currentDate = startOfDay(this.currentDate());

		return addMinutes(currentDate, getHours(hour) * 60 + quarter * 15).toString();
	}

	formattedTime(time: number | undefined) {
		return time !== undefined
			? `${Math.floor(time)}:${Math.round((time - Math.floor(time)) * 60)
					.toString()
					.padStart(2, '0')}`
			: null;
	}

	generateCellClass(quarter: number): string {
		// 64px
		// need config
		return hlm(
			'data-dragging:bg-accent flex h-full flex-col overflow-hidden',
			'"absolute h-[calc(64px/4)] w-full',
			quarter === 0 && 'top-0',
			quarter === 1 && 'top-[calc(64px/4)]',
			quarter === 2 && 'top-[calc(64px/4*2)]',
			quarter === 3 && 'top-[calc(64px/4*3)]',
		);
	}

	getProcessedEventsForDay(hour: Date, quarter: number): PositionedEvent[] {
		// Filter events based on the hour and quarter
		return this.processedDayEvents().filter(
			(event) => event.startHour === hour.getHours() && event.startQuarter === quarter,
		);
	}

	drop(event: CdkDragDrop<any>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			const movedEvent = event.previousContainer.data[event.previousIndex].event as CalendarEvent;

			const originalStartDate = new Date(movedEvent.start);
			const originalEndDate = new Date(movedEvent.end);
			const durationMinutes = differenceInMinutes(originalEndDate, originalStartDate);

			const newStartDate = getDateFromContainerId(event.container.id);
			console.log('newStartDate', newStartDate);

			if (newStartDate && movedEvent) {
				const newEndDate = addMinutes(newStartDate, durationMinutes);
				const updatedEvent = { ...movedEvent, start: newStartDate, end: newEndDate };
				this.onEventUpdated.emit(updatedEvent);
			}
		}
	}

	isFirstDay(event: CalendarEvent): boolean {
		return isSameDay(this.currentDate(), new Date(event.start));
	}

	isLastDay(event: CalendarEvent): boolean {
		return isSameDay(this.currentDate(), new Date(event.end));
	}

	/**
	 * Handle click on day container, but prevent triggering when clicking on child elements
	 */
	handleDayClick(event: MouseEvent, hour: Date, quarter: number): void {
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
		console.log('Creating new event for day:');
		const newStartDay = new Date(this.getQuarterTime(hour, quarter));
		const newEndDay = addMinutes(newStartDay, 15);
		this.onEventCreate.emit({
			startDate: newStartDay,
			endDate: newEndDay,
		});
	}
}
