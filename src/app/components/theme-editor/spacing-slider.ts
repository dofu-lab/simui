import { ThemeService, ThemeStorageService } from '@/app/core/services';
import { HlmSimSlider } from '@/libs/sim/slider/hlm-sim-slider';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSettings2, lucideTextCursorInput } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { debounceTime, Subject } from 'rxjs';

const DEBOUNCE_TIME = 1000;

@Component({
	selector: 'sim-spacing-slider',
	imports: [FormsModule, HlmSimSlider, HlmIcon, NgIcon, HlmButton, HlmInputGroupImports],
	providers: [provideIcons({ lucideTextCursorInput, lucideSettings2 })],
	template: `
		<div class="flex gap-2">
			@if (mode() === 'input') {
				<div hlmInputGroup class="rounded-[8px]" [class.hidden]="mode() === 'slider'">
					<input
						aria-label="Spacing value in rem"
						hlmInputGroupInput
						type="number"
						[min]="min"
						[max]="max"
						[ngModel]="value()"
						(ngModelChange)="onSpacingChange($event)" />
					<div hlmInputGroupAddon class="pl-[15px]">
						<span hlmInputGroupText>Spacing:</span>
					</div>
					<div hlmInputGroupAddon align="inline-end">
						<span hlmInputGroupText>rem</span>
					</div>
				</div>
			} @else {
				<hlm-sim-slider
					label="Spacing"
					[min]="min"
					[max]="max"
					[step]="0.01"
					[class.hidden]="mode() === 'input'"
					[ngModel]="value()"
					(ngModelChange)="onSpacingChange($event)" />
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
export class SpacingSliderComponent {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly themeService = inject(ThemeService);
	private readonly spacingSubject$ = new Subject<number>();

	protected mode = signal<'slider' | 'input'>('slider');

	private readonly currentSpacing = computed(() => {
		const preset = this.themeStorageService.currentThemeStyles();
		return preset?.spacing ? Number.parseFloat(preset.spacing.replace('rem', '')) : this.defaultSpacing;
	});
	private readonly defaultSpacing = 1;

	protected readonly min = 0.1;
	protected readonly max = 0.35;
	protected readonly value = signal<number[]>([this.currentSpacing()]);

	constructor() {
		effect(() => {
			this.value.set([this.currentSpacing()]);
		});

		this.spacingSubject$.pipe(debounceTime(DEBOUNCE_TIME), takeUntilDestroyed()).subscribe((spacing) => {
			this.themeStorageService.changeColor('spacing', `${spacing}rem`);
		});
	}

	protected onSpacingChange(spacing: number): void {
		try {
			const clampedSpacing = Math.min(Math.max(spacing, this.min), this.max);
			this.value.set([clampedSpacing]);
			this.themeService.applySpacing(`${clampedSpacing}rem`);
			this.spacingSubject$.next(clampedSpacing);
		} catch (error) {
			console.error('Failed to update spacing:', error);
		}
	}
}
