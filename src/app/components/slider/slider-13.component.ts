import { Component, computed, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideVolume2, lucideVolumeX } from '@ng-icons/lucide';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-13',
	imports: [HlmSlider, HlmLabel],
	providers: [provideIcons({ lucideVolumeX, lucideVolume2 })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Rate your experience</span>
			<span hlmLabel>{{ computedLabel() }}</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="text-2xl">😡</span>
			<hlm-slider [min]="1" [max]="5" [(value)]="value" />
			<span class="text-2xl">😍</span>
		</div>
	`,
})
export class Slider13Component {
	public readonly ratingLabels = ['Awful', 'Poor', 'Okay', 'Good', 'Amazing'];
	public readonly value = signal(3);
	public computedLabel = computed(() => this.ratingLabels[this.value() - 1]);
}

export const slider13Code = `import { Component, computed, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideVolume2, lucideVolumeX } from '@ng-icons/lucide';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-13',
	imports: [HlmSlider, HlmLabel],
	providers: [provideIcons({ lucideVolumeX, lucideVolume2 })],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Rate your experience</span>
			<span hlmLabel>{{ computedLabel() }}</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="text-2xl">😡</span>
			<hlm-slider [min]="1" [max]="5" [(value)]="value" />
			<span class="text-2xl">😍</span>
		</div>
	\`,
})
export class Slider13Component {
	public readonly ratingLabels = ['Awful', 'Poor', 'Okay', 'Good', 'Amazing'];
	public readonly value = signal(3);
	public computedLabel = computed(() => this.ratingLabels[this.value() - 1]);
}`;
