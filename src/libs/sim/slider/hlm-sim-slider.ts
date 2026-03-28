import { ChangeDetectionStrategy, Component, computed, ElementRef, input, viewChild } from '@angular/core';
import { BrnSlider, BrnSliderRange, BrnSliderThumb, BrnSliderTrack, injectBrnSlider } from '@spartan-ng/brain/slider';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-sim-slider, brn-slider [hlm]',
	imports: [BrnSliderThumb, BrnSliderTrack, BrnSliderRange],
	changeDetection: ChangeDetectionStrategy.OnPush,
	hostDirectives: [
		{
			directive: BrnSlider,
			inputs: ['value', 'disabled', 'min', 'max', 'step'],
			outputs: ['valueChange'],
		},
	],
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		<div class="relative flex w-full items-center group-data-vertical:w-auto group-data-vertical:flex-col">
			<div #trackElement brnSliderTrack class="bg-muted relative h-9 w-full grow overflow-hidden rounded-[8px]">
				<div class="absolute top-1/2 z-2 flex w-full -translate-y-1/2 justify-between px-4">
					<div #sliderLabel class="text-muted-foreground font-medium">{{ label() }}</div>
					<div #sliderValue>{{ _slider.value() }}</div>
				</div>
				<div [class]="computedSliderRangeClass()" brnSliderRange></div>
			</div>

			@for (i of _slider.thumbIndexes(); track i) {
				<span brnSliderThumb></span>
			}
		</div>
	`,
})
export class HlmSimSlider {
	protected readonly _slider = injectBrnSlider();

	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly label = input<string>();

	readonly trackElement = viewChild<ElementRef<HTMLDivElement>>('trackElement');
	readonly sliderLabel = viewChild<ElementRef<HTMLDivElement>>('sliderLabel');
	readonly sliderValue = viewChild<ElementRef<HTMLDivElement>>('sliderValue');

	protected readonly _computedClass = computed(() =>
		hlm(
			'relative group flex w-full touch-none flex-col justify-center select-none',
			this._slider.mutableDisabled() ? 'opacity-40 pointer-events-none' : '',
			this.userClass(),
		),
	);

	protected readonly computedSliderRangeClass = computed(() => {
		const trackWidth = this.trackElement()?.nativeElement.offsetWidth ?? 0;
		const labelWidth = this.sliderLabel()?.nativeElement.offsetWidth ?? 0;
		const valueWidth = this.sliderValue()?.nativeElement.offsetWidth ?? 0;

		const values = this._slider.value() ?? [];
		const value = values[0] ?? 0;
		const min = this._slider.min() ?? 0;
		const max = this._slider.max() ?? 100;

		const percentage = max > min ? ((value - min) / (max - min)) * 100 : 0;
		const rangeSize = (percentage * trackWidth) / 100;
		const thumbPosition = rangeSize < 20 ? 'after:left-2' : '';

		const isLabelOverlap = !!this.label() && rangeSize >= 24 && rangeSize <= labelWidth + 30;
		const isValueOverlap = rangeSize >= trackWidth - valueWidth - 4 && rangeSize < trackWidth - 5;
		const thumbStyle = isLabelOverlap || isValueOverlap ? 'after:h-4 after:opacity-50' : '';

		return hlm(
			'bg-ring/30 after:bg-muted-foreground absolute h-full rounded-[8px] after:absolute after:rounded-full after:top-1/2 after:h-[60%] after:w-1 after:-translate-y-1/2 after:right-2 after:transition-all after:duration-200',
			thumbPosition,
			thumbStyle,
		);
	});
}
