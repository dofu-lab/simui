import { format, subDays } from 'date-fns';
import { HistoryDatePipe } from './history-date.pipe';

describe('HistoryDatePipe', () => {
	const pipe = new HistoryDatePipe();

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return "Today HH:mm:ss" if date is today', () => {
		const now = new Date();
		const result = pipe.transform(now);
		expect(result).toBe(`Today ${format(now, 'HH:mm:ss')}`);
	});

	it('should return "Yesterday HH:mm:ss" if date is yesterday', () => {
		const yesterday = subDays(new Date(), 1);
		const result = pipe.transform(yesterday);
		expect(result).toBe(`Yesterday ${format(yesterday, 'HH:mm:ss')}`);
	});

	it('should return "HH:mm:ss dd/MM/yyyy" if date is older than yesterday', () => {
		const pastDate = subDays(new Date(), 2);
		const result = pipe.transform(pastDate);
		expect(result).toBe(format(pastDate, 'HH:mm:ss dd/MM/yyyy'));
	});
});
