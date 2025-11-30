import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-09',
	imports: [HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with labels</span>
		<div class="text-muted-foreground mb-3 flex items-center justify-between gap-1 text-xs">
			<span>Low</span>
			<span>High</span>
		</div>
		<hlm-slider [(value)]="value" />
	`,
})
export class Slider09Component {
	public readonly value = signal(45);
}