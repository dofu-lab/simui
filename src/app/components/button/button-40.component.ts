import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideThumbsUp } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-40',
	imports: [NgClass, NgIcon, HlmButtonImports],
	providers: [provideIcons({ lucideThumbsUp })],
	template: `
		<button
			hlmBtn
			class="relative pe-12"
			size="sm"
			variant="outline"
			[ngClass]="{ 'border-sky-600! dark:border-sky-400': liked() }"
			(click)="onPressLike()">
			<div class="flex items-center">
				<ng-icon
					name="lucideThumbsUp"
					class="mr-2 transition-transform duration-150 motion-reduce:transition-none"
					[ngClass]="{
						'text-sky-800 dark:text-sky-600': liked(),
						'scale-115': animate(),
					}" />
				<span [ngClass]="{ 'text-sky-800 dark:text-sky-600': liked() }">
					{{ likeLabel() }}
				</span>
				<span
					class="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center border-l text-xs"
					[ngClass]="{ 'border-sky-600 text-sky-800 dark:text-sky-600': liked() }">
					{{ likeCount() }}
				</span>
			</div>
		</button>
	`,
})
export class Button40Component {
	protected readonly liked = signal<boolean>(false);
	protected readonly animate = signal<boolean>(false);

	protected readonly likeCount = computed<number>(() => (this.liked() ? 86 : 85));
	protected readonly likeLabel = computed<string>(() => (this.liked() ? 'Liked' : 'Like'));

	protected onPressLike(): void {
		this.liked.set(!this.liked());

		this.animate.set(true);
		setTimeout(() => {
			this.animate.set(false);
		}, 300);
	}
}
