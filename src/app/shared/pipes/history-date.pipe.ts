import { Pipe, PipeTransform } from '@angular/core';
import { format, isToday, isYesterday } from 'date-fns';

@Pipe({
	name: 'historyDate',
})
export class HistoryDatePipe implements PipeTransform {
	transform(value: string | Date | number): string {
		const date = new Date(value);

		if (isToday(date)) {
			return `Today ${format(date, 'HH:mm')}`;
		}

		if (isYesterday(date)) {
			return `Yesterday ${format(date, 'HH:mm')}`;
		}

		return format(date, 'HH:mm dd/MM/yyyy');
	}
}
