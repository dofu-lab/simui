import { addDays, differenceInMinutes, endOfDay, format, isSameDay, startOfDay } from 'date-fns';
import { CalendarEvent } from './type';

export interface NormalizedCalendarEvent {
	event: CalendarEvent;
	start: Date;
	end: Date;
	startTime: number;
	endTime: number;
	durationMinutes: number;
	startDayKey: string;
	endDayKey: string;
	isAllDay: boolean;
	isMultiDay: boolean;
}

export interface CalendarDayBucket {
	date: Date;
	key: string;
	events: CalendarEvent[];
	eventViews: CalendarDayEventView[];
	normalizedEvents: NormalizedCalendarEvent[];
	visibleEvents: CalendarDayEventView[];
	remainingCount: number;
	hasMoreEvents: boolean;
}

export interface CalendarDayEventView {
	event: CalendarEvent;
	isFirstDay: boolean;
	isLastDay: boolean;
}

export interface AllDayEventView {
	event: CalendarEvent;
	isFirstDay: boolean;
	isLastDay: boolean;
	shouldShowTitle: boolean;
}

export const CalendarDayKeyFormat = 'yyyy-MM-dd';

export function getDayKey(date: Date): string {
	return format(date, CalendarDayKeyFormat);
}

export function normalizeCalendarEvents(events: CalendarEvent[]): NormalizedCalendarEvent[] {
	return events.map((event) => {
		const start = new Date(event.start);
		const end = new Date(event.end);
		const startTime = start.getTime();
		const endTime = end.getTime();
		const isMultiDay = !isSameDay(start, end);

		return {
			event,
			start,
			end,
			startTime,
			endTime,
			durationMinutes: differenceInMinutes(end, start),
			startDayKey: getDayKey(start),
			endDayKey: getDayKey(end),
			isAllDay: event.allDay === true,
			isMultiDay: event.allDay === true || isMultiDay,
		};
	});
}

export function sortNormalizedEvents(events: NormalizedCalendarEvent[]): NormalizedCalendarEvent[] {
	return [...events].sort((a, b) => {
		if (a.isMultiDay && !b.isMultiDay) return -1;
		if (!a.isMultiDay && b.isMultiDay) return 1;

		return a.startTime - b.startTime;
	});
}

export function sortCalendarEvents(events: CalendarEvent[]): CalendarEvent[] {
	return sortNormalizedEvents(normalizeCalendarEvents(events)).map(({ event }) => event);
}

export function eventIntersectsDay(event: NormalizedCalendarEvent, day: Date): boolean {
	const dayStart = startOfDay(day).getTime();
	const dayEnd = endOfDay(day).getTime();

	return event.startTime <= dayEnd && event.endTime >= dayStart;
}

export function eventIntersectsRange(event: NormalizedCalendarEvent, rangeStart: Date, rangeEnd: Date): boolean {
	return event.startTime <= rangeEnd.getTime() && event.endTime >= rangeStart.getTime();
}

export function buildDayBuckets(
	days: Date[],
	events: NormalizedCalendarEvent[],
	visibleCount = Number.POSITIVE_INFINITY,
): Map<string, CalendarDayBucket> {
	const buckets = new Map<string, CalendarDayBucket>();

	for (const date of days) {
		const key = getDayKey(date);
		buckets.set(key, {
			date,
			key,
			events: [],
			eventViews: [],
			normalizedEvents: [],
			visibleEvents: [],
			remainingCount: 0,
			hasMoreEvents: false,
		});
	}

	if (days.length === 0 || events.length === 0) {
		return buckets;
	}

	const rangeStart = startOfDay(days[0]);
	const rangeEnd = endOfDay(days[days.length - 1]);

	for (const event of events) {
		if (!eventIntersectsRange(event, rangeStart, rangeEnd)) {
			continue;
		}

		let cursor = startOfDay(event.startTime < rangeStart.getTime() ? rangeStart : event.start);
		const lastVisibleDay = startOfDay(event.endTime > rangeEnd.getTime() ? rangeEnd : event.end);

		while (cursor.getTime() <= lastVisibleDay.getTime()) {
			const bucket = buckets.get(getDayKey(cursor));
			if (bucket) {
				bucket.normalizedEvents.push(event);
			}
			cursor = addDays(cursor, 1);
		}
	}

	for (const bucket of buckets.values()) {
		bucket.normalizedEvents = sortNormalizedEvents(bucket.normalizedEvents);
		bucket.events = bucket.normalizedEvents.map(({ event }) => event);
		bucket.eventViews = bucket.normalizedEvents.map((event) => ({
			event: event.event,
			isFirstDay: bucket.key === event.startDayKey,
			isLastDay: bucket.key === event.endDayKey,
		}));
		bucket.visibleEvents = bucket.eventViews.slice(0, visibleCount);
		bucket.remainingCount = Math.max(0, bucket.events.length - visibleCount);
		bucket.hasMoreEvents = bucket.remainingCount > 0;
	}

	return buckets;
}

export function buildAllDayEventViews(
	day: Date,
	events: NormalizedCalendarEvent[],
	firstVisibleDay: Date,
	dayIndex = 0,
): AllDayEventView[] {
	return sortNormalizedEvents(events)
		.filter((event) => event.isAllDay || event.isMultiDay)
		.filter((event) => eventIntersectsDay(event, day))
		.map((event) => {
			const isFirstDay = isSameDay(day, event.start);
			const isLastDay = isSameDay(day, event.end);
			const isFirstVisibleDay = dayIndex === 0 && event.startTime < firstVisibleDay.getTime();

			return {
				event: event.event,
				isFirstDay,
				isLastDay,
				shouldShowTitle: isFirstDay || isFirstVisibleDay,
			};
		});
}

export function isInteractiveCalendarTarget(event: MouseEvent): boolean {
	const target = event.target as HTMLElement;
	const currentTarget = event.currentTarget as HTMLElement;

	if (target === currentTarget) {
		return false;
	}

	let element: HTMLElement | null = target;
	while (element && element !== currentTarget) {
		if (
			element.tagName === 'BUTTON' ||
			element.hasAttribute('cdkDrag') ||
			element.hasAttribute('hlmPopoverTrigger') ||
			element.closest('sim-event-item') ||
			element.closest('hlm-popover')
		) {
			return true;
		}
		element = element.parentElement;
	}

	return false;
}
