import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-05',
	imports: [HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with tiny thumb</span>
		<hlm-slider
			class="[&>span]:border-background [&>span]:bg-primary [&>span]:h-6 [&>span]:w-2.5 [&>span]:border-[3px] [&>span]:shadow-none [&>span]:ring-offset-0"
			[(value)]="value" />
	`,
})
export class Slider05Component {
	public readonly value = signal(25);
}