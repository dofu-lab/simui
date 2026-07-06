import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { hlm } from '@spartan-ng/helm/utils';
import {
	addHours,
	addMinutes,
	differenceInMinutes,
	eachDayOfInterval,
	eachHourOfInterval,
	endOfWeek,
	isToday,
	startOfDay,
	startOfWeek,
} from 'date-fns';
import { buildAllDayEventViews, isInteractiveCalendarTarget, normalizeCalendarEvents } from './calendar-view-model';
import { EndHour, StartHour } from './constants';
import { CurrentTimeIndicatorService } from './current-time-indicator.service';
import { EventItemComponent } from './event-item.component';
import { EventPositioningService } from './event-positioning.service';
import { CalendarEvent, EventDuration, PositionedEvent } from './type';
import { getDateFromContainerId } from './utils';

@Component({
	selector: 'sim-week-view-calendar',
	imports: [NgClass, DatePipe, EventItemComponent, CdkDropListGroup, CdkDropList, CdkDrag],
	providers: [CurrentTimeIndicatorService, EventPositioningService],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div data-slot="week-view" class="flex h-full flex-col">
			<div class="bg-background/80 border-border/70 top-0 z-30 grid grid-cols-8 border-b backdrop-blur-md">
				<div class="text-muted-foreground/70 py-2 text-center text-sm">
					<span class="max-[479px]:sr-only">{{ today | date: 'O' }}</span>
				</div>
				@for (dayColumn of dayColumns(); track dayColumn.key) {
					<div
						class="data-today:text-foreground text-muted-foreground/70 py-2 text-center text-sm data-today:font-medium"
						[attr.data-today]="isToday(dayColumn.date) || undefined">
						<span class="sm:hidden">{{ dayColumn.date | date: 'E' }} {{ dayColumn.date | date: 'd' }}</span>
						<span class="max-sm:hidden">{{ dayColumn.date | date: 'EEE dd' }}</span>
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
						@for (dayColumn of dayColumns(); track dayColumn.key + '-all-day') {
							<div
								class="border-border/70 relative flex flex-col gap-1 border-r py-1 last:border-r-0"
								[attr.data-today]="isToday(dayColumn.date) || undefined">
								@for (eventView of dayColumn.allDayEvents; track eventView.event.id + '-all-day-event-item') {
									<div [ngClass]="{ 'pl-1': eventView.isFirstDay, 'pr-1': eventView.isLastDay }">
										<sim-event-item
											view="month"
											[event]="eventView.event"
											[isFirstDay]="eventView.isFirstDay"
											[isLastDay]="eventView.isLastDay">
											@if (eventView.shouldShowTitle) {
												<div class="truncate">
													{{ eventView.event.title }}
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
						<div class="border-border/70 relative h-16 border-b last:border-b-0">
							@if (index > 0) {
								<span
									class="bg-background text-muted-foreground/70 absolute -top-3 left-0 flex h-6 w-16 max-w-full items-center justify-end pe-2 text-[10px] sm:pe-4 sm:text-xs">
									{{ hour | date: 'h a' }}
								</span>
							}
						</div>
					}
				</div>

				@for (dayColumn of dayColumns(); track dayColumn.key) {
					<div
						class="border-border/70 relative grid auto-cols-fr border-r last:border-r-0"
						[attr.data-today]="isToday(dayColumn.date) || undefined">
						@if (currentTimeIndicator()?.currentTimeVisible) {
							<div
								class="pointer-events-none absolute right-0 left-0 z-20"
								[style]="{ top: currentTimeIndicator()?.currentTimePosition + '%' }">
								<div class="relative flex items-center">
									@if (isToday(dayColumn.date)) {
										<div class="bg-primary absolute -left-1 h-2 w-2 rounded-full"></div>
										<div class="bg-primary h-0.5 w-full"></div>
									} @else {
										<div class="border-primary mx-px w-full border-t-2 border-dashed"></div>
									}
								</div>
							</div>
						}

						@for (hourSlot of dayColumn.hourSlots; track hourSlot.hour.toString()) {
							<div class="border-border/70 relative h-16 border-b last:border-b-0">
								@for (quarterSlot of hourSlot.quarters; track quarterSlot.quarter) {
									<div
										cdkDropList
										[id]="quarterSlot.id"
										[class]="quarterSlot.className"
										[cdkDropListData]="quarterSlot.events"
										(cdkDropListDropped)="drop($event)"
										(click)="handleDayClick($event, quarterSlot.startDate)">
										@for (positionedEvent of quarterSlot.events; track positionedEvent.event.id) {
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
	private readonly _eventPositioningService = inject(EventPositioningService);

	public readonly currentDate = input.required<Date>();
	public readonly events = input.required<CalendarEvent[]>();

	public readonly onEventSelect = output<CalendarEvent>();
	public readonly onEventCreate = output<EventDuration>();
	public readonly onEventUpdated = output<CalendarEvent>();

	private readonly weekStart = computed(() => startOfWeek(this.currentDate(), { weekStartsOn: 0 }));
	private readonly days = computed(() => {
		const weekStart = startOfWeek(this.currentDate());
		const weekEnd = endOfWeek(this.currentDate());
		return eachDayOfInterval({ start: weekStart, end: weekEnd });
	});
	private readonly normalizedEvents = computed(() => normalizeCalendarEvents(this.events()));
	// Add after processedDayEvents computed signal
	private readonly eventsByDayHourQuarter = computed(() => {
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
	private readonly processedDayEvents = computed(() => {
		return this._eventPositioningService.processEventsForWeek(this.normalizedEvents(), this.days());
	});
	private readonly quarterCellClasses = [0, 1, 2, 3].map((quarter) => this.generateCellClass(quarter));
	private readonly allDayEvents = computed(() =>
		this.days().flatMap((day, dayIndex) =>
			buildAllDayEventViews(day, this.normalizedEvents(), this.weekStart(), dayIndex),
		),
	);

	protected readonly today = new Date();
	protected readonly isToday = isToday;
	protected readonly shouldShowAllDaySection = computed(() => this.allDayEvents().length > 0);
	protected readonly currentTimeIndicator = toSignal(
		this._currentTimeIndicatorService.getCurrentTimeIndicator(toObservable(this.currentDate), 'week'),
	);
	protected readonly hours = computed(() => {
		const dayStart = startOfDay(this.currentDate());
		return eachHourOfInterval({
			start: addHours(dayStart, StartHour),
			end: addHours(dayStart, EndHour - 1),
		});
	});
	protected readonly dayColumns = computed(() =>
		this.days().map((day, dayIndex) => {
			const dayStart = startOfDay(day);

			return {
				date: day,
				key: day.toString(),
				allDayEvents: buildAllDayEventViews(day, this.normalizedEvents(), this.weekStart(), dayIndex),
				hourSlots: this.hours().map((hour) => ({
					hour,
					quarters: [0, 1, 2, 3].map((quarter) => {
						const startDate = addMinutes(dayStart, hour.getHours() * 60 + quarter * 15);
						const key = `${dayIndex}-${hour.getHours()}-${quarter}`;

						return {
							quarter,
							startDate,
							id: `day-${startDate.toString()}`,
							className: this.quarterCellClasses[quarter],
							events: this.eventsByDayHourQuarter().get(key) || [],
						};
					}),
				})),
			};
		}),
	);

	protected drop(event: CdkDragDrop<PositionedEvent[]>): void {
		if (event.previousContainer === event.container) {
			return;
		} else {
			const movedEvent = event.previousContainer.data[event.previousIndex].event;

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

	/**
	 * Handle click on day container, but prevent triggering when clicking on child elements
	 */
	protected handleDayClick(event: MouseEvent, startDate: Date): void {
		if (isInteractiveCalendarTarget(event)) {
			return;
		}

		const newStartDay = new Date(startDate);
		const newEndDay = addMinutes(newStartDay, 15);
		this.onEventCreate.emit({
			startDate: newStartDay,
			endDate: newEndDay,
		});
	}

	protected editEvent(event: CalendarEvent): void {
		this.onEventSelect.emit(event);
	}

	private generateCellClass(quarter: number): string {
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
}
