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
	selector: 'sim-slider-16',
	imports: [HlmSlider, HlmLabel, FormsModule, HlmInput, NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideRotateCcw })],
	host: {
		class: 'w-full',
	},
	template: `
		<span hlmLabel class="mb-4">Object position</span>
		<div class="flex flex-col gap-3">
			<div class="flex items-center justify-between gap-2">
				<span class="text-muted-foreground text-xs">X</span>
				<hlm-slider class="[&>span]:rounded" [min]="-10" [max]="10" [(value)]="objectX" />
				<input
					hlmInput
					class="h-8 w-12 shrink-0 px-2 py-1"
					[ngModel]="objectX()"
					(ngModelChange)="objectX.set($event)" />
			</div>
			<div class="flex items-center justify-between gap-2">
				<span class="text-muted-foreground text-xs">Y</span>
				<hlm-slider class="[&>span]:rounded" [min]="-10" [max]="10" [(value)]="objectY" />
				<input
					hlmInput
					class="h-8 w-12 shrink-0 px-2 py-1"
					[ngModel]="objectY()"
					(ngModelChange)="objectY.set($event)" />
			</div>
			<div class="flex items-center justify-between gap-2">
				<span class="text-muted-foreground text-xs">Z</span>
				<hlm-slider class="[&>span]:rounded" [min]="-10" [max]="10" [(value)]="objectZ" />
				<input
					hlmInput
					class="h-8 w-12 shrink-0 px-2 py-1"
					[ngModel]="objectZ()"
					(ngModelChange)="objectZ.set($event)" />
			</div>
		</div>
		<button hlmBtn variant="outline" class="mt-4 w-full" (click)="onReset()">
			<ng-icon hlm name="lucideRotateCcw" size="sm" class="opacity-60" />
			Reset
		</button>
	`,
})
export class Slider16Component {
	public readonly initialObjectX = -2;
	public readonly initialObjectY = 4;
	public readonly initialObjectZ = 2;
	public readonly defaultObjectX = 0;
	public readonly defaultObjectY = 0;
	public readonly defaultObjectZ = 0;
	public readonly objectX = signal(this.initialObjectX);
	public readonly objectY = signal(this.initialObjectY);
	public readonly objectZ = signal(this.initialObjectZ);

	public onReset(): void {
		this.objectX.set(this.defaultObjectX);
		this.objectY.set(this.defaultObjectY);
		this.objectZ.set(this.defaultObjectZ);
	}
}

export const slider16Code = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRotateCcw } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-slider-16',
	imports: [HlmSlider, HlmLabel, FormsModule, HlmInput, NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideRotateCcw })],
	host: {
		class: 'w-full',
	},
	template: \`
		<span hlmLabel class="mb-4">Object position</span>
		<div class="flex flex-col gap-3">
			<div class="flex items-center justify-between gap-2">
				<span class="text-muted-foreground text-xs">X</span>
				<hlm-slider class="[&>span]:rounded" [min]="-10" [max]="10" [(value)]="objectX" />
				<input
					hlmInput
					class="h-8 w-12 shrink-0 px-2 py-1"
					[ngModel]="objectX()"
					(ngModelChange)="objectX.set($event)" />
			</div>
			<div class="flex items-center justify-between gap-2">
				<span class="text-muted-foreground text-xs">Y</span>
				<hlm-slider class="[&>span]:rounded" [min]="-10" [max]="10" [(value)]="objectY" />
				<input
					hlmInput
					class="h-8 w-12 shrink-0 px-2 py-1"
					[ngModel]="objectY()"
					(ngModelChange)="objectY.set($event)" />
			</div>
			<div class="flex items-center justify-between gap-2">
				<span class="text-muted-foreground text-xs">Z</span>
				<hlm-slider class="[&>span]:rounded" [min]="-10" [max]="10" [(value)]="objectZ" />
				<input
					hlmInput
					class="h-8 w-12 shrink-0 px-2 py-1"
					[ngModel]="objectZ()"
					(ngModelChange)="objectZ.set($event)" />
			</div>
		</div>
		<button hlmBtn variant="outline" class="mt-4 w-full" (click)="onReset()">
			<ng-icon hlm name="lucideRotateCcw" size="sm" class="opacity-60" />
			Reset
		</button>
	\`,
})
export class Slider16Component {
	public readonly initialObjectX = -2;
	public readonly initialObjectY = 4;
	public readonly initialObjectZ = 2;
	public readonly defaultObjectX = 0;
	public readonly defaultObjectY = 0;
	public readonly defaultObjectZ = 0;
	public readonly objectX = signal(this.initialObjectX);
	public readonly objectY = signal(this.initialObjectY);
	public readonly objectZ = signal(this.initialObjectZ);

	public onReset(): void {
		this.objectX.set(this.defaultObjectX);
		this.objectY.set(this.defaultObjectY);
		this.objectZ.set(this.defaultObjectZ);
	}
}`;
