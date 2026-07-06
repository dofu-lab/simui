import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { hlm } from '@spartan-ng/helm/utils';
import { addHours, addMinutes, differenceInMinutes, eachHourOfInterval, isToday, startOfDay } from 'date-fns';
import { buildAllDayEventViews, isInteractiveCalendarTarget, normalizeCalendarEvents } from './calendar-view-model';
import { EndHour, StartHour } from './constants';
import { CurrentTimeIndicatorService } from './current-time-indicator.service';
import { EventItemComponent } from './event-item.component';
import { EventPositioningService } from './event-positioning.service';
import { CalendarEvent, EventDuration, PositionedEvent } from './type';
import { getDateFromContainerId } from './utils';

@Component({
	selector: 'sim-day-view-calendar',
	imports: [NgClass, DatePipe, EventItemComponent, CdkDropListGroup, CdkDropList, CdkDrag],
	providers: [CurrentTimeIndicatorService, EventPositioningService],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div data-slot="day-view" class="border-border/70 flex h-full flex-col border-t">
			@if (showAllDaySection()) {
				<div class="border-border/70 bg-muted/50 grid grid-cols-[64px_auto] border-b">
					<div class="border-border/70 relative flex w-16 items-center justify-end border-r">
						<span
							class="text-muted-foreground/70 flex h-6 w-16 max-w-full items-center justify-center text-[10px] sm:text-xs">
							All day
						</span>
					</div>
					<div class="grid auto-cols-fr grid-flow-row">
						@for (eventView of allDayEventViews(); track eventView.event.id + '-all-day-event-item') {
							<div class="border-border/70 relative flex flex-col gap-1 border-r py-1 last:border-r-0">
								<div [ngClass]="{ 'pl-1': eventView.isFirstDay, 'pr-1': eventView.isLastDay }">
									<sim-event-item
										view="month"
										[event]="eventView.event"
										[isFirstDay]="eventView.isFirstDay"
										[isLastDay]="eventView.isLastDay">
										<div class="truncate">
											{{ eventView.event.title }}
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

				<div class="border-border/70 relative grid auto-cols-fr border-r last:border-r-0">
					@if (currentTimeIndicator()?.currentTimeVisible) {
						<div
							class="pointer-events-none absolute right-0 left-0 z-20"
							[style]="{ top: currentTimeIndicator()?.currentTimePosition + '%' }">
							<div class="relative flex items-center">
								@if (isToday()) {
									<div class="bg-primary absolute -left-1 h-2 w-2 rounded-full"></div>
									<div class="bg-primary h-0.5 w-full"></div>
								} @else {
									<div class="border-primary mx-px w-full border-t-[2px] border-dashed"></div>
								}
							</div>
						</div>
					}

					@for (hourSlot of hourSlots(); track hourSlot.hour.toString()) {
						<div class="border-border/70 relative h-16 border-b last:border-b-0">
							@for (quarterSlot of hourSlot.quarters; track quarterSlot.quarter) {
								<div
									cdkDropList
									class="hover:bg-muted/60"
									[id]="quarterSlot.id"
									[class]="quarterSlot.className"
									[cdkDropListData]="quarterSlot.events"
									(cdkDropListDropped)="drop($event)"
									(click)="handleDayClick($event, quarterSlot.startDate)">
									@for (positionedEvent of quarterSlot.events; track positionedEvent.event.id) {
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
												[isLastDay]="true"
												(click)="editEvent(positionedEvent.event)" />
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
	private readonly _eventPositioningService = inject(EventPositioningService);
	private readonly _currentTimeIndicatorService = inject(CurrentTimeIndicatorService);

	public readonly currentDate = input.required<Date>();
	public readonly events = input.required<CalendarEvent[]>();

	public readonly onEventSelect = output<CalendarEvent>();
	public readonly onEventCreate = output<EventDuration>();
	public readonly onEventUpdated = output<CalendarEvent>();

	protected readonly currentTimeIndicator = toSignal(
		this._currentTimeIndicatorService.getCurrentTimeIndicator(toObservable(this.currentDate), 'day'),
	);

	protected readonly isToday = computed(() => isToday(this.currentDate()));
	protected readonly hours = computed(() => {
		const dayStart = startOfDay(this.currentDate());
		return eachHourOfInterval({
			start: addHours(dayStart, StartHour),
			end: addHours(dayStart, EndHour - 1),
		});
	});
	protected readonly showAllDaySection = computed(() => this.allDayEventViews().length > 0);
	protected readonly hourSlots = computed(() =>
		this.hours().map((hour) => ({
			hour,
			quarters: [0, 1, 2, 3].map((quarter) => {
				const startDate = addMinutes(startOfDay(this.currentDate()), hour.getHours() * 60 + quarter * 15);
				const key = `${hour.getHours()}-${quarter}`;

				return {
					quarter,
					startDate,
					id: `day-${startDate.toString()}`,
					className: this.quarterCellClasses[quarter],
					events: this.eventsByHourQuarter().get(key) || [],
				};
			}),
		})),
	);

	private readonly normalizedEvents = computed(() => normalizeCalendarEvents(this.events()));
	protected readonly allDayEventViews = computed(() =>
		buildAllDayEventViews(this.currentDate(), this.normalizedEvents(), startOfDay(this.currentDate())),
	);

	private readonly eventsByHourQuarter = computed(() => {
		const eventMap = new Map<string, PositionedEvent[]>();

		this.processedDayEvents().forEach((event) => {
			const key = `${event.startHour}-${event.startQuarter}`;
			if (!eventMap.has(key)) {
				eventMap.set(key, []);
			}
			eventMap.get(key)!.push(event);
		});

		return eventMap;
	});
	private readonly processedDayEvents = computed(() => {
		return this._eventPositioningService.processEventsForDay(this.normalizedEvents(), this.currentDate());
	});
	private readonly quarterCellClasses = [0, 1, 2, 3].map((quarter) => this.generateCellClass(quarter));

	private generateCellClass(quarter: number): string {
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
}
