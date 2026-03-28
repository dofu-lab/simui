import { HlmSimSlider } from '@/libs/sim/slider/hlm-sim-slider';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';

@Component({
	selector: 'sim-slider-20',
	imports: [HlmSimSlider, FormsModule],
	providers: [provideIcons({ lucideMinus, lucidePlus })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-sim-slider
			label="Width"
			[min]="min"
			[max]="max"
			[step]="1"
			[ngModel]="value()"
			(ngModelChange)="value.set($event)" />
	`,
})
export class Slider20Component {
	public readonly value = signal([90]);
	protected readonly min = 0;
	protected readonly max = 1000;
}
