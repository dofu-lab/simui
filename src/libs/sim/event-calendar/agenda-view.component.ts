import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendarMinus2 } from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { addDays, isToday } from 'date-fns';
import { buildDayBuckets, getDayKey, normalizeCalendarEvents } from './calendar-view-model';
import { AgendaDaysToShow } from './constants';
import { EventItemComponent } from './event-item.component';
import { CalendarEvent } from './type';

@Component({
	selector: 'sim-agenda-view',
	imports: [NgIcon, DatePipe, EventItemComponent, HlmIconImports],
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
				@for (day of days(); track day.key) {
					@if (day.events.length > 0) {
						<div class="border-border/70 relative my-12 border-t">
							<span
								class="bg-background absolute -top-3 left-0 flex h-6 items-center pe-4 text-[10px] uppercase data-today:font-medium sm:pe-4 sm:text-xs"
								[attr.data-today]="isToday(day.date) || undefined">
								{{ day.date | date: 'd MMM, EEEE' }}
							</span>
							<div class="mt-6 flex flex-col gap-2">
								@for (event of day.events; track event.id) {
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
	public readonly currentDate = input.required<Date>();
	public readonly events = input.required<CalendarEvent[]>();

	public readonly onEventSelect = output<CalendarEvent>();
	public readonly onEventCreate = output<Date>();

	private readonly visibleDays = computed(() =>
		Array.from({ length: AgendaDaysToShow }, (_, i) => addDays(new Date(this.currentDate()), i)),
	);
	private readonly normalizedEvents = computed(() => normalizeCalendarEvents(this.events()));
	private readonly dayBuckets = computed(() => buildDayBuckets(this.visibleDays(), this.normalizedEvents()));
	protected readonly days = computed(() =>
		this.visibleDays()
			.map((day) => this.dayBuckets().get(getDayKey(day)))
			.filter((bucket) => bucket !== undefined),
	);
	protected readonly hasEvents = computed(() => this.days().some((day) => day.events.length > 0));
	protected readonly isToday = isToday;
}
