import { ThemeService, ThemeStorageService } from '@/app/core/services';
import { HlmSimSlider } from '@/libs/sim/slider/hlm-sim-slider';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSettings2, lucideTextCursorInput } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { debounceTime, Subject } from 'rxjs';

const DEBOUNCE_TIME = 1000;

@Component({
	selector: 'sim-radius-slider',
	imports: [HlmSimSlider, HlmInput, FormsModule, HlmButton, NgIcon, HlmIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideTextCursorInput, lucideSettings2 })],
	template: `
		<div class="flex gap-2">
			@if (mode() === 'input') {
				<div hlmInputGroup class="rounded-[8px]" [class.hidden]="mode() === 'slider'">
					<input
						aria-label="Radius value in rem"
						hlmInputGroupInput
						type="number"
						[min]="min"
						[max]="max"
						[ngModel]="value()"
						(ngModelChange)="onRadiusChange($event)" />
					<div hlmInputGroupAddon class="pl-[15px]">
						<span hlmInputGroupText>Radius:</span>
					</div>
					<div hlmInputGroupAddon align="inline-end">
						<span hlmInputGroupText>rem</span>
					</div>
				</div>
			} @else {
				<hlm-sim-slider
					label="Radius"
					[min]="min"
					[max]="max"
					[step]="0.01"
					[class.hidden]="mode() === 'input'"
					[ngModel]="value()"
					(ngModelChange)="onRadiusChange($event)" />
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
export class RadiusSliderComponent {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly radiusSubject$ = new Subject<number>();

	protected mode = signal<'slider' | 'input'>('slider');

	private readonly currentRadius = computed(() => {
		const preset = this.themeStorageService.currentThemeStyles();
		return preset?.radius ? Number.parseFloat(preset.radius.replace('rem', '')) : this.defaultRadius;
	});
	private readonly defaultRadius = 1;

	protected readonly min = 0;
	protected readonly max = 5;
	protected readonly value = signal<number[]>([this.currentRadius()]);

	constructor() {
		effect(() => {
			this.value.set([this.currentRadius()]);
		});

		this.radiusSubject$.pipe(debounceTime(DEBOUNCE_TIME), takeUntilDestroyed()).subscribe((radius) => {
			this.themeStorageService.changeColorForBothModes('radius', `${radius}rem`);
		});
	}

	protected onRadiusChange(radius: number): void {
		try {
			const clampedRadius = Math.min(Math.max(radius, this.min), this.max);
			this.value.set([clampedRadius]);
			this.themeService.applyRadius(`${clampedRadius}rem`);
			this.radiusSubject$.next(clampedRadius);
		} catch (error) {
			console.error('Failed to update radius:', error);
		}
	}
}
