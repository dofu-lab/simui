import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardContentDirective, HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmSliderComponent } from '@spartan-ng/ui-slider-helm';

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
	standalone: true,
	imports: [
		FormsModule,
		HlmCardDirective,
		HlmCardContentDirective,
		HlmButtonDirective,
		HlmSliderComponent,
		HlmIconDirective,
		NgIcon,
	],
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
		<section hlmCard class="relative w-120 overflow-hidden rounded-3xl shadow-lg [--hlm-card-padding:0]">
			<button
				hlmBtn
				size="icon"
				variant="ghost"
				class="text-muted-foreground hover:text-foreground absolute top-4 right-4">
				<ng-icon hlm name="lucideHeartOff" class="h-5 w-5" />
			</button>

			<div hlmCardContent class="grid grid-cols-[auto_1fr] gap-6 p-4">
				<img src="/assets/products/disc.webp" alt="Daily Mix cover" class="h-36 w-36 rounded-xl object-cover" />

				<div class="flex min-w-0 flex-col justify-between">
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

					<div class="mt-6 flex items-center justify-center gap-4">
						<button hlmBtn size="icon" variant="ghost" aria-label="Repeat">
							<ng-icon hlm name="lucideRepeat" class="h-4 w-4" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Prev">
							<ng-icon hlm name="lucideSkipBack" class="h-4 w-4" />
						</button>

						<button
							hlmBtn
							size="icon"
							class="bg-foreground text-background hover:bg-foreground/90 h-12 w-12 rounded-full"
							aria-label="Play">
							<ng-icon hlm name="lucidePlay" class="h-5 w-5" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Next">
							<ng-icon hlm name="lucideSkipForward" class="h-4 w-4" />
						</button>

						<button hlmBtn size="icon" variant="ghost" aria-label="Shuffle">
							<ng-icon hlm name="lucideShuffle" class="h-4 w-4" />
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

export const card04Code = `
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HlmCardContentDirective, HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSliderComponent } from '@spartan-ng/ui-slider-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';

import {
  lucideHeartOff,
  lucidePause,
  lucidePlay,
  lucideRepeat,
  lucideShuffle,
  lucideSkipBack,
  lucideSkipForward
} from '@ng-icons/lucide';

@Component({
  selector: 'sim-card-04',
  standalone: true,
  imports: [
    FormsModule,
    HlmCardDirective,
    HlmCardContentDirective,
    HlmButtonDirective,
    HlmSliderComponent,
    HlmIconDirective,
    NgIcon
  ],
  providers: [
    provideIcons({
      lucideHeartOff,
      lucidePlay,
      lucidePause,
      lucideSkipForward,
      lucideSkipBack,
      lucideShuffle,
      lucideRepeat
    })
  ],
	template: \`
    <section
      hlmCard
      class="relative w-120 overflow-hidden rounded-3xl shadow-lg
         [--hlm-card-padding:0]"
    >
      <button hlmBtn size="icon" variant="ghost"
              class="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
        <ng-icon hlm name="lucideHeartOff" class="h-5 w-5"/>
      </button>

      <div hlmCardContent class="grid grid-cols-[auto_1fr] gap-6 p-4">

        <img src="/assets/products/disc.webp" alt="Daily Mix cover" class="h-36 w-36 rounded-xl object-cover"/>

        <div class="flex min-w-0 flex-col justify-between">
          <div>
            <h2 class="text-xl font-semibold leading-tight">Daily Mix</h2>
            <p class="text-xs text-muted-foreground">12 Tracks</p>
            <h3 class="mt-4 text-2xl font-bold leading-snug">
              Frontend Radio
            </h3>
          </div>

          <div class="mt-6">
            <hlm-slider [(value)]="value"/>

            <div class="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>03:00</span>
              <span>06:00</span>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-center gap-4">
            <button hlmBtn size="icon" variant="ghost" aria-label="Repeat">
              <ng-icon hlm name="lucideRepeat" class="h-4 w-4"/>
            </button>

            <button hlmBtn size="icon" variant="ghost" aria-label="Prev">
              <ng-icon hlm name="lucideSkipBack" class="h-4 w-4"/>
            </button>

            <button hlmBtn size="icon"
                    class="h-12 w-12 rounded-full bg-foreground text-background hover:bg-foreground/90"
                    aria-label="Play">
              <ng-icon hlm name="lucidePlay" class="h-5 w-5"/>
            </button>

            <button hlmBtn size="icon" variant="ghost" aria-label="Next">
              <ng-icon hlm name="lucideSkipForward" class="h-4 w-4"/>
            </button>

            <button hlmBtn size="icon" variant="ghost" aria-label="Shuffle">
              <ng-icon hlm name="lucideShuffle" class="h-4 w-4"/>
            </button>
          </div>
        </div>
      </div>
    </section>
	\`,
})
export class Card04Component {}
`;
