import { Component, signal } from '@angular/core';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-04',
	imports: [HlmSliderImports, HlmLabelImports],
	host: { class: 'w-full' },
	template: `
		<span hlmLabel class="mb-4">Slider with solid thumb</span>
		<hlm-slider class="[&>span]:bg-primary [&>div>div]:opacity-70" [(value)]="value" />
	`,
})
export class Slider04Component {
	protected readonly value = signal([25]);
}
