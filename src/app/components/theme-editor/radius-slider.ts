import { ThemeService, ThemeStorageService } from '@/app/core/services';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';
import { debounceTime, Subject } from 'rxjs';

@Component({
	selector: 'sim-radius-slider',
	imports: [HlmSlider, HlmLabel, HlmInput, FormsModule],
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Radius</span>
			<div class="flex gap-1">
				<input
					hlmInput
					class="h-7 w-20 px-2 py-0"
					[min]="min"
					[max]="max"
					[ngModel]="value()"
					(ngModelChange)="onRadiusChange($event)" />
				<span class="flex items-center">rem</span>
			</div>
		</div>
		<hlm-slider [min]="min" [max]="max" [step]="0.01" [ngModel]="value()" (ngModelChange)="onRadiusChange($event)" />
	`,
})
export class RadiusSliderComponent {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly radiusSubject$ = new Subject<number>();

	private currentRadius = computed(() => {
		const preset = this.themeStorageService.currentThemeStyles();
		return preset?.radius ? parseFloat(preset.radius.replace('rem', '')) : this.defaultRadius;
	});
	private readonly defaultRadius = 1;

	protected readonly min = 0;
	protected readonly max = 5;
	protected readonly value = signal<number>(this.currentRadius());

	constructor() {
		effect(() => {
			this.value.set(this.currentRadius());
		});

		this.radiusSubject$.pipe(debounceTime(500), takeUntilDestroyed()).subscribe((radius) => {
			this.themeStorageService.changeColor('radius', `${radius}rem`);
		});
	}

	protected onRadiusChange(radius: number): void {
		this.value.set(radius);
		this.themeService.applyRadius(`${radius}rem`);

		this.radiusSubject$.next(radius);
	}
}
