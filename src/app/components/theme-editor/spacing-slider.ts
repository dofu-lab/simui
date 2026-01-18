import { ThemeService, ThemeStorageService } from '@/app/core/services';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSlider } from '@spartan-ng/helm/slider';
import { debounceTime, Subject } from 'rxjs';

const DEBOUNCE_TIME = 1000;

@Component({
	selector: 'sim-spacing-slider',
	imports: [HlmSlider, HlmLabel, HlmInput, FormsModule],
	template: `
		<div class="mb-4 flex items-center justify-between">
			<span hlmLabel>Spacing</span>
			<div class="flex gap-1">
				<input
					aria-label="Spacing value in rem"
					hlmInput
					class="h-7 w-20 px-2 py-0"
					type="number"
					[min]="min"
					[max]="max"
					[ngModel]="value()"
					(ngModelChange)="onSpacingChange($event)" />
				<span class="flex items-center">rem</span>
			</div>
		</div>
		<hlm-slider [min]="min" [max]="max" [step]="0.01" [ngModel]="value()" (ngModelChange)="onSpacingChange($event)" />
	`,
})
export class SpacingSliderComponent {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly spacingSubject$ = new Subject<number>();

	private readonly currentSpacing = computed(() => {
		const preset = this.themeStorageService.currentThemeStyles();
		return preset?.spacing ? Number.parseFloat(preset.spacing.replace('rem', '')) : this.defaultSpacing;
	});
	private readonly defaultSpacing = 1;

	protected readonly min = 0.1;
	protected readonly max = 0.35;
	protected readonly value = signal<number>(this.currentSpacing());

	constructor() {
		effect(() => {
			this.value.set(this.currentSpacing());
		});

		this.spacingSubject$.pipe(debounceTime(DEBOUNCE_TIME), takeUntilDestroyed()).subscribe((spacing) => {
			this.themeStorageService.changeColor('spacing', `${spacing}rem`);
		});
	}

	protected onSpacingChange(spacing: number): void {
		try {
			const clampedSpacing = Math.min(Math.max(spacing, this.min), this.max);
			this.value.set(clampedSpacing);
			this.themeService.applySpacing(`${clampedSpacing}rem`);
			this.spacingSubject$.next(clampedSpacing);
		} catch (error) {
			console.error('Failed to update spacing:', error);
		}
	}
}
