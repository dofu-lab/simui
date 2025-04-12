import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideThumbsUp } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-40',
	standalone: true,
	providers: [provideIcons({ lucideThumbsUp })],
	imports: [HlmIconDirective, HlmButtonDirective, NgClass, NgIcon],
	template: `
		<button
			hlmBtn
			class="relative pe-12"
			size="sm"
			variant="outline"
			[ngClass]="{ 'border-sky-600': liked() }"
			(click)="onPressLike()">
			<ng-icon
				hlm
				name="lucideThumbsUp"
				size="sm"
				class="mr-2 transition-transform duration-150"
				[ngClass]="{
					'text-sky-800': liked(),
					'scale-115': animate(),
				}" />
			<span class="mr-1" [ngClass]="{ 'text-sky-800': liked() }">
				{{ likeLabel() }}
			</span>
			<span
				class="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center border-l text-xs"
				[ngClass]="{ 'border-sky-600 text-sky-800': liked() }">
				{{ likeCount() }}
			</span>
		</button>
	`,
})
export class Button40Component {
	liked = signal<boolean>(false);
	animate = signal<boolean>(false);

	likeCount = computed<number>(() => (this.liked() ? 86 : 85));
	likeLabel = computed<string>(() => (this.liked() ? 'Liked' : 'Like'));

	onPressLike() {
		this.liked.set(!this.liked());

		this.animate.set(true);
		setTimeout(() => {
			this.animate.set(false);
		}, 300);
	}
}

export const button40Code = `
import { Component, computed, signal } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideThumbsUp } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sim-button-40',
  standalone: true,
  providers: [provideIcons({ lucideThumbsUp })],
  imports: [HlmIconDirective, HlmButtonDirective, NgClass, NgIcon],
  template: \`
    <button
      hlmBtn
      class="relative pe-12"
      size="sm"
      variant="outline"
      [ngClass]="{ 'border-sky-600': liked() }"
      (click)="onPressLike()"
    >
      <ng-icon
        hlm
        name="lucideThumbsUp"
        size="sm"
        class="mr-2 transition-transform duration-150"
        [ngClass]="{
          'text-sky-800': liked(),
          'scale-115': animate(),
        }"
      />
      <span class="mr-1" [ngClass]="{ 'text-sky-800': liked() }">
        {{ likeLabel() }}
      </span>
      <span
        class="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center border-l text-xs"
        [ngClass]="{ 'border-sky-600 text-sky-800': liked() }"
      >
        {{ likeCount() }}
      </span>
    </button>
  \`,
})
export class Button40Component {
  liked = signal<boolean>(false);
  animate = signal<boolean>(false);

  likeCount = computed<number>(() => (this.liked() ? 86 : 85));
  likeLabel = computed<string>(() => (this.liked() ? 'Liked' : 'Like'));

  onPressLike() {
    this.liked.set(!this.liked());

    this.animate.set(true);
    setTimeout(() => {
      this.animate.set(false);
    }, 300);
  }
}

`;
