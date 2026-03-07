import { ThemeService, ThemeStorageService } from '@/app/core/services';
import { ThemeStyleProps } from '@/app/types';
import { HlmSimSlider } from '@/libs/sim/slider/hlm-sim-slider';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSettings2, lucideTextCursorInput } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { debounceTime, Subject } from 'rxjs';

const DEBOUNCE_TIME = 1000;

type ShadowKey = 'shadow-opacity' | 'shadow-blur' | 'shadow-spread' | 'shadow-offset-x' | 'shadow-offset-y';

@Component({
	selector: 'sim-shadow-slider',
	imports: [FormsModule, HlmButton, HlmSimSlider, HlmIcon, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideTextCursorInput, lucideSettings2 })],
	template: `
		<div class="flex gap-2">
			@if (mode() === 'input') {
				<div hlmInputGroup class="rounded-[8px]" [class.hidden]="mode() === 'slider'">
					<input
						[attr.aria-label]="label() + ' value'"
						hlmInputGroupInput
						type="number"
						[min]="min()"
						[max]="max()"
						[ngModel]="value()"
						(ngModelChange)="onValueChange($event)" />
					<div hlmInputGroupAddon class="pl-[15px]">
						<span hlmInputGroupText>{{ label() }}:</span>
					</div>
					<div hlmInputGroupAddon align="inline-end">
						<span hlmInputGroupText>{{ unit() }}</span>
					</div>
				</div>
			} @else {
				<hlm-sim-slider
					[label]="label()"
					[min]="min()"
					[max]="max()"
					[step]="step()"
					[class.hidden]="mode() === 'input'"
					[ngModel]="value()"
					(ngModelChange)="onValueChange($event)" />
			}
			@if (mode() === 'slider') {
				<button hlmBtn size="icon" (click)="mode.set('input')">
					<ng-icon hlm name="lucideTextCursorInput" size="sm" />
				</button>
			} @else {
				<button hlmBtn size="icon" (click)="mode.set('slider')">
					<ng-icon hlm name="lucideSettings2" size="sm" />
				</button>
			}
		</div>
	`,
})
export class ShadowSliderComponent {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly valueSubject$ = new Subject<number>();

	protected mode = signal<'slider' | 'input'>('slider');

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
