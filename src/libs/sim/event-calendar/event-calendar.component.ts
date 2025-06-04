import { HlmButtonDirective } from '@/libs/ui/ui-button-helm/src';
import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import {
	HlmMenuComponent,
	HlmMenuGroupComponent,
	HlmMenuItemDirective,
	HlmMenuLabelComponent,
	HlmMenuShortcutComponent,
} from '@/libs/ui/ui-menu-helm/src';
import { Component, computed, input, output, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
	addDays,
	addMonths,
	addWeeks,
	endOfWeek,
	format,
	isSameMonth,
	startOfWeek,
	subMonths,
	subWeeks,
} from 'date-fns';
import { AgendaViewComponent } from './agenda-view.component';
import { AgendaDaysToShow } from './constants';
import { DayViewCalendarComponent } from './day-view-calendar.component';
import { MonthViewCalendarComponent } from './month-view-calendar.component';
import { CalendarEvent, CalendarView } from './type';
import { addHoursToDate } from './utils';
import { WeekViewCalendarComponent } from './week-view-calendar.component';

@Component({
	selector: 'sim-event-calendar',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmButtonDirective,
		MonthViewCalendarComponent,
		WeekViewCalendarComponent,
		DayViewCalendarComponent,
		AgendaViewComponent,
		BrnMenuTriggerDirective,
		HlmMenuComponent,
		HlmMenuLabelComponent,
		HlmMenuItemDirective,
		HlmMenuGroupComponent,
		HlmMenuShortcutComponent,
	],
	providers: [provideIcons({ lucideChevronLeft, lucideChevronRight, lucideChevronDown })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-col rounded-lg border has-data-[slot=month-view]:flex-1">
			<div class="flex items-center justify-between p-2 sm:p-4">
				<div class="flex items-center justify-start gap-1 sm:gap-4">
					<button hlmBtn variant="outline" (click)="handleToday()">Today</button>
					<div class="flex items-center sm:gap-2">
						<button hlmBtn variant="ghost" size="icon">
							<ng-icon hlm name="lucideChevronLeft" (click)="handlePrevious()" />
						</button>
						<button hlmBtn variant="ghost" size="icon">
							<ng-icon hlm name="lucideChevronRight" (click)="handleNext()" />
						</button>
					</div>
					<h2 class="text-sm font-semibold sm:text-lg md:text-xl">
						{{ viewTitle() }}
					</h2>
				</div>
				<div class="flex items-center gap-2">
					<button hlmBtn variant="outline" [brnMenuTriggerFor]="menu">
						Open
						<ng-icon name="lucideChevronDown" />
					</button>

					<ng-template #menu>
						<hlm-menu class="">
							<hlm-menu-group>
								<button hlmMenuItem (click)="view.set('day')">
									Day
									<hlm-menu-shortcut>⌘D</hlm-menu-shortcut>
								</button>
								<button hlmMenuItem (click)="view.set('week')">
									Week
									<hlm-menu-shortcut>⌘W</hlm-menu-shortcut>
								</button>
								<button hlmMenuItem (click)="view.set('month')">
									Month
									<hlm-menu-shortcut>⌘M</hlm-menu-shortcut>
								</button>
								<button hlmMenuItem (click)="view.set('agenda')">
									Agenda
									<hlm-menu-shortcut>⌘M</hlm-menu-shortcut>
								</button>
							</hlm-menu-group>
						</hlm-menu>
					</ng-template>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				@if (this.view() === 'month') {
					<sim-month-view-calendar
						[currentDate]="currentDate()"
						[events]="events()"
						(onEventCreate)="handleEventCreate($event)"
						(onEventSelect)="handleEventSelect($event)" />
				} @else if (this.view() === 'week') {
					<sim-week-view-calendar
						[currentDate]="currentDate()"
						[events]="events()"
						(onEventCreate)="handleEventCreate($event)"
						(onEventSelect)="handleEventSelect($event)" />
				} @else if (this.view() === 'day') {
					<sim-day-view-calendar
						[currentDate]="currentDate()"
						[events]="events()"
						(onEventCreate)="handleEventCreate($event)"
						(onEventSelect)="handleEventSelect($event)" />
				} @else if (this.view() === 'agenda') {
					<sim-agenda-view
						[currentDate]="currentDate()"
						[events]="events()"
						(onEventCreate)="handleEventCreate($event)"
						(onEventSelect)="handleEventSelect($event)" />
				}
			</div>
		</div>
	`,
})
export class EventCalendarComponent {
	initialView = input<CalendarView>('month');
	events = input<CalendarEvent[]>([]);

	onEventUpdate = output<CalendarEvent>();
	onEventAdded = output<CalendarEvent>();
	onEventDelete = output<string>();

	currentDate = signal(new Date());
	view = signal<CalendarView>(this.initialView());
	isEventDialogOpen = signal(false);
	selectedEvent = signal<CalendarEvent | null>(null);

	viewTitle = computed(() => {
		if (this.view() === 'month') {
			return format(this.currentDate(), 'MMMM yyyy');
		} else if (this.view() === 'week') {
			const start = startOfWeek(this.currentDate(), { weekStartsOn: 0 });
			const end = endOfWeek(this.currentDate(), { weekStartsOn: 0 });
			if (isSameMonth(start, end)) {
				return format(start, 'MMMM yyyy');
			} else {
				return `${format(start, 'MMM')} - ${format(end, 'MMM yyyy')}`;
			}
		} else if (this.view() === 'day') {
			return;
			//   (
			//     <>
			//       <span className="min-[480px]:hidden" aria-hidden="true">
			//         {format(currentDate, "MMM d, yyyy")}
			//       </span>
			//       <span className="max-[479px]:hidden min-md:hidden" aria-hidden="true">
			//         {format(currentDate, "MMMM d, yyyy")}
			//       </span>
			//       <span className="max-md:hidden">
			//         {format(currentDate, "EEE MMMM d, yyyy")}
			//       </span>
			//     </>
			//   )
		} else if (this.view() === 'agenda') {
			// Show the month range for agenda view
			const start = this.currentDate();
			const end = addDays(this.currentDate(), AgendaDaysToShow - 1);

			if (isSameMonth(start, end)) {
				return format(start, 'MMMM yyyy');
			} else {
				return `${format(start, 'MMM')} - ${format(end, 'MMM yyyy')}`;
			}
		} else {
			return format(this.currentDate(), 'MMMM yyyy');
		}
	});

	handlePrevious() {
		if (this.view() === 'month') {
			this.currentDate.set(subMonths(this.currentDate(), 1));
		} else if (this.view() === 'week') {
			this.currentDate.set(subWeeks(this.currentDate(), 1));
		} else if (this.view() === 'day') {
			this.currentDate.set(addDays(this.currentDate(), -1));
		} else if (this.view() === 'agenda') {
			// For agenda view, go back 30 days (a full month)
			this.currentDate.set(addDays(this.currentDate(), -AgendaDaysToShow));
		}
	}

	handleNext = () => {
		if (this.view() === 'month') {
			this.currentDate.set(addMonths(this.currentDate(), 1));
		} else if (this.view() === 'week') {
			this.currentDate.set(addWeeks(this.currentDate(), 1));
		} else if (this.view() === 'day') {
			this.currentDate.set(addDays(this.currentDate(), 1));
		} else if (this.view() === 'agenda') {
			// For agenda view, go forward 30 days (a full month)
			this.currentDate.set(addDays(this.currentDate(), AgendaDaysToShow));
		}
	};

	handleToday = () => {
		this.currentDate.set(new Date());
	};

	handleEventSelect = (event: CalendarEvent) => {
		console.log('Event selected:', event); // Debug log
		this.selectedEvent.set(event);
		this.isEventDialogOpen.set(true);
	};

	handleEventSave = (event: CalendarEvent) => {
		if (event.id) {
			this.onEventUpdate.emit(event);
			// Show toast notification when an event is updated
			// toast(`Event "${event.title}" updated`, {
			// 	description: format(new Date(event.start), 'MMM d, yyyy'),
			// 	position: 'bottom-left',
			// });
		} else {
			this.onEventAdded.emit({
				...event,
				id: Math.random().toString(36).substring(2, 11),
			});
			// Show toast notification when an event is added
			// toast(`Event "${event.title}" added`, {
			// 	description: format(new Date(event.start), 'MMM d, yyyy'),
			// 	position: 'bottom-left',
			// });
		}
		this.isEventDialogOpen.set(false);
		this.selectedEvent.set(null);
	};

	handleEventDelete = (eventId: string) => {
		const deletedEvent = this.events().find((e) => e.id === eventId);
		this.onEventDelete.emit(eventId);
		this.isEventDialogOpen.set(false);
		this.selectedEvent.set(null);

		// Show toast notification when an event is deleted
		if (deletedEvent) {
			// toast(`Event "${deletedEvent.title}" deleted`, {
			// 	description: format(new Date(deletedEvent.start), 'MMM d, yyyy'),
			// 	position: 'bottom-left',
			// });
		}
	};

	handleEventUpdate = (updatedEvent: CalendarEvent) => {
		this.onEventUpdate.emit(updatedEvent);

		// Show toast notification when an event is updated via drag and drop
		// toast(`Event "${updatedEvent.title}" moved`, {
		// 	description: format(new Date(updatedEvent.start), 'MMM d, yyyy'),
		// 	position: 'bottom-left',
		// });
	};

	handleEventCreate = (startTime: Date) => {
		console.log('Creating new event at:', startTime); // Debug log

		// Snap to 15-minute intervals
		const minutes = startTime.getMinutes();
		const remainder = minutes % 15;
		if (remainder !== 0) {
			if (remainder < 7.5) {
				// Round down to nearest 15 min
				startTime.setMinutes(minutes - remainder);
			} else {
				// Round up to nearest 15 min
				startTime.setMinutes(minutes + (15 - remainder));
			}
			startTime.setSeconds(0);
			startTime.setMilliseconds(0);
		}

		const newEvent: CalendarEvent = {
			id: '',
			title: '',
			start: startTime,
			end: addHoursToDate(startTime, 1),
			allDay: false,
		};
		this.selectedEvent.set(newEvent);
		this.isEventDialogOpen.set(true);
	};
}
