import { Component, signal } from '@angular/core';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-02',
	imports: [HlmSliderImports, HlmLabelImports],
	host: { class: 'w-full' },
	template: `
		<span hlmLabel class="mb-4">Disabled slider</span>
		<hlm-slider disabled [(value)]="value" />
	`,
})
export class Slider02Component {
	protected readonly value = signal([25]);
}
