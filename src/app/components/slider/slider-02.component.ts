import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-02',
	imports: [HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Disabled slider</span>
		<hlm-slider disabled [(value)]="value" />
	`,
})
export class Slider02Component {
	public readonly value = signal(25);
}