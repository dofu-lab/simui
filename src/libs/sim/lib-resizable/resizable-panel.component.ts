import { Component, ElementRef, inject, input, output } from '@angular/core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'resizable-panel',
	template: `
		<ng-content></ng-content>
	`,
	host: {
		'[class]': 'userClass()',
	},
})
export class ResizablePanelComponent {
	readonly elementRef = inject(ElementRef);
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly isCollapsed = input(false);
	public readonly defaultSize = input<string | number | undefined>(undefined);
	public readonly minSize = input(0);
	public readonly maxSize = input(100);

	public readonly onCollapse = output<void>();
	public readonly onExpand = output<void>();
	public readonly onResize = output<number>();
}
