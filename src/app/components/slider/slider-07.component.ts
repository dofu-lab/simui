import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-07',
	imports: [NgClass, HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Slider with ticks</span>
		<hlm-slider [(value)]="value" [max]="max" />
		<div class="text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-2 text-xs font-medium">
			@for (tick of ticks; track tick) {
				<span class="flex w-0 flex-col items-center justify-center gap-2">
					<span class="bg-muted-foreground/70 h-1 w-px" [ngClass]="{ 'h-0.5!': tick % skipInterval !== 0 }"></span>
					<span [ngClass]="{ 'opacity-0': tick % skipInterval !== 0 }">
						{{ tick }}
					</span>
				</span>
			}
		</div>
	`,
})
export class Slider07Component {
	public readonly max = 12;
	public readonly skipInterval = 2;
	public readonly ticks = [...Array(this.max + 1)].map((_, i) => i);
	public readonly value = signal(4);
}

export const slider07Code = `import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-07',
	imports: [NgClass, HlmSlider, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: \`
		<span hlmLabel class="mb-4">Slider with ticks</span>
		<hlm-slider [(value)]="value" [max]="max" />
		<div class="text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-2 text-xs font-medium">
			@for (tick of ticks; track tick) {
				<span class="flex w-0 flex-col items-center justify-center gap-2">
					<span class="bg-muted-foreground/70 h-1 w-px" [ngClass]="{ 'h-0.5!': tick % skipInterval !== 0 }"></span>
					<span [ngClass]="{ 'opacity-0': tick % skipInterval !== 0 }">
						{{ tick }}
					</span>
				</span>
			}
		</div>
	\`,
})
export class Slider07Component {
	public readonly max = 12;
	public readonly skipInterval = 2;
	public readonly ticks = [...Array(this.max + 1)].map((_, i) => i);
	public readonly value = signal(4);
}`;
