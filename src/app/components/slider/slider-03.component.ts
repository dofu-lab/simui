import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-03',
	imports: [HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with square thumb</span>
		<hlm-slider class="[&>span]:rounded" [(value)]="value" />
	`,
})
export class Slider03Component {
	public readonly value = signal(25);
}