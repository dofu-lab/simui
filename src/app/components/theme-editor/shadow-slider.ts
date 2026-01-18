import { ThemeService, ThemeStorageService } from '@/app/core/services';
import { ThemeStyleProps } from '@/app/types';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';
import { debounceTime, Subject } from 'rxjs';

const DEBOUNCE_TIME = 1000;

type ShadowKey = 'shadow-opacity' | 'shadow-blur' | 'shadow-spread' | 'shadow-offset-x' | 'shadow-offset-y';

@Component({
	selector: 'sim-shadow-slider',
	imports: [HlmSlider, HlmLabel, HlmInput, FormsModule],
	template: `
		<div class="mb-2 flex items-center justify-between">
			<span hlmLabel class="text-xs">{{ label() }}</span>
			<div class="flex gap-1">
				<input
					[attr.aria-label]="label() + ' value'"
					hlmInput
					class="h-7 w-20 px-2 py-0"
					type="number"
					[min]="min()"
					[max]="max()"
					[step]="step()"
					[ngModel]="value()"
					(ngModelChange)="onValueChange($event)" />
				@if (unit()) {
					<span class="text-muted-foreground flex items-center text-xs">{{ unit() }}</span>
				}
			</div>
		</div>
		<hlm-slider
			[min]="min()"
			[max]="max()"
			[step]="step()"
			[ngModel]="value()"
			(ngModelChange)="onValueChange($event)" />
	`,
})
export class ShadowSliderComponent {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly valueSubject$ = new Subject<number>();

	readonly label = input.required<string>();
	readonly cssKey = input.required<ShadowKey>();
	readonly min = input<number>(0);
	readonly max = input<number>(50);
	readonly step = input<number>(0.5);
	readonly unit = input<string>('px');
	readonly defaultValue = input<number>(0);

	private readonly currentValue = computed(() => {
		const preset = this.themeStorageService.currentThemeStyles();
		const key = this.cssKey();
		if (preset?.[key]) {
			const rawValue = preset[key];
			// Parse numeric value, removing unit if present
			return Number.parseFloat(rawValue.replaceAll(/[^-\d.]/g, '')) || this.defaultValue();
		}
		return this.defaultValue();
	});

	protected readonly value = signal<number>(0);

	constructor() {
		effect(() => {
			this.value.set(this.currentValue());
		});

		this.valueSubject$.pipe(debounceTime(DEBOUNCE_TIME), takeUntilDestroyed()).subscribe((newValue) => {
			const key = this.cssKey();
			const unit = this.unit();
			const formattedValue = unit ? `${newValue}${unit}` : `${newValue}`;
			this.themeStorageService.changeColor(key as keyof ThemeStyleProps, formattedValue, 'CHANGE_PROPERTY');
		});
	}

	protected onValueChange(newValue: number): void {
		try {
			const clampedValue = Math.min(Math.max(newValue, this.min()), this.max());
			this.value.set(clampedValue);

			const key = this.cssKey();
			const unit = this.unit();
			const formattedValue = unit ? `${clampedValue}${unit}` : `${clampedValue}`;

			// Apply the individual shadow property
			this.themeService.applyShadow(key, formattedValue);

			// Rebuild all shadow variants with updated styles
			const currentStyles = this.themeStorageService.currentThemeStyles();
			if (currentStyles) {
				const updatedStyles = { ...currentStyles, [key]: formattedValue };
				this.themeService.applyShadowVariables(updatedStyles);
			}

			this.valueSubject$.next(clampedValue);
		} catch (error) {
			console.error('Failed to update shadow value:', error);
		}
	}
}
