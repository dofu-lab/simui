import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideVolume2, lucideVolumeX } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-10',
	imports: [HlmSlider, HlmLabel, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideVolumeX, lucideVolume2 })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Volume</span>
			<span hlmLabel>{{ value() }}</span>
		</div>
		<div class="flex items-center gap-3">
			<ng-icon hlm name="lucideVolumeX" size="sm" class="shrink-0 opacity-60" />
			<hlm-slider [(value)]="value" />
			<ng-icon hlm name="lucideVolume2" size="sm" class="shrink-0 opacity-60" />
		</div>
	`,
})
export class Slider10Component {
	public readonly value = signal(45);
}