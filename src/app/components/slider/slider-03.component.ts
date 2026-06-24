import { Component, signal } from '@angular/core';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-03',
	imports: [HlmSliderImports, HlmLabelImports],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with square thumb</span>
		<hlm-slider class="[&>div>span]:rounded" [(value)]="value" />
	`,
})
export class Slider03Component {
	public readonly value = signal([25]);
}
