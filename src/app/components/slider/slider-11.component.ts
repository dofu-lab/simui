import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRotateCcw } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-11',
	imports: [HlmSlider, HlmLabel, NgIcon, HlmIcon, HlmInput, HlmButton, FormsModule],
	providers: [provideIcons({ lucideRotateCcw })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Temperature</span>
			<div class="flex gap-1">
				@if (value() !== defaultTemperature) {
					<button hlmBtn size="icon" class="size-7" variant="ghost" (click)="onReset()">
						<ng-icon hlm name="lucideRotateCcw" size="sm" />
					</button>
				}
				<input
					hlmInput
					class="h-7 w-12 px-2 py-0"
					[min]="min"
					[max]="max"
					[ngModel]="value()"
					(ngModelChange)="value.set($event)" />
			</div>
		</div>
		<hlm-slider [min]="min" [max]="max" [step]="0.01" [(value)]="value" />
	`,
})
export class Slider11Component {
	public readonly defaultTemperature = 1;
	public readonly initialTemperature = 1.25;
	public readonly min = 0;
	public readonly max = 2;
	public readonly value = signal(this.initialTemperature);

	public onReset(): void {
		this.value.set(this.defaultTemperature);
	}
}

export const slider11Code = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRotateCcw } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-11',
	imports: [HlmSlider, HlmLabel, NgIcon, HlmIcon, HlmInput, HlmButton, FormsModule],
	providers: [provideIcons({ lucideRotateCcw })],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Temperature</span>
			<div class="flex gap-1">
				@if (value() !== defaultTemperature) {
					<button hlmBtn size="icon" class="size-7" variant="ghost" (click)="onReset()">
						<ng-icon hlm name="lucideRotateCcw" size="sm" />
					</button>
				}
				<input
					hlmInput
					class="h-7 w-12 px-2 py-0"
					[min]="min"
					[max]="max"
					[ngModel]="value()"
					(ngModelChange)="value.set($event)" />
			</div>
		</div>
		<hlm-slider [min]="min" [max]="max" [step]="0.01" [(value)]="value" />
	\`,
})
export class Slider11Component {
	public readonly defaultTemperature = 1;
	public readonly initialTemperature = 1.25;
	public readonly min = 0;
	public readonly max = 2;
	public readonly value = signal(this.initialTemperature);

	public onReset(): void {
		this.value.set(this.defaultTemperature);
	}
}`;
