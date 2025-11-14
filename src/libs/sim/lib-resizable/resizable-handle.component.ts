import { Component, computed, inject, input, output } from '@angular/core';
import { ClassValue } from 'clsx';
import { CursorService } from './cursor.service';
import { ResizablePanelGroupComponent } from './resizable-panel-group.component';

@Component({
	selector: 'resizable-handle',
	providers: [CursorService],
	template: `
		<ng-content></ng-content>
	`,
	host: {
		'[id]': 'id',
		'[class]': 'userClass()',
		'[attr.data-panel-group-direction]': 'layout()',
		'[style.cursor]': 'cursorStyle()',
		'(mousedown)': 'handleMouseDown($event)',
		'(touchstart)': 'handleMouseDown($event)',
		'(mouseup)': 'stopDragging()',
		'(touchend)': 'stopDragging()',
	},
})
export class ResizableHandleComponent {
	private readonly resizable = inject(ResizablePanelGroupComponent, { optional: true });
	private readonly cursorService = inject(CursorService);
	public readonly id = `resizable-handle-${crypto.randomUUID()}`;

	public readonly userClass = input<ClassValue>('');
	public readonly disabled = input(false);
	public readonly handlerIndex = input<number>(0);

	public readonly onDragging = output<boolean>();

	public readonly layout = computed(() => this.resizable?.layout() || 'horizontal');
	public readonly cursorStyle = computed(() => this.cursorService.getCursorStyle(this.layout()));

	handleMouseDown(event: MouseEvent): void {
		if (this.disabled() || !this.resizable) {
			return;
		}

		this.onDragging.emit(true);
		this.resizable.startResize(this.id, event);
	}

	stopDragging(): void {
		this.onDragging.emit(false);
	}
}
