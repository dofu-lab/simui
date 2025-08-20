import { Component, computed, input, output } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { ClassValue } from 'clsx';
import { isPast } from 'date-fns';
import { CalendarEvent } from './type';
import { getBorderRadiusClasses, getEventColorClasses } from './utils';

@Component({
	selector: 'sim-event-item-wrapper',
	template: `
		<button
			[class]="computedClass()"
			(click)="onClick.emit()"
			(mousedown)="onMouseDown.emit()"
			(touchstart)="onTouchStart.emit()">
			<ng-content />
		</button>
	`,
})
export class EventItemWrapperComponent {
	public readonly event = input.required<CalendarEvent>();
	public readonly isDragging = input<boolean>(false);
	public readonly showTime = input<boolean>(false);
	public readonly currentTime = input<Date>();
	public readonly isFirstDay = input<boolean>(false);
	public readonly isLastDay = input<boolean>(false);
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	onClick = output();
	onMouseDown = output();
	onTouchStart = output();

	public readonly isEventInPast = computed(() => {
		const currentTime = this.currentTime();
		const displayEnd = currentTime
			? new Date(
					new Date(currentTime).getTime() +
						(new Date(this.event().end).getTime() - new Date(this.event().start).getTime()),
				)
			: new Date(this.event().end);

		return isPast(displayEnd);
	});

	public computedClass = computed(() =>
		hlm(
			'focus-visible:border-ring focus-visible:ring-ring/50 flex size-full overflow-hidden px-1 text-left font-medium backdrop-blur-md transition outline-none select-none focus-visible:ring-[3px] data-dragging:cursor-grabbing data-dragging:shadow-lg data-past-event:line-through sm:px-2',
			getEventColorClasses(this.event().color),
			getBorderRadiusClasses(this.isFirstDay(), this.isLastDay()),
			this.userClass(),
		),
	);
}
