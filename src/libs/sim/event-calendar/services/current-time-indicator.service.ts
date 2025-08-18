import { Injectable } from '@angular/core';
import { endOfWeek, isSameDay, isWithinInterval, startOfWeek } from 'date-fns';
import { BehaviorSubject, Observable, combineLatest, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EndHour, StartHour } from '../constants';

export interface CurrentTimeIndicatorState {
	currentTimePosition: number;
	currentTimeVisible: boolean;
}

@Injectable()
export class CurrentTimeIndicatorService {
	private currentDateSubject = new BehaviorSubject<Date>(new Date());
	private viewSubject = new BehaviorSubject<'day' | 'week'>('week');

	constructor() {}

	/**
	 * Get the current time indicator state as an observable
	 * Updates every minute
	 */
	getCurrentTimeIndicator(): Observable<CurrentTimeIndicatorState> {
		// Create an observable that emits every minute
		const minuteTimer$ = interval(60000).pipe(startWith(0));

		return combineLatest([this.currentDateSubject.asObservable(), this.viewSubject.asObservable(), minuteTimer$]).pipe(
			map(([currentDate, view]) => this.calculateTimePosition(currentDate, view)),
		);
	}

	/**
	 * Calculate the current time position and visibility
	 */
	private calculateTimePosition(currentDate: Date, view: 'day' | 'week'): CurrentTimeIndicatorState {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const totalMinutes = (hours - StartHour) * 60 + minutes;
		const dayStartMinutes = 0; // 12am
		const dayEndMinutes = (EndHour - StartHour) * 60; // 12am next day

		// Calculate position as percentage of day
		const currentTimePosition = ((totalMinutes - dayStartMinutes) / (dayEndMinutes - dayStartMinutes)) * 100;

		// Check if current day is in view based on the calendar view
		let currentTimeVisible = false;

		if (view === 'day') {
			currentTimeVisible = isSameDay(now, currentDate);
		} else if (view === 'week') {
			const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 0 });
			const endOfWeekDate = endOfWeek(currentDate, { weekStartsOn: 0 });
			currentTimeVisible = isWithinInterval(now, {
				start: startOfWeekDate,
				end: endOfWeekDate,
			});
		}

		return {
			currentTimePosition,
			currentTimeVisible,
		};
	}
}
