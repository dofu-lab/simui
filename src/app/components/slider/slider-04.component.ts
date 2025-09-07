import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-04',
	imports: [HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with solid thumb</span>
		<hlm-slider class="[&>span]:bg-primary [&>div>div]:opacity-70" [(value)]="value" />
	`,
})
export class Slider04Component {
	public readonly value = signal(25);
}

export const slider04Code = `import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-04',
	imports: [HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: \`
		<span hlmLabel class="mb-4">Slider with solid thumb</span>
		<hlm-slider class="[&>span]:bg-primary [&>div>div]:opacity-70" [(value)]="value" />
	\`,
})
export class Slider04Component {
	public readonly value = signal(25);
}`;
