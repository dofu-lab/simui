import { setHours, setMinutes } from 'date-fns';
import { normalizeCalendarEvents } from './calendar-view-model';
import { EventPositioningService } from './event-positioning.service';
import { CalendarEvent } from './type';

describe('EventPositioningService', () => {
	const service = new EventPositioningService();
	const day = new Date(2025, 0, 15);

	function event(
		id: string,
		startHour: number,
		startMinute: number,
		endHour: number,
		endMinute: number,
	): CalendarEvent {
		return {
			id,
			title: id,
			start: setMinutes(setHours(day, startHour), startMinute),
			end: setMinutes(setHours(day, endHour), endMinute),
		};
	}

	it('positions events in their starting quarter', () => {
		const [positioned] = service.processEventsForDay([event('standup', 9, 15, 10, 0)], day);

		expect(positioned.event.id).toBe('standup');
		expect(positioned.startHour).toBe(9);
		expect(positioned.startQuarter).toBe(1);
		expect(positioned.height).toBe(48);
	});

	it('places overlapping events in separate columns', () => {
		const positioned = service.processEventsForDay([event('first', 9, 0, 10, 0), event('second', 9, 30, 10, 30)], day);

		expect(positioned.map(({ event: calendarEvent }) => calendarEvent.id)).toEqual(['first', 'second']);
		expect(positioned[0].left).toBe(0);
		expect(positioned[1].left).toBeGreaterThan(0);
		expect(positioned[1].zIndex).toBeGreaterThan(positioned[0].zIndex);
	});

	it('accepts normalized events without reparsing inputs', () => {
		const normalized = normalizeCalendarEvents([event('normalized', 13, 0, 14, 30)]);

		const [positioned] = service.processEventsForDay(normalized, day);

		expect(positioned.event.id).toBe('normalized');
		expect(positioned.startHour).toBe(13);
		expect(positioned.height).toBe(96);
	});

	it('excludes all-day and multi-day events from timed positioning', () => {
		const allDay: CalendarEvent = {
			id: 'all-day',
			title: 'all-day',
			start: day,
			end: day,
			allDay: true,
		};
		const multiDay: CalendarEvent = {
			id: 'multi-day',
			title: 'multi-day',
			start: day,
			end: new Date(2025, 0, 16),
		};

		expect(service.processEventsForDay([allDay, multiDay], day)).toEqual([]);
	});
});
