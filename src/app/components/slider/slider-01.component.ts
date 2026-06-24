import { Component, signal } from '@angular/core';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-01',
	imports: [HlmSliderImports, HlmLabelImports],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Simple slider</span>
		<hlm-slider [(value)]="value" />
	`,
})
export class Slider01Component {
	public readonly value = signal([25]);
}
