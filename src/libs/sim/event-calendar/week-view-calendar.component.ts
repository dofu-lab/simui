import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { hlm } from '@spartan-ng/brain/core';
import {
	addHours,
	addMinutes,
	differenceInMinutes,
	eachDayOfInterval,
	eachHourOfInterval,
	endOfWeek,
	isBefore,
	isSameDay,
	isToday,
	startOfDay,
	startOfWeek,
} from 'date-fns';
import { EndHour, StartHour } from './constants';
import { EventItemComponent } from './event-item.component';
import { CalendarDateService, CurrentTimeIndicatorService, EventPositioningService } from './services';
import { CalendarEvent, EventDuration, PositionedEvent } from './type';
import { getDateFromContainerId, isMultiDayEvent } from './utils';

@Component({
	selector: 'sim-week-view-calendar',
	imports: [NgClass, DatePipe, EventItemComponent, CdkDropListGroup, CdkDropList, CdkDrag],
	providers: [CurrentTimeIndicatorService, CalendarDateService, EventPositioningService],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div data-slot="week-view" class="flex h-full flex-col">
			<div class="bg-background/80 border-border/70 sticky top-0 z-30 grid grid-cols-8 border-b backdrop-blur-md">
				<div class="text-muted-foreground/70 py-2 text-center text-sm">
					<span class="max-[479px]:sr-only">{{ today | date: 'O' }}</span>
				</div>
				@for (day of days(); track day.toString()) {
					<div
						class="data-today:text-foreground text-muted-foreground/70 py-2 text-center text-sm data-today:font-medium"
						[attr.data-today]="isToday(day) || undefined">
						<span class="sm:hidden">{{ day | date: 'E' }} {{ day | date: 'd' }}</span>
						<span class="max-sm:hidden">{{ day | date: 'EEE dd' }}</span>
					</div>
				}
			</div>

			@if (shouldShowAllDaySection()) {
				<div class="border-border/70 bg-muted/50 border-b">
					<div class="grid grid-cols-8">
						<div class="border-border/70 relative border-r">
							<span
								class="text-muted-foreground/70 absolute bottom-0 left-0 h-6 w-16 max-w-full pe-2 text-right text-[10px] sm:pe-4 sm:text-xs">
								All day
							</span>
						</div>
						@for (day of days(); track day.toString() + '-all-day'; let dayIndex = $index) {
							<div
								class="border-border/70 relative flex flex-col gap-1 border-r py-1 last:border-r-0"
								[attr.data-today]="isToday(day) || undefined">
								@for (event of getDayAllDayEvents(day); track event.id + '-all-day-event-item') {
									<div [ngClass]="{ 'pl-1': isFirstDay(event, day), 'pr-1': isLastDay(event, day) }">
										<sim-event-item
											view="month"
											[event]="event"
											[isFirstDay]="isFirstDay(event, day)"
											[isLastDay]="isLastDay(event, day)">
											@if (shouldShowTitle(day, event, dayIndex)) {
												<div class="truncate">
													{{ event.title }}
												</div>
											}
										</sim-event-item>
									</div>
								}
							</div>
						}
					</div>
				</div>
			}

			<div cdkDropListGroup class="grid flex-1 grid-cols-8 overflow-hidden">
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

				@for (day of days(); track day.toString(); let dayIndex = $index) {
					<div
						class="border-border/70 relative grid auto-cols-fr border-r last:border-r-0"
						[attr.data-today]="isToday(day) || undefined">
						@if (currentTimeIndicator()?.currentTimeVisible) {
							<div
								class="pointer-events-none absolute right-0 left-0 z-20"
								[style]="{ top: currentTimeIndicator()?.currentTimePosition + '%' }">
								<div class="relative flex items-center">
									@if (isToday(day)) {
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
										[id]="'day-' + getQuarterTime(day, hour, quarter)"
										[class]="generateCellClass(quarter)"
										[cdkDropListData]="getProcessedEventsForDay(dayIndex, hour, quarter)"
										(cdkDropListDropped)="drop($event)"
										(click)="handleDayClick($event, day, hour, quarter)">
										@for (
											positionedEvent of getProcessedEventsForDay(dayIndex, hour, quarter);
											track positionedEvent.event.id
										) {
											<div
												cdkDrag
												[cdkDragData]="positionedEvent.event"
												class="absolute z-10 px-0.5"
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
													[isLastDay]="true"
													(click)="editEvent(positionedEvent.event)" />
											</div>
										}
									</div>
								}
							</div>
						}
					</div>
				}
			</div>
		</div>
	`,
})
export class WeekViewCalendarComponent {
	private readonly _currentTimeIndicatorService = inject(CurrentTimeIndicatorService);
	protected _calendarDateService = inject(CalendarDateService);
	protected _eventPositioningService = inject(EventPositioningService);

	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();

	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<EventDuration>();
	onEventUpdated = output<CalendarEvent>();

	shouldShowAllDaySection = computed(() => this.allDayEvents().length > 0);

	currentTimeIndicator = toSignal(this._currentTimeIndicatorService.getCurrentTimeIndicator());

	weekStart = computed(() => startOfWeek(this.currentDate(), { weekStartsOn: 0 }));

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

	allDayEvents = computed(() => {
		const result = this.events()
			.filter((event) => event.allDay || isMultiDayEvent(event))
			.filter((event) => {
				const eventStart = new Date(event.start);
				const eventEnd = new Date(event.end);
				return this.days().some(
					(day) => isSameDay(day, eventStart) || isSameDay(day, eventEnd) || (day > eventStart && day < eventEnd),
				);
			});
		return result;
	});

	today = new Date();
	isToday = isToday;

	// Add after processedDayEvents computed signal
	eventsByDayHourQuarter = computed(() => {
		const eventMap = new Map<string, PositionedEvent[]>();

		this.processedDayEvents().forEach((dayEvents, dayIndex) => {
			dayEvents.forEach((event) => {
				const key = `${dayIndex}-${event.startHour}-${event.startQuarter}`;
				if (!eventMap.has(key)) {
					eventMap.set(key, []);
				}
				eventMap.get(key)!.push(event);
			});
		});

		return eventMap;
	});

	processedDayEvents = computed(() => {
		return this._eventPositioningService.processEventsForWeek(this.events(), this.days());
	});

	// Replace the existing getProcessedEventsForDay method
	public getProcessedEventsForDay(dayIndex: number, hour: Date, quarter: number): PositionedEvent[] {
		const key = `${dayIndex}-${hour.getHours()}-${quarter}`;
		return this.eventsByDayHourQuarter().get(key) || [];
	}

	public getQuarterTime(day: Date, hour: Date, quarter: number): string {
		return this._calendarDateService.getQuarterTime(day, hour, quarter);
	}

	public getDayAllDayEvents(day: Date): CalendarEvent[] {
		const result = this.allDayEvents().filter((event) => {
			const eventStart = new Date(event.start);
			const eventEnd = new Date(event.end);
			return isSameDay(day, eventStart) || (day > eventStart && day < eventEnd) || isSameDay(day, eventEnd);
		});

		return result;
	}

	public generateCellClass(quarter: number): string {
		// 64px
		// need config
		return hlm(
			'data-dragging:bg-accent flex h-full flex-col overflow-hidden hover:bg-muted/60',
			'"absolute h-[calc(64px/4)] w-full',
			quarter === 0 && 'top-0',
			quarter === 1 && 'top-[calc(64px/4)]',
			quarter === 2 && 'top-[calc(64px/4*2)]',
			quarter === 3 && 'top-[calc(64px/4*3)]',
		);
	}

	public shouldShowTitle(day: Date, event: CalendarEvent, dayIndex: number): boolean {
		const eventStart = new Date(event.start);
		const isFirstDay = isSameDay(day, eventStart);

		// Check if this is the first day in the current week view
		const isFirstVisibleDay = dayIndex === 0 && isBefore(eventStart, this.weekStart());

		return isFirstDay || isFirstVisibleDay;
	}

	public drop(event: CdkDragDrop<any>): void {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			const movedEvent = event.previousContainer.data[event.previousIndex].event as CalendarEvent;

			const originalStartDate = new Date(movedEvent.start);
			const originalEndDate = new Date(movedEvent.end);
			const durationMinutes = differenceInMinutes(originalEndDate, originalStartDate);

			const newStartDate = getDateFromContainerId(event.container.id);

			if (newStartDate && movedEvent) {
				const newEndDate = addMinutes(newStartDate, durationMinutes);
				const updatedEvent = { ...movedEvent, start: newStartDate, end: newEndDate };
				this.onEventUpdated.emit(updatedEvent);
			}
		}
	}

	public isFirstDay(event: CalendarEvent, day: Date): boolean {
		return isSameDay(day, new Date(event.start));
	}

	public isLastDay(event: CalendarEvent, day: Date): boolean {
		return isSameDay(day, new Date(event.end));
	}

	/**
	 * Handle click on day container, but prevent triggering when clicking on child elements
	 */
	public handleDayClick(event: MouseEvent, day: Date, hour: Date, quarter: number): void {
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
		const newStartDay = new Date(this._calendarDateService.getQuarterTime(day, hour, quarter));
		const newEndDay = addMinutes(newStartDay, 15);
		this.onEventCreate.emit({
			startDate: newStartDay,
			endDate: newEndDay,
		});
	}

	public editEvent(event: CalendarEvent): void {
		this.onEventSelect.emit(event);
	}
}
