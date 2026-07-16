import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';
import { injectColorPicker } from './color-picker.token';
import { COLOR_PICKER_KEYBOARD_LARGE_STEP, COLOR_PICKER_KEYBOARD_STEP } from './constants';
import { formatColor } from './utils';

@Component({
	selector: 'sim-color-area',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'data-slot': 'color-area',
		role: 'slider',
		tabindex: '0',
		'aria-label': 'Saturation and brightness',
		'aria-valuemin': '0',
		'aria-valuemax': '100',
		'[attr.aria-valuenow]': 'Math.round(picker.state().s)',
		'[attr.aria-valuetext]': 'saturationValueText()',
		'(pointerdown)': 'onPointerDown($event)',
		'(pointermove)': 'onPointerMove($event)',
		'(pointerup)': 'onPointerEnd($event)',
		'(pointercancel)': 'onPointerEnd($event)',
		'(lostpointercapture)': 'onLostPointerCapture($event)',
		'(keydown)': 'onKeydown($event)',
	},
	template: `
		<div
			class="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
			[style.background]="surfaceBackground()"></div>
		<span
			class="ring-ring pointer-events-none absolute z-5 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-sm ring-1 motion-reduce:transition-none"
			[style.left.%]="picker.state().s"
			[style.top.%]="100 - picker.state().v"
			[style.backgroundColor]="thumbColor()"></span>
	`,
})
export class ColorAreaComponent {
	private activePointerId: number | null = null;

	protected readonly Math = Math;
	protected readonly picker = injectColorPicker();
	protected readonly surfaceBackground = computed(
		() =>
			`linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${Math.round(this.picker.state().h)} 100% 50%)`,
	);
	protected readonly thumbColor = computed(() => formatColor({ ...this.picker.state(), a: 1 }, 'rgb'));
	protected readonly saturationValueText = computed(
		() => `${Math.round(this.picker.state().s)}% saturation, ${Math.round(this.picker.state().v)}% brightness`,
	);

	constructor() {
		classes(
			() =>
				'ring-ring relative block aspect-square w-full touch-none rounded-lg outline-none select-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none',
		);
	}

	protected onPointerDown(event: PointerEvent): void {
		if (this.activePointerId !== null) return;
		this.activePointerId = event.pointerId;
		(event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
		this.updateFromPointer(event);
	}

	protected onPointerMove(event: PointerEvent): void {
		if (event.pointerId === this.activePointerId) this.updateFromPointer(event);
	}

	protected onPointerEnd(event: PointerEvent): void {
		if (event.pointerId !== this.activePointerId) return;
		const target = event.currentTarget as HTMLElement;
		if (target.hasPointerCapture?.(event.pointerId)) target.releasePointerCapture(event.pointerId);
		this.activePointerId = null;
	}

	protected onLostPointerCapture(event: PointerEvent): void {
		if (event.pointerId === this.activePointerId) this.activePointerId = null;
	}

	protected onKeydown(event: KeyboardEvent): void {
		const step = event.shiftKey ? COLOR_PICKER_KEYBOARD_LARGE_STEP : COLOR_PICKER_KEYBOARD_STEP;
		let { s, v } = this.picker.state();
		switch (event.key) {
			case 'ArrowLeft':
				s -= step;
				break;
			case 'ArrowRight':
				s += step;
				break;
			case 'ArrowDown':
				v -= step;
				break;
			case 'ArrowUp':
				v += step;
				break;
			default:
				return;
		}
		event.preventDefault();
		this.picker.commit({ ...this.picker.state(), s, v });
	}

	private updateFromPointer(event: PointerEvent): void {
		const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
		if (rect.width <= 0 || rect.height <= 0) return;
		this.picker.commit({
			...this.picker.state(),
			s: ((event.clientX - rect.left) / rect.width) * 100,
			v: 100 - ((event.clientY - rect.top) / rect.height) * 100,
		});
	}
}
