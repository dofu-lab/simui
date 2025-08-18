import { Injectable } from '@angular/core';
import {
	addHours,
	areIntervalsOverlapping,
	differenceInMinutes,
	getHours,
	getMinutes,
	isSameDay,
	startOfDay,
} from 'date-fns';
import { StartHour, WeekCellsHeight } from '../constants';
import { CalendarEvent, PositionedEvent } from '../type';
import { isMultiDayEvent } from '../utils';

@Injectable()
export class EventPositioningService {
	private readonly COLUMN_CONFIG = {
		firstColumnWidth: 1,
		otherColumnWidth: 0.9,
		columnOffset: 0.1,
		baseZIndex: 10,
	} as const;

	public processEventsForDay(events: CalendarEvent[], day: Date): PositionedEvent[] {
		const dayEvents = this.getEventsForDay(events, day);
		const sortedEvents = this.sortEventsByStartTimeAndDuration(dayEvents);
		const columns: { event: CalendarEvent; end: Date }[][] = [];

		return sortedEvents.map((event) => this.processEvent(event, day, columns));
	}

	public processEventsForWeek(events: CalendarEvent[], days: Date[]): PositionedEvent[][] {
		return days.map((day) => this.processEventsForDay(events, day));
	}

	// Helper method to get events for a specific day
	private getEventsForDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
		return events.filter((event) => {
			if (event.allDay || isMultiDayEvent(event)) return false;

			const eventStart = new Date(event.start);
			const eventEnd = new Date(event.end);

			return isSameDay(day, eventStart) || isSameDay(day, eventEnd) || (eventStart < day && eventEnd > day);
		});
	}

	// Helper method to sort events
	private sortEventsByStartTimeAndDuration(events: CalendarEvent[]): CalendarEvent[] {
		return [...events].sort((a, b) => {
			const aStart = new Date(a.start);
			const bStart = new Date(b.start);

			// First sort by start time
			const timeDiff = aStart.getTime() - bStart.getTime();
			if (timeDiff !== 0) return timeDiff;

			// If start times are equal, sort by duration (longer events first)
			const aEnd = new Date(a.end);
			const bEnd = new Date(b.end);
			const aDuration = differenceInMinutes(aEnd, aStart);
			const bDuration = differenceInMinutes(bEnd, bStart);

			return bDuration - aDuration;
		});
	}

	// Helper method to find column for overlapping events
	private findEventColumn(
		event: CalendarEvent,
		adjustedStart: Date,
		adjustedEnd: Date,
		columns: { event: CalendarEvent; end: Date }[][],
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
				areIntervalsOverlapping(
					{ start: adjustedStart, end: adjustedEnd },
					{ start: new Date(c.event.start), end: new Date(c.event.end) },
				),
			);

			if (!hasOverlap) {
				return columnIndex;
			}

			columnIndex++;
		}
	}

	// Helper method to calculate event dimensions
	private calculateEventDimensions(columnIndex: number): { width: number; left: number; zIndex: number } {
		const { firstColumnWidth, otherColumnWidth, columnOffset, baseZIndex } = this.COLUMN_CONFIG;

		return {
			width: columnIndex === 0 ? firstColumnWidth : otherColumnWidth,
			left: columnIndex === 0 ? 0 : columnIndex * columnOffset,
			zIndex: baseZIndex + columnIndex,
		};
	}

	// Helper method to process a single event
	private processEvent(
		event: CalendarEvent,
		day: Date,
		columns: { event: CalendarEvent; end: Date }[][],
	): PositionedEvent {
		const eventStart = new Date(event.start);
		const eventEnd = new Date(event.end);
		const dayStart = startOfDay(day);

		// Adjust start and end times if they're outside this day
		const adjustedStart = isSameDay(day, eventStart) ? eventStart : dayStart;
		const adjustedEnd = isSameDay(day, eventEnd) ? eventEnd : addHours(dayStart, 24);

		// Calculate time positions
		const startHour = getHours(adjustedStart) + getMinutes(adjustedStart) / 60;
		const endHour = getHours(adjustedEnd) + getMinutes(adjustedEnd) / 60;

		// Calculate layout properties
		const top = (startHour - StartHour) * WeekCellsHeight;
		const height = (endHour - startHour) * WeekCellsHeight;

		// Find column and calculate dimensions
		const columnIndex = this.findEventColumn(event, adjustedStart, adjustedEnd, columns);
		columns[columnIndex].push({ event, end: adjustedEnd });

		const { width, left, zIndex } = this.calculateEventDimensions(columnIndex);

		// Calculate quarter positions
		const startHourFloor = Math.floor(startHour);
		const startQuarter = Math.floor(getMinutes(adjustedStart) / 15);
		const endHourFloor = Math.floor(endHour);
		const endQuarter = Math.floor(getMinutes(adjustedEnd) / 15);

		return {
			event,
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
}
