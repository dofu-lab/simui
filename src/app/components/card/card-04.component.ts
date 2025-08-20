import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent } from '@spartan-ng/helm/card';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSlider } from '@spartan-ng/helm/slider';

import {
	lucideHeartOff,
	lucidePause,
	lucidePlay,
	lucideRepeat,
	lucideShuffle,
	lucideSkipBack,
	lucideSkipForward,
} from '@ng-icons/lucide';

@Component({
	selector: 'sim-card-04',
	imports: [FormsModule, HlmCard, HlmCardContent, HlmButton, HlmSlider, HlmIcon, NgIcon],
	providers: [
		provideIcons({
			lucideHeartOff,
			lucidePlay,
			lucidePause,
			lucideSkipForward,
			lucideSkipBack,
			lucideShuffle,
			lucideRepeat,
		}),
	],
	template: `
		<section hlmCard class="relative overflow-hidden rounded-3xl shadow-lg">
			<button
				hlmBtn
				size="icon"
				variant="ghost"
				class="text-muted-foreground hover:text-foreground absolute top-4 right-4">
				<ng-icon hlm name="lucideHeartOff" />
			</button>

			<div hlmCardContent class="grid gap-6 p-4 md:grid-cols-[1fr_auto]">
				<img
					src="/assets/products/disc.webp"
					alt="Daily Mix cover"
					class="aspect-square w-full max-w-70 rounded-xl object-cover md:w-36" />
				<div class="flex min-w-0 flex-col">
					<div>
						<h2 class="text-xl leading-tight font-semibold">Daily Mix</h2>
						<p class="text-muted-foreground text-xs">12 Tracks</p>
						<h3 class="mt-4 text-2xl leading-snug font-bold">Frontend Radio</h3>
					</div>

					<div class="mt-6">
						<hlm-slider [(value)]="value" />

						<div class="text-muted-foreground mt-1 flex justify-between text-xs">
							<span>03:00</span>
							<span>06:00</span>
						</div>
					</div>

					<div class="mt-6 flex items-center justify-center gap-3">
						<button hlmBtn size="icon" variant="ghost" aria-label="Repeat">
							<ng-icon hlm name="lucideRepeat" size="sm" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Prev">
							<ng-icon hlm name="lucideSkipBack" size="sm" />
						</button>

						<button
							hlmBtn
							size="icon"
							class="bg-foreground text-background hover:bg-foreground/90 size-10 shrink-0 rounded-full"
							aria-label="Play">
							<ng-icon hlm name="lucidePlay" size="sm" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Next">
							<ng-icon hlm name="lucideSkipForward" size="sm" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Shuffle">
							<ng-icon hlm name="lucideShuffle" size="sm" />
						</button>
					</div>
				</div>
			</div>
		</section>
	`,
})
export class Card04Component {
	public readonly value = signal(50);
}

export const card04Code = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent } from '@spartan-ng/helm/card';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSlider } from '@spartan-ng/helm/slider';

import {
	lucideHeartOff,
	lucidePause,
	lucidePlay,
	lucideRepeat,
	lucideShuffle,
	lucideSkipBack,
	lucideSkipForward,
} from '@ng-icons/lucide';

@Component({
	selector: 'sim-card-04',
	imports: [FormsModule, HlmCard, HlmCardContent, HlmButton, HlmSlider, HlmIcon, NgIcon],
	providers: [
		provideIcons({
			lucideHeartOff,
			lucidePlay,
			lucidePause,
			lucideSkipForward,
			lucideSkipBack,
			lucideShuffle,
			lucideRepeat,
		}),
	],
	template: \`
		<section hlmCard class="relative overflow-hidden rounded-3xl shadow-lg">
			<button
				hlmBtn
				size="icon"
				variant="ghost"
				class="text-muted-foreground hover:text-foreground absolute top-4 right-4">
				<ng-icon hlm name="lucideHeartOff" />
			</button>

			<div hlmCardContent class="grid gap-6 p-4 md:grid-cols-[1fr_auto]">
				<img
					src="/assets/products/disc.webp"
					alt="Daily Mix cover"
					class="aspect-square w-full max-w-70 rounded-xl object-cover md:w-36" />
				<div class="flex min-w-0 flex-col">
					<div>
						<h2 class="text-xl leading-tight font-semibold">Daily Mix</h2>
						<p class="text-muted-foreground text-xs">12 Tracks</p>
						<h3 class="mt-4 text-2xl leading-snug font-bold">Frontend Radio</h3>
					</div>

					<div class="mt-6">
						<hlm-slider [(value)]="value" />

						<div class="text-muted-foreground mt-1 flex justify-between text-xs">
							<span>03:00</span>
							<span>06:00</span>
						</div>
					</div>

					<div class="mt-6 flex items-center justify-center gap-3">
						<button hlmBtn size="icon" variant="ghost" aria-label="Repeat">
							<ng-icon hlm name="lucideRepeat" size="sm" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Prev">
							<ng-icon hlm name="lucideSkipBack" size="sm" />
						</button>

						<button
							hlmBtn
							size="icon"
							class="bg-foreground text-background hover:bg-foreground/90 size-10 shrink-0 rounded-full"
							aria-label="Play">
							<ng-icon hlm name="lucidePlay" size="sm" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Next">
							<ng-icon hlm name="lucideSkipForward" size="sm" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Shuffle">
							<ng-icon hlm name="lucideShuffle" size="sm" />
						</button>
					</div>
				</div>
			</div>
		</section>
	\`,
})
export class Card04Component {
	public readonly value = signal(50);
}`;
