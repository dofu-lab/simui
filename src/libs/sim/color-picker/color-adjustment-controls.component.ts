import {
	afterNextRender,
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	computed,
	input,
	signal,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePipette } from '@ng-icons/lucide';
import { BrnSliderImports } from '@spartan-ng/brain/slider';
import { type ButtonVariants, HlmButtonImports } from '@spartan-ng/helm/button';
import { classes } from '@spartan-ng/helm/utils';
import { injectColorPicker } from './color-picker.token';
import { formatColor, parseColor } from './utils';

interface EyeDropperResult {
	sRGBHex: string;
}

interface EyeDropperInstance {
	open(): Promise<EyeDropperResult>;
}

type EyeDropperConstructor = new () => EyeDropperInstance;

function getEyeDropperConstructor(): EyeDropperConstructor | null {
	return (globalThis as typeof globalThis & { EyeDropper?: EyeDropperConstructor }).EyeDropper ?? null;
}

@Component({
	selector: 'sim-color-adjustment-controls',
	imports: [NgIcon, BrnSliderImports, HlmButtonImports],
	providers: [provideIcons({ lucidePipette })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'data-slot': 'color-adjustment-controls',
	},
	template: `
		@if (showEyeDropper()) {
			<button
				hlmBtn
				type="button"
				size="icon"
				[variant]="eyeDropperVariant()"
				aria-label="Pick a color from the screen"
				[disabled]="!eyeDropperSupported()"
				(click)="pickColorFromScreen()">
				<ng-icon name="lucidePipette" class="text-muted-foreground/80" aria-hidden="true" />
			</button>
		}

		@if (showHue() || showOpacity()) {
			<div class="grid gap-2">
				@if (showHue()) {
					<div
						brnSlider
						class="group relative flex h-4 w-full touch-none items-center select-none"
						[value]="[picker.state().h]"
						min="0"
						max="360"
						step="1"
						aria-label="Hue"
						(valueChange)="setHue($event)">
						<div
							brnSliderTrack
							class="relative h-3 w-full grow overflow-hidden rounded-full border"
							style="background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)"></div>
						<span
							brnSliderThumb
							class="ring-ring absolute block size-4 rounded-full border-3 border-white shadow-md outline-none focus-visible:ring-2"
							[style.backgroundColor]="hueThumbColor()"></span>
					</div>
				}

				@if (showOpacity()) {
					<div
						brnSlider
						class="group relative flex h-4 w-full touch-none items-center select-none"
						[value]="[picker.state().a * 100]"
						min="0"
						max="100"
						step="1"
						aria-label="Opacity"
						(valueChange)="setOpacity($event)">
						<div
							brnSliderTrack
							class="relative h-3 w-full grow overflow-hidden rounded-full border"
							[style.background]="opacityTrack()"></div>
						<span
							brnSliderThumb
							class="ring-ring absolute block size-4 rounded-full border-3 border-white shadow-md outline-none focus-visible:ring-2"
							[style.backgroundColor]="opacityThumbColor()"></span>
					</div>
				}
			</div>
		}
	`,
})
export class ColorAdjustmentControlsComponent {
	/** Whether to show the EyeDropper action. */
	public readonly showEyeDropper = input(true, { transform: booleanAttribute });
	/** Whether to show the hue slider. */
	public readonly showHue = input(true, { transform: booleanAttribute });
	/** Whether to show the opacity slider. */
	public readonly showOpacity = input(true, { transform: booleanAttribute });
	/** The Spartan button treatment used for the EyeDropper action. */
	public readonly eyeDropperVariant = input<ButtonVariants['variant']>('secondary');

	protected readonly picker = injectColorPicker();
	protected readonly eyeDropperSupported = signal(false);
	protected readonly opacityThumbColor = computed(() => formatColor(this.picker.state(), 'rgb'));
	protected readonly hueThumbColor = computed(() =>
		formatColor({ h: this.picker.state().h, s: 100, v: 100, a: 1 }, 'rgb'),
	);
	protected readonly opacityTrack = computed(() => {
		const opaque = formatColor({ ...this.picker.state(), a: 1 }, 'rgb');
		return `linear-gradient(to right, transparent, ${opaque}), repeating-conic-gradient(#d4d4d8 0 25%, white 0 50%) 0 / 8px 8px`;
	});

	constructor() {
		classes(() =>
			this.showEyeDropper() && (this.showHue() || this.showOpacity())
				? 'grid grid-cols-[2.25rem_1fr] items-center gap-3'
				: 'grid grid-cols-1 items-center gap-3',
		);
		afterNextRender(() => this.eyeDropperSupported.set(getEyeDropperConstructor() !== null));
	}

	protected async pickColorFromScreen(): Promise<void> {
		const EyeDropper = getEyeDropperConstructor();
		if (!EyeDropper) return;

		try {
			const { sRGBHex } = await new EyeDropper().open();
			const parsed = parseColor(sRGBHex, this.picker.state().h);
			if (parsed) this.picker.commit({ ...parsed, a: this.picker.state().a });
		} catch {
			// Closing the browser picker rejects the promise and should leave the color unchanged.
		}
	}

	protected setHue(values: number[]): void {
		this.picker.commit({ ...this.picker.state(), h: values[0] ?? this.picker.state().h });
	}

	protected setOpacity(values: number[]): void {
		this.picker.commit({ ...this.picker.state(), a: (values[0] ?? this.picker.state().a * 100) / 100 });
	}
}
