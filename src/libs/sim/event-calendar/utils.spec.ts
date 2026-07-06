import { getDateFromContainerId } from './utils';

describe('event calendar utils', () => {
	it('parses month drop-list ids as local dates', () => {
		const date = getDateFromContainerId('day-2025-01-15');

		expect(date).not.toBeNull();
		expect(date?.getFullYear()).toBe(2025);
		expect(date?.getMonth()).toBe(0);
		expect(date?.getDate()).toBe(15);
	});

	it('parses timed drop-list ids from Date string values', () => {
		const source = new Date(2025, 0, 15, 9, 15);
		const date = getDateFromContainerId(`day-${source.toString()}`);

		expect(date?.getTime()).toBe(source.getTime());
	});
});
