import { format, subDays } from 'date-fns';
import { HistoryDatePipe } from './history-date.pipe';

describe('HistoryDatePipe', () => {
	const pipe = new HistoryDatePipe();

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return "Today HH:mm" if date is today', () => {
		const now = new Date();
		const result = pipe.transform(now);
		expect(result).toBe(`Today ${format(now, 'HH:mm')}`);
	});

	it('should return "Yesterday HH:mm" if date is yesterday', () => {
		const yesterday = subDays(new Date(), 1);
		const result = pipe.transform(yesterday);
		expect(result).toBe(`Yesterday ${format(yesterday, 'HH:mm')}`);
	});

	it('should return "HH:mm dd/MM/yyyy" if date is older than yesterday', () => {
		const pastDate = subDays(new Date(), 2);
		const result = pipe.transform(pastDate);
		expect(result).toBe(format(pastDate, 'HH:mm dd/MM/yyyy'));
	});
});
