import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-44',
	providers: [provideIcons({ lucideStar })],
	imports: [HlmButton, NgClass, NgIcon],
	template: `
		<button hlmBtn size="sm" class="shadow-none focus-visible:z-10" (click)="toggleStart()">
			<ng-icon
				name="lucideStar"
				class="mr-1 opacity-60 transition-all"
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
	protected readonly stared = signal<boolean>(false);
	protected readonly animated = signal<boolean>(false);
	protected readonly defaultStars = 699;
	protected readonly starCount = computed(() => (this.stared() ? this.defaultStars + 1 : this.defaultStars));
	protected readonly starLabel = computed(() => (this.stared() ? 'Unstar' : 'Star'));

	protected readonly toggleStart = (): void => {
		this.stared.set(!this.stared());
		this.animated.set(true);
		setTimeout(() => {
			this.animated.set(false);
		}, 300);
	};
}
