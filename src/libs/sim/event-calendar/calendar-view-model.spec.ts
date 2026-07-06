import { addDays, setHours, setMinutes } from 'date-fns';
import {
	buildAllDayEventViews,
	buildDayBuckets,
	getDayKey,
	normalizeCalendarEvents,
	sortCalendarEvents,
} from './calendar-view-model';
import { CalendarEvent } from './type';

describe('calendar view model', () => {
	const baseDay = new Date(2025, 0, 15);

	function event(id: string, start: Date, end: Date, allDay = false): CalendarEvent {
		return {
			id,
			title: id,
			start,
			end,
			allDay,
		};
	}

	it('normalizes event dates and duration once per event', () => {
		const start = setMinutes(setHours(baseDay, 9), 30);
		const end = setMinutes(setHours(baseDay, 11), 0);

		const [normalized] = normalizeCalendarEvents([event('planning', start, end)]);

		expect(normalized.start).toEqual(start);
		expect(normalized.end).toEqual(end);
		expect(normalized.durationMinutes).toBe(90);
		expect(normalized.startDayKey).toBe(getDayKey(baseDay));
		expect(normalized.isAllDay).toBeFalse();
		expect(normalized.isMultiDay).toBeFalse();
	});

	it('sorts multi-day events before timed events and then by start time', () => {
		const multiDay = event('multi-day', baseDay, addDays(baseDay, 2), true);
		const afternoon = event('afternoon', setHours(baseDay, 14), setHours(baseDay, 15));
		const morning = event('morning', setHours(baseDay, 9), setHours(baseDay, 10));

		expect(sortCalendarEvents([afternoon, multiDay, morning]).map(({ id }) => id)).toEqual([
			'multi-day',
			'morning',
			'afternoon',
		]);
	});

	it('builds month buckets for starting, ending, and spanning events', () => {
		const days = [baseDay, addDays(baseDay, 1), addDays(baseDay, 2)];
		const events = normalizeCalendarEvents([
			event('one-day', setHours(baseDay, 9), setHours(baseDay, 10)),
			event('spanning', setHours(baseDay, 12), setHours(addDays(baseDay, 2), 12)),
		]);

		const buckets = buildDayBuckets(days, events, 1);

		expect(buckets.get(getDayKey(baseDay))?.events.map(({ id }) => id)).toEqual(['spanning', 'one-day']);
		expect(buckets.get(getDayKey(addDays(baseDay, 1)))?.events.map(({ id }) => id)).toEqual(['spanning']);
		expect(buckets.get(getDayKey(addDays(baseDay, 2)))?.events.map(({ id }) => id)).toEqual(['spanning']);
		expect(buckets.get(getDayKey(baseDay))?.visibleEvents.length).toBe(1);
		expect(buckets.get(getDayKey(baseDay))?.remainingCount).toBe(1);
	});

	it('marks all-day event title visibility at the first visible day', () => {
		const visibleStart = addDays(baseDay, 1);
		const visibleDay = visibleStart;
		const [normalized] = normalizeCalendarEvents([event('conference', baseDay, addDays(baseDay, 3), true)]);

		const [view] = buildAllDayEventViews(visibleDay, [normalized], visibleStart, 0);

		expect(view.isFirstDay).toBeFalse();
		expect(view.isLastDay).toBeFalse();
		expect(view.shouldShowTitle).toBeTrue();
	});
});
