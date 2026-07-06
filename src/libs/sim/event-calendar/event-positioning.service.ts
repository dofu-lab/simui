import { Injectable } from '@angular/core';
import { addHours, areIntervalsOverlapping, getHours, getMinutes, isSameDay, startOfDay } from 'date-fns';
import { eventIntersectsDay, normalizeCalendarEvents, NormalizedCalendarEvent } from './calendar-view-model';
import { StartHour, WeekCellsHeight } from './constants';
import { CalendarEvent, PositionedEvent } from './type';

@Injectable()
export class EventPositioningService {
	private readonly COLUMN_CONFIG = {
		firstColumnWidth: 1,
		otherColumnWidth: 0.9,
		columnOffset: 0.1,
		baseZIndex: 10,
	} as const;

	public processEventsForDay(events: CalendarEvent[] | NormalizedCalendarEvent[], day: Date): PositionedEvent[] {
		const dayEvents = this.getEventsForDay(events, day);
		const sortedEvents = this.sortEventsByStartTimeAndDuration(dayEvents);
		const columns: { event: NormalizedCalendarEvent; end: Date }[][] = [];

		return sortedEvents.map((event) => this.processEvent(event, day, columns));
	}

	public processEventsForWeek(events: CalendarEvent[] | NormalizedCalendarEvent[], days: Date[]): PositionedEvent[][] {
		return days.map((day) => this.processEventsForDay(events, day));
	}

	private getEventsForDay(events: CalendarEvent[] | NormalizedCalendarEvent[], day: Date): NormalizedCalendarEvent[] {
		const normalizedEvents = this.isNormalizedEventArray(events) ? events : normalizeCalendarEvents(events);

		return normalizedEvents.filter((event) => !event.isAllDay && !event.isMultiDay && eventIntersectsDay(event, day));
	}

	private sortEventsByStartTimeAndDuration(events: NormalizedCalendarEvent[]): NormalizedCalendarEvent[] {
		return [...events].sort((a, b) => {
			const timeDiff = a.startTime - b.startTime;
			if (timeDiff !== 0) return timeDiff;

			return b.durationMinutes - a.durationMinutes;
		});
	}

	private findEventColumn(
		adjustedStart: Date,
		adjustedEnd: Date,
		columns: { event: NormalizedCalendarEvent; end: Date }[][],
	): number {
		let columnIndex = 0;

		while (true) {
			const col = columns[columnIndex];
			if (!col || col.length === 0) {
				if (!columns[columnIndex]) {
					columns[columnIndex] = [];
				}
				return columnIndex;
			}

			const hasOverlap = col.some((c) =>
				areIntervalsOverlapping({ start: adjustedStart, end: adjustedEnd }, { start: c.event.start, end: c.event.end }),
			);

			if (!hasOverlap) {
				return columnIndex;
			}

			columnIndex++;
		}
	}

	private calculateEventDimensions(columnIndex: number): { width: number; left: number; zIndex: number } {
		const { firstColumnWidth, otherColumnWidth, columnOffset, baseZIndex } = this.COLUMN_CONFIG;

		return {
			width: columnIndex === 0 ? firstColumnWidth : otherColumnWidth,
			left: columnIndex === 0 ? 0 : columnIndex * columnOffset,
			zIndex: baseZIndex + columnIndex,
		};
	}

	private processEvent(
		event: NormalizedCalendarEvent,
		day: Date,
		columns: { event: NormalizedCalendarEvent; end: Date }[][],
	): PositionedEvent {
		const dayStart = startOfDay(day);

		const adjustedStart = isSameDay(day, event.start) ? event.start : dayStart;
		const adjustedEnd = isSameDay(day, event.end) ? event.end : addHours(dayStart, 24);

		const startHour = getHours(adjustedStart) + getMinutes(adjustedStart) / 60;
		const endHour = getHours(adjustedEnd) + getMinutes(adjustedEnd) / 60;

		const top = (startHour - StartHour) * WeekCellsHeight;
		const height = (endHour - startHour) * WeekCellsHeight;

		const columnIndex = this.findEventColumn(adjustedStart, adjustedEnd, columns);
		columns[columnIndex].push({ event, end: adjustedEnd });

		const { width, left, zIndex } = this.calculateEventDimensions(columnIndex);

		const startHourFloor = Math.floor(startHour);
		const startQuarter = Math.floor(getMinutes(adjustedStart) / 15);
		const endHourFloor = Math.floor(endHour);
		const endQuarter = Math.floor(getMinutes(adjustedEnd) / 15);

		return {
			event: event.event,
			top,
			height,
			left,
			width,
			zIndex,
			startHour: startHourFloor,
			startQuarter,
			endHour: endHourFloor,
			endQuarter,
		};
	}

	private isNormalizedEventArray(
		events: CalendarEvent[] | NormalizedCalendarEvent[],
	): events is NormalizedCalendarEvent[] {
		return events.length === 0 || 'startTime' in events[0];
	}
}
