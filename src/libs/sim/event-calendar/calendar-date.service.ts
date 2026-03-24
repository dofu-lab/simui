import { Injectable } from '@angular/core';
import { addMinutes, getHours } from 'date-fns';

@Injectable()
export class CalendarDateService {
	public getQuarterTime(day: Date, hour: Date, quarter: number): string {
		return addMinutes(day, getHours(hour) * 60 + quarter * 15).toString();
	}
}
