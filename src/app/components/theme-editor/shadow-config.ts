import { ThemeService, ThemeStorageService } from '@/app/core/services';
import { ThemeStyleProps } from '@/app/types';
import { Component, computed, DestroyRef, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { debounceTime, distinctUntilChanged, merge, Subject } from 'rxjs';
import { ShadowSliderComponent } from './shadow-slider';

const DEBOUNCE_TIME = 1000;

@Component({
	selector: 'sim-shadow-config',
	imports: [HlmInput, HlmLabel, ReactiveFormsModule, ShadowSliderComponent],
	template: `
		<div class="space-y-6">
			<!-- Shadow Color -->
			<div class="flex w-full flex-col items-start gap-2">
				<label hlmLabel class="text-xs font-medium">Shadow Color</label>
				<div class="flex w-full items-center gap-2">
					<div
						[style.backgroundColor]="colorPicker.value"
						class="relative flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded border">
						<input
							type="color"
							class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
							[formControl]="colorPicker" />
					</div>
					<input hlmInput type="text" class="h-8" [formControl]="colorInput" />
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<!-- Blur Radius -->
				<sim-shadow-slider
					label="Blur Radius"
					cssKey="shadow-blur"
					[min]="0"
					[max]="50"
					[step]="0.5"
					unit="px"
					[defaultValue]="3" />

				<!-- Spread -->
				<sim-shadow-slider
					label="Spread"
					cssKey="shadow-spread"
					[min]="-50"
					[max]="50"
					[step]="0.5"
					unit="px"
					[defaultValue]="0" />

				<!-- Opacity -->
				<sim-shadow-slider
					label="Opacity"
					cssKey="shadow-opacity"
					[min]="0"
					[max]="1"
					[step]="0.1"
					unit=""
					[defaultValue]="0.1" />

				<!-- Offset X -->
				<sim-shadow-slider
					label="Offset X"
					cssKey="shadow-offset-x"
					[min]="-50"
					[max]="50"
					[step]="0.5"
					unit="px"
					[defaultValue]="0" />

				<!-- Offset Y -->
				<sim-shadow-slider
					label="Offset Y"
					cssKey="shadow-offset-y"
					[min]="-50"
					[max]="50"
					[step]="0.5"
					unit="px"
					[defaultValue]="1" />
			</div>
		</div>
	`,
})
export class ShadowConfigComponent {
	private readonly destroyRef = inject(DestroyRef);
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly colorSubject$ = new Subject<string>();

	readonly colorInput = new FormControl('', { nonNullable: true });
	readonly colorPicker = new FormControl('', { nonNullable: true });

	private readonly currentColor = computed(() => {
		const preset = this.themeStorageService.currentThemeStyles();
		if (preset?.['shadow-color']) {
			return preset['shadow-color'];
		}
		return '#000000';
	});

	constructor() {
		effect(() => {
			const value = this.currentColor();
			this.colorInput.setValue(value, { emitEvent: false });
			this.colorPicker.setValue(value, { emitEvent: false });
		});

		this.setupValueChanges();

		this.colorSubject$.pipe(debounceTime(DEBOUNCE_TIME), takeUntilDestroyed()).subscribe((color) => {
			this.themeStorageService.changeColor('shadow-color' as keyof ThemeStyleProps, color);
		});
	}

	private setupValueChanges(): void {
		// Sync colorInput -> colorPicker
		this.colorInput.valueChanges
			.pipe(debounceTime(100), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				this.colorPicker.setValue(value, { emitEvent: false });
			});

		// Sync colorPicker -> colorInput
		this.colorPicker.valueChanges
			.pipe(debounceTime(100), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				this.colorInput.setValue(value, { emitEvent: false });
			});

		// Emit changes from either control
		merge(this.colorInput.valueChanges.pipe(debounceTime(100)), this.colorPicker.valueChanges.pipe(debounceTime(100)))
			.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				this.themeService.applyShadow('shadow-color', value);

				// Rebuild all shadow variants with updated color
				const currentStyles = this.themeStorageService.currentThemeStyles();
				if (currentStyles) {
					const updatedStyles = { ...currentStyles, 'shadow-color': value };
					this.themeService.applyShadowVariables(updatedStyles);
				}

				this.colorSubject$.next(value);
			});
	}
}
