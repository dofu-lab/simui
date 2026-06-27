import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-15',
	imports: [NgIcon, HlmSliderImports, HlmLabelImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucideMinus, lucidePlus })],
	host: { class: 'w-full' },
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>{{ value() }} credits/month</span>
		</div>
		<div class="flex items-center gap-2">
			<button
				hlmBtn
				size="icon"
				variant="outline"
				class="size-8"
				[disabled]="value()[0] === 0"
				(click)="onDecreaseCredits()">
				<ng-icon hlm name="lucideMinus" size="sm" />
			</button>
			<hlm-slider [min]="0" [max]="200" [step]="5" [(value)]="value" />
			<button
				hlmBtn
				size="icon"
				variant="outline"
				class="size-8"
				[disabled]="value()[0] === 200"
				(click)="onIncreaseCredits()">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
		</div>
	`,
})
export class Slider15Component {
	protected readonly value = signal([50]);

	protected onDecreaseCredits(): void {
		if (this.value()[0] === 0) {
			return;
		}
		this.value.update((value) => [value[0] - 5]);
	}

	protected onIncreaseCredits(): void {
		if (this.value()[0] === 200) {
			return;
		}
		this.value.update((value) => [value[0] + 5]);
	}
}
