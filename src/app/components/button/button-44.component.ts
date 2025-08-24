import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-44',
	standalone: true,
	providers: [provideIcons({ lucideStar })],
	imports: [HlmIcon, HlmButton, NgClass, NgIcon],
	template: `
		<button hlmBtn size="sm" class="shadow-none focus-visible:z-10" (click)="toggleStart()">
			<ng-icon
				hlm
				name="lucideStar"
				size="sm"
				class="mr-2 opacity-60 transition-all"
				[ngClass]="{
					'text-yellow-300 opacity-100': stared(),
					'scale-115': animated(),
				}" />
			{{ starLabel() }}
			<span class="text-primary-foreground/60 ml-2 text-xs">
				{{ starCount() }}
			</span>
		</button>
	`,
})
export class Button44Component {
	stared = signal<boolean>(false);
	animated = signal<boolean>(false);
	defaultStars = 699;
	starCount = computed(() => (this.stared() ? this.defaultStars + 1 : this.defaultStars));
	starLabel = computed(() => (this.stared() ? 'Unstar' : 'Star'));

	toggleStart() {
		this.stared.set(!this.stared());
		this.animated.set(true);
		setTimeout(() => {
			this.animated.set(false);
		}, 300);
	}
}

export const button44Code = `import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-44',
	standalone: true,
	providers: [provideIcons({ lucideStar })],
	imports: [HlmIcon, HlmButton, NgClass, NgIcon],
	template: \`
		<button hlmBtn size="sm" class="shadow-none focus-visible:z-10" (click)="toggleStart()">
			<ng-icon
				hlm
				name="lucideStar"
				size="sm"
				class="mr-2 opacity-60 transition-all"
				[ngClass]="{
					'text-yellow-300 opacity-100': stared(),
					'scale-115': animated(),
				}" />
			{{ starLabel() }}
			<span class="text-primary-foreground/60 ml-2 text-xs">
				{{ starCount() }}
			</span>
		</button>
	\`,
})
export class Button44Component {
	stared = signal<boolean>(false);
	animated = signal<boolean>(false);
	defaultStars = 699;
	starCount = computed(() => (this.stared() ? this.defaultStars + 1 : this.defaultStars));
	starLabel = computed(() => (this.stared() ? 'Unstar' : 'Star'));

	toggleStart() {
		this.stared.set(!this.stared());
		this.animated.set(true);
		setTimeout(() => {
			this.animated.set(false);
		}, 300);
	}
}`;
