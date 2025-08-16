import { format, getHours, getMinutes, isSameDay } from 'date-fns';
import { EndHour, StartHour } from './constants';
import { CalendarEvent, EventColor, TimeOption } from './type';

/**
 * Get CSS classes for event colors
 */
export function getEventColorClasses(color?: EventColor | string): string {
	const eventColor = color || 'sky';

	switch (eventColor) {
		case 'sky':
			return 'bg-sky-200/50 hover:bg-sky-200/40 text-sky-950/80 dark:bg-sky-400/25 dark:hover:bg-sky-400/20 dark:text-sky-200 shadow-sky-700/8';
		case 'amber':
			return 'bg-amber-200/50 hover:bg-amber-200/40 text-amber-950/80 dark:bg-amber-400/25 dark:hover:bg-amber-400/20 dark:text-amber-200 shadow-amber-700/8';
		case 'violet':
			return 'bg-violet-200/50 hover:bg-violet-200/40 text-violet-950/80 dark:bg-violet-400/25 dark:hover:bg-violet-400/20 dark:text-violet-200 shadow-violet-700/8';
		case 'rose':
			return 'bg-rose-200/50 hover:bg-rose-200/40 text-rose-950/80 dark:bg-rose-400/25 dark:hover:bg-rose-400/20 dark:text-rose-200 shadow-rose-700/8';
		case 'emerald':
			return 'bg-emerald-200/50 hover:bg-emerald-200/40 text-emerald-950/80 dark:bg-emerald-400/25 dark:hover:bg-emerald-400/20 dark:text-emerald-200 shadow-emerald-700/8';
		case 'orange':
			return 'bg-orange-200/50 hover:bg-orange-200/40 text-orange-950/80 dark:bg-orange-400/25 dark:hover:bg-orange-400/20 dark:text-orange-200 shadow-orange-700/8';
		default:
			return 'bg-sky-200/50 hover:bg-sky-200/40 text-sky-950/80 dark:bg-sky-400/25 dark:hover:bg-sky-400/20 dark:text-sky-200 shadow-sky-700/8';
	}
}

/**
 * Get CSS classes for border radius based on event position in multi-day events
 */
export function getBorderRadiusClasses(isFirstDay: boolean, isLastDay: boolean): string {
	if (isFirstDay && isLastDay) {
		return 'rounded'; // Both ends rounded
	} else if (isFirstDay) {
		return 'rounded-l rounded-r-none'; // Only left end rounded
	} else if (isLastDay) {
		return 'rounded-r rounded-l-none'; // Only right end rounded
	} else {
		return 'rounded-none'; // No rounded corners
	}
}

/**
 * Check if an event is a multi-day event
 */
export function isMultiDayEvent(event: CalendarEvent): boolean {
	const eventStart = new Date(event.start);
	const eventEnd = new Date(event.end);
	return event.allDay || eventStart.getDate() !== eventEnd.getDate();
}

/**
 * Filter events for a specific day
 */
export function getEventsForDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
	return events
		.filter((event) => {
			const eventStart = new Date(event.start);
			return isSameDay(day, eventStart);
		})
		.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}

/**
 * Sort events with multi-day events first, then by start time
 */
export function sortEvents(events: CalendarEvent[]): CalendarEvent[] {
	return [...events].sort((a, b) => {
		const aIsMultiDay = isMultiDayEvent(a);
		const bIsMultiDay = isMultiDayEvent(b);

		if (aIsMultiDay && !bIsMultiDay) return -1;
		if (!aIsMultiDay && bIsMultiDay) return 1;

		return new Date(a.start).getTime() - new Date(b.start).getTime();
	});
}

/**
 * Get multi-day events that span across a specific day (but don't start on that day)
 */
export function getSpanningEventsForDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
	return events.filter((event) => {
		if (!isMultiDayEvent(event)) return false;

		const eventStart = new Date(event.start);
		const eventEnd = new Date(event.end);

		// Only include if it's not the start day but is either the end day or a middle day
		return !isSameDay(day, eventStart) && (isSameDay(day, eventEnd) || (day > eventStart && day < eventEnd));
	});
}

/**
 * Get all events visible on a specific day (starting, ending, or spanning)
 */
export function getAllEventsForDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
	return events.filter((event) => {
		const eventStart = new Date(event.start);
		const eventEnd = new Date(event.end);
		return isSameDay(day, eventStart) || isSameDay(day, eventEnd) || (day > eventStart && day < eventEnd);
	});
}

/**
 * Get all events for a day (for agenda view)
 */
export function getAgendaEventsForDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
	return events
		.filter((event) => {
			const eventStart = new Date(event.start);
			const eventEnd = new Date(event.end);
			return isSameDay(day, eventStart) || isSameDay(day, eventEnd) || (day > eventStart && day < eventEnd);
		})
		.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}

/**
 * Add hours to a date
 */
export function addHoursToDate(date: Date, hours: number): Date {
	const result = new Date(date);
	result.setHours(result.getHours() + hours);
	return result;
}

// Using date-fns format with custom formatting:
// 'h' - hours (1-12)
// 'a' - am/pm
// ':mm' - minutes with leading zero (only if the token 'mm' is present)
export const formatTimeWithOptionalMinutes = (date: Date) => {
	return format(date, getMinutes(date) === 0 ? 'ha' : 'h:mma').toLowerCase();
};

export function getDateFromContainerId(containerId: string): Date | null {
	try {
		// Extract date from container ID (format: 'day-YYYY-MM-DD')
		const dateStr = containerId.replace('day-', '');
		const date = new Date(dateStr);

		// Validate the date
		if (isNaN(date.getTime())) {
			console.warn(`Invalid date parsed from container ID: ${containerId}`);
			return null;
		}

		return date;
	} catch (error) {
		console.error(`Error parsing date from container ID: ${containerId}`, error);
		return null;
	}
}

export function getTimeOptions(): TimeOption[] {
	const options: TimeOption[] = [];
	for (let hour = StartHour; hour < EndHour; hour++) {
		for (let minute = 0; minute < 60; minute += 15) {
			const dateOption = new Date(2000, 0, 1, hour, minute);
			const value = getFormattedTimeValue(dateOption);
			const label = getFormattedTimeLabel(dateOption);
			options.push({ value, label });
		}
	}
	return options;
}

export function getFormattedTimeValue(date: Date): string {
	const formattedHour = getHours(date).toString().padStart(2, '0');
	const formattedMinute = getMinutes(date).toString().padStart(2, '0');
	return `${formattedHour}:${formattedMinute}`;
}

export function getFormattedTimeLabel(date: Date): string {
	return format(date, 'h:mm a');
}

export function getTimeFromList(timeList: TimeOption[], value: string): TimeOption | undefined {
	return timeList.find((time) => time.value === value);
}
