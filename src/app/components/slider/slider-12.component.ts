import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { lucideRotateCcw } from '@ng-icons/lucide';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-12',
	imports: [HlmSliderImports, HlmLabelImports, HlmInputImports, FormsModule],
	providers: [provideIcons({ lucideRotateCcw })],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with input</span>
		<div class="flex items-center justify-between gap-2">
			<hlm-slider [(value)]="value" />
			<input hlmInput class="h-7 w-12 shrink-0 px-2 py-0" [ngModel]="value()" (ngModelChange)="value.set($event)" />
		</div>
	`,
})
export class Slider12Component {
	public readonly value = signal([45]);
}
