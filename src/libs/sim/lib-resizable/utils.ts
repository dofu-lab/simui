import { ElementRef } from '@angular/core';
import { PanelGroupDirection } from './type';

export function getEventPosition(event: MouseEvent | TouchEvent, layout: PanelGroupDirection): number {
	if (event instanceof MouseEvent) {
		return layout === 'vertical' ? event.clientY : event.clientX;
	} else {
		const touch = event.touches[0];
		return layout === 'vertical' ? touch.clientY : touch.clientX;
	}
}

export function convertToPercentage(value: number | string, containerSize: number): number {
	if (typeof value === 'number') {
		return value;
	}

	if (typeof value === 'string') {
		if (value.endsWith('%')) {
			return parseFloat(value);
		}
		if (value.endsWith('px')) {
			const pixels = parseFloat(value);
			return (pixels / containerSize) * 100;
		}
	}

	return parseFloat(value.toString()) || 0;
}

export function getContainerSize(elementRef: ElementRef, layout: PanelGroupDirection): number {
	const element = elementRef.nativeElement as HTMLElement;
	return layout === 'vertical' ? element.offsetHeight : element.offsetWidth;
}
