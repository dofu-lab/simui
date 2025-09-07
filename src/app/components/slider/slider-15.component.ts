import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-15',
	imports: [HlmSlider, HlmLabel, HlmButton, HlmIcon, NgIcon],
	providers: [provideIcons({ lucideMinus, lucidePlus })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>{{ value() }} credits/month</span>
		</div>
		<div class="flex items-center gap-2">
			<button hlmBtn size="icon" variant="outline" class="size-8" (click)="onDecreaseCredits()">
				<ng-icon hlm name="lucideMinus" size="sm" />
			</button>
			<hlm-slider [min]="0" [max]="200" [step]="5" [(value)]="value" />
			<button hlmBtn size="icon" variant="outline" class="size-8" (click)="onIncreaseCredits()">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
		</div>
	`,
})
export class Slider15Component {
	public readonly value = signal(50);

	public onDecreaseCredits(): void {
		this.value.update((value) => value - 5);
	}

	public onIncreaseCredits(): void {
		this.value.update((value) => value + 5);
	}
}

export const slider15Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-15',
	imports: [HlmSlider, HlmLabel, HlmButton, HlmIcon, NgIcon],
	providers: [provideIcons({ lucideMinus, lucidePlus })],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>{{ value() }} credits/month</span>
		</div>
		<div class="flex items-center gap-2">
			<button hlmBtn size="icon" variant="outline" class="size-8" (click)="onDecreaseCredits()">
				<ng-icon hlm name="lucideMinus" size="sm" />
			</button>
			<hlm-slider [min]="0" [max]="200" [step]="5" [(value)]="value" />
			<button hlmBtn size="icon" variant="outline" class="size-8" (click)="onIncreaseCredits()">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
		</div>
	\`,
})
export class Slider15Component {
	public readonly value = signal(50);

	public onDecreaseCredits(): void {
		this.value.update((value) => value - 5);
	}

	public onIncreaseCredits(): void {
		this.value.update((value) => value + 5);
	}
}`;
