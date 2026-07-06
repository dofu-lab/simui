import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import { ClassValue } from 'clsx';
import { EventHeight } from './constants';
import { EventItemWrapperComponent } from './event-item-wrapper.component';
import { CalendarEvent, CalendarView } from './type';
import { formatTimeWithOptionalMinutes } from './utils';

@Component({
	selector: 'sim-event-item',
	imports: [EventItemWrapperComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<sim-event-item-wrapper
			[event]="event()"
			[isFirstDay]="isFirstDay()"
			[isLastDay]="isLastDay()"
			[class]="computedMonthClass()">
			<ng-content>
				@if (view() === 'month') {
					<span class="truncate">
						@if (!event().allDay) {
							<span class="truncate font-normal opacity-70 sm:text-[11px]">
								{{ displayTime() }}
							</span>
						}
						{{ event().title }}
					</span>
				} @else if (view() === 'week' || view() === 'day') {
					<div class="flex h-full flex-col items-start truncate py-1">
						<span>{{ event().title }}</span>
						@if (!event().allDay) {
							<span class="truncate font-normal opacity-70 sm:text-[11px]">
								{{ displayTime() }}
							</span>
						}
					</div>
				} @else {
					<div class="py-2">
						<div class="text-sm font-medium">{{ event().title }}</div>
						<div class="text-xs opacity-70">
							@if (event().allDay) {
								<span>All day</span>
							} @else {
								<span class="uppercase">
									{{ displayTime() }}
								</span>
							}

							@if (event().location) {
								<span class="px-1 opacity-35">·</span>
								<span>{{ event().location }}</span>
							}
						</div>
						@if (event().description) {
							<div class="my-1 text-xs opacity-90">{{ event().description }}</div>
						}
					</div>
				}
			</ng-content>
		</sim-event-item-wrapper>
	`,
})
export class EventItemComponent {
	public readonly event = input.required<CalendarEvent>();
	public readonly view = input.required<CalendarView>();
	public readonly isDragging = input<boolean>(false);
	public readonly showTime = input<boolean>(false);
	public readonly currentTime = input<Date>();
	public readonly isFirstDay = input<boolean>(false);
	public readonly isLastDay = input<boolean>(false);
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly height = input<number>(EventHeight);

	protected readonly computedMonthClass = computed(() => {
		return hlm('items-center text-[10px] sm:text-xs', `h-${this.height() / 4}`, this.userClass());
	});
	private readonly displayStart = computed(() => this.currentTime() || new Date(this.event().start));
	private readonly displayEnd = computed(() => {
		const currentTime = this.currentTime();
		return currentTime
			? new Date(
					new Date(currentTime).getTime() +
						(new Date(this.event().end).getTime() - new Date(this.event().start).getTime()),
				)
			: new Date(this.event().end);
	});

	protected readonly displayTime = computed(() => {
		if (this.view() === 'month') {
			return formatTimeWithOptionalMinutes(this.displayStart());
		}

		return `${formatTimeWithOptionalMinutes(this.displayStart())} - ${formatTimeWithOptionalMinutes(this.displayEnd())}`;
	});
	protected readonly formatTimeWithOptionalMinutes = formatTimeWithOptionalMinutes;
}
