import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-19',
	imports: [HlmSliderImports, HlmLabelImports, NgIcon, HlmIconImports],
	providers: [provideIcons({ lucideMinus, lucidePlus })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Volume</span>
			<span hlmLabel>{{ value() }}</span>
		</div>
		<div class="bg-primary/15 flex items-center gap-3 rounded-full p-3">
			<ng-icon hlm name="lucideMinus" size="sm" class="shrink-0 opacity-60" />
			<hlm-slider [(value)]="value" />
			<ng-icon hlm name="lucidePlus" size="sm" class="shrink-0 opacity-60" />
		</div>
	`,
})
export class Slider19Component {
	public readonly value = signal([45]);
}
