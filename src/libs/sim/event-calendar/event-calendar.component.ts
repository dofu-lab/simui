import {
	HlmMenuComponent,
	HlmMenuGroupComponent,
	HlmMenuItemDirective,
	HlmMenuShortcutComponent,
} from '@/libs/ui/ui-menu-helm/src';
import { DatePipe, TitleCasePipe } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	HostListener,
	input,
	output,
	signal,
	viewChild,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronLeft, lucideChevronRight, lucidePlus } from '@ng-icons/lucide';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
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
import { EventDialogComponent } from './event-dialog.component';
import { MonthViewCalendarComponent } from './month-view-calendar.component';
import { CalendarEvent, CalendarView, EventDuration } from './type';
import { addHoursToDate } from './utils';
import { WeekViewCalendarComponent } from './week-view-calendar.component';

import { toast } from 'ngx-sonner';
@Component({
	selector: 'sim-event-calendar',
	imports: [
		NgIcon,
		DatePipe,
		TitleCasePipe,
		HlmIconDirective,
		HlmButtonDirective,
		MonthViewCalendarComponent,
		WeekViewCalendarComponent,
		DayViewCalendarComponent,
		AgendaViewComponent,
		BrnMenuTriggerDirective,
		HlmMenuComponent,
		HlmMenuItemDirective,
		HlmMenuGroupComponent,
		HlmMenuShortcutComponent,
		EventDialogComponent,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [provideIcons({ lucideChevronLeft, lucideChevronRight, lucideChevronDown, lucidePlus })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-col rounded-lg border has-data-[slot=month-view]:flex-1">
			<div class="flex items-center justify-between p-2 sm:p-4">
				<div class="flex items-center justify-start gap-1 sm:gap-4">
					<button hlmBtn variant="outline" size="sm" (click)="handleToday()">Today</button>
					<div class="flex items-center sm:gap-2">
						<button hlmBtn variant="ghost" size="icon" class="size-9" (click)="handlePrevious()">
							<ng-icon hlm name="lucideChevronLeft" />
						</button>
						<button hlmBtn variant="ghost" size="icon" class="size-9" (click)="handleNext()">
							<ng-icon hlm name="lucideChevronRight" />
						</button>
					</div>
					<h2 class="text-sm font-semibold sm:text-lg md:text-xl">
						@if (this.view() === 'day') {
							<span class="min-[480px]:hidden" aria-hidden="true">
								{{ currentDate() | date: 'MMM d, yyyy' }}
							</span>
							<span class="max-[479px]:hidden min-md:hidden" aria-hidden="true">
								{{ currentDate() | date: 'MMMM d, yyyy' }}
							</span>
							<span class="max-md:hidden">
								{{ currentDate() | date: 'EEE MMMM d, yyyy' }}
							</span>
						} @else {
							{{ viewTitle() }}
						}
					</h2>
				</div>
				<div class="flex items-center gap-2">
					<button hlmBtn class="flex gap-2" variant="outline" size="sm" [brnMenuTriggerFor]="menu">
						{{ view() | titlecase }}
						<ng-icon name="lucideChevronDown" />
					</button>
					<sim-event-dialog
						#eventDialog
						[shouldShowButton]="false"
						(onEventAdded)="handleEventAdded($event)"
						(onEventUpdated)="handleEventUpdate($event)" />
					<ng-template #menu>
						<hlm-menu class="">
							<hlm-menu-group>
								<button hlmMenuItem (click)="view.set('month')">
									Month
									<hlm-menu-shortcut>Ctrl+M</hlm-menu-shortcut>
								</button>
								<button hlmMenuItem (click)="view.set('week')">
									Week
									<hlm-menu-shortcut>Ctrl+W</hlm-menu-shortcut>
								</button>
								<button hlmMenuItem (click)="view.set('day')">
									Day
									<hlm-menu-shortcut>Ctrl+D</hlm-menu-shortcut>
								</button>
								<button hlmMenuItem (click)="view.set('agenda')">
									Agenda
									<hlm-menu-shortcut>Ctrl+A</hlm-menu-shortcut>
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
						(onEventUpdated)="handleEventUpdate($event)"
						(onEventCreate)="handleEventCreateFromCalendar($event)"
						(onEventSelect)="handleEventSelect($event)" />
				} @else if (this.view() === 'week') {
					<sim-week-view-calendar
						[currentDate]="currentDate()"
						[events]="events()"
						(onEventUpdated)="handleEventUpdate($event)"
						(onEventCreate)="handleEventCreateFromCalendar($event)"
						(onEventSelect)="handleEventSelect($event)" />
				} @else if (this.view() === 'day') {
					<sim-day-view-calendar
						[currentDate]="currentDate()"
						[events]="events()"
						(onEventUpdated)="handleEventUpdate($event)"
						(onEventCreate)="handleEventCreateFromCalendar($event)"
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
	eventDialog = viewChild(EventDialogComponent);

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

	@HostListener('window:keydown', ['$event'])
	public onKeyDown(event: KeyboardEvent): void {
		if (!event.ctrlKey) return;

		switch (event.key.toLowerCase()) {
			case 'M':
			case 'm':
				this.view.set('month');
				event.preventDefault();
				break;
			case 'W':
			case 'w':
				this.view.set('week');
				event.preventDefault();
				break;
			case 'D':
			case 'd':
				this.view.set('day');
				event.preventDefault();
				break;
			case 'A':
			case 'a':
				this.view.set('agenda');
				event.preventDefault();
				break;
		}
	}

	public handlePrevious(): void {
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

	public handleNext(): void {
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
	}

	public handleToday(): void {
		this.currentDate.set(new Date());
	}

	public handleEventSelect(event: CalendarEvent): void {
		this.selectedEvent.set(event);
		this.eventDialog()?.editEvent(event);
	}

	public handleEventDelete(eventId: string): void {
		const deletedEvent = this.events().find((e) => e.id === eventId);
		this.onEventDelete.emit(eventId);
		this.isEventDialogOpen.set(false);
		this.selectedEvent.set(null);

		// Show toast notification when an event is deleted
		if (deletedEvent) {
			toast(`Event "${deletedEvent.title}" deleted`, {
				description: format(new Date(deletedEvent.start), 'MMM d, yyyy'),
				position: 'bottom-left',
			});
		}
	}

	public handleEventUpdate(updatedEvent: CalendarEvent): void {
		this.onEventUpdate.emit(updatedEvent);

		// Show toast notification when an event is updated via drag and drop
		toast(`Event "${updatedEvent.title}" moved`, {
			description: format(new Date(updatedEvent.start), 'MMM d, yyyy'),
			position: 'bottom-left',
		});
	}

	public handleEventCreate(startTime: Date): void {
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
	}

	public handleEventAdded(event: CalendarEvent): void {
		this.onEventAdded.emit(event);
	}

	/**
	 * Handle event creation from calendar views (when clicking on a day/time slot)
	 * This will trigger the event dialog to open
	 */
	handleEventCreateFromCalendar = (duration: EventDuration) => {
		// Open the dialog programmatically with the selected date
		if (!duration.startDate) {
			toast.error('Invalid start time for new event');
			return;
		}
		this.eventDialog()?.openDialog(duration, this.view() === 'month');
	};
}
