import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-06',
	imports: [HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with reference labels</span>
		<hlm-slider [(value)]="value" />
		<div class="text-muted-foreground mt-4 flex items-center justify-between gap-1 text-xs">
			<span>5 GB</span>
			<span>20 GB</span>
			<span>35 GB</span>
		</div>
	`,
})
export class Slider06Component {
	public readonly value = signal(45);
}