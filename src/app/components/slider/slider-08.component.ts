import { Component, signal } from '@angular/core';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-08',
	imports: [HlmSliderImports, HlmLabelImports],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Slider with output</span>
			<span hlmLabel>{{ value() }}</span>
		</div>
		<hlm-slider [(value)]="value" />
	`,
})
export class Slider08Component {
	public readonly value = signal([25]);
}
