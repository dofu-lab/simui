export type CalendarView = 'month' | 'week' | 'day' | 'agenda';

export interface CalendarEvent {
	id: string;
	title: string;
	description?: string;
	start: Date;
	end: Date;
	allDay?: boolean;
	color?: EventColor;
	location?: string;
}

export type EventColor = 'sky' | 'amber' | 'violet' | 'rose' | 'emerald' | 'orange';

export interface PositionedEvent {
	event: CalendarEvent;
	top: number;
	height: number;
	left: number;
	width: number;
	zIndex: number;
	startHour: number;
	startQuarter: number;
	endHour: number;
	endQuarter: number;
}

export interface TimeOption {
	value: string;
	label: string;
}

export interface EventDuration {
	startDate?: Date;
	endDate?: Date;
	startTime?: string;
	endTime?: string;
}

export type EventStyle = {
	value: EventColor;
	label: string;
	bgClass: string;
};
