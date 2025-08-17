import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendarMinus2 } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { addDays, isToday } from 'date-fns';
import { AgendaDaysToShow } from './constants';
import { EventItemComponent } from './event-item.component';
import { CalendarEvent } from './type';
import { getAgendaEventsForDay } from './utils';

@Component({
	selector: 'sim-agenda-view',
	imports: [NgIcon, HlmIconDirective, DatePipe, EventItemComponent],
	providers: [provideIcons({ lucideCalendarMinus2 })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="border-border/70 border-t px-4">
			@if (!hasEvents()) {
				<div class="flex min-h-[70svh] flex-col items-center justify-center py-16 text-center">
					<ng-icon hlm size="lg" name="lucideCalendarMinus2" class="text-primary mb-2" />
					<h3 class="text-lg font-medium">No events found</h3>
					<p class="text-muted-foreground">There are no events scheduled for this time period.</p>
				</div>
			} @else {
				@for (day of days(); track day) {
					@if (getAgendaEventsForDay(day).length > 0) {
						<div class="border-border/70 relative my-12 border-t">
							<span
								class="bg-background absolute -top-3 left-0 flex h-6 items-center pe-4 text-[10px] uppercase data-today:font-medium sm:pe-4 sm:text-xs"
								[attr.data-today]="isToday(day) || undefined">
								{{ day | date: 'd MMM, EEEE' }}
							</span>
							<div class="mt-6 flex flex-col gap-2">
								@for (event of getAgendaEventsForDay(day); track event) {
									<sim-event-item view="agenda" class="h-fit flex-col items-start gap-1 rounded-sm" [event]="event" />
								}
							</div>
						</div>
					}
				}
			}
		</div>
	`,
})
export class AgendaViewComponent {
	currentDate = input.required<Date>();
	events = input.required<CalendarEvent[]>();

	onEventSelect = output<CalendarEvent>();
	onEventCreate = output<Date>();

	days = computed(() => Array.from({ length: AgendaDaysToShow }, (_, i) => addDays(new Date(this.currentDate()), i)));
	hasEvents = computed(() => this.days().some((day) => getAgendaEventsForDay(this.events(), day).length > 0));
	isToday = isToday;

	getAgendaEventsForDay(day: Date): CalendarEvent[] {
		return getAgendaEventsForDay(this.events(), day);
	}
}
