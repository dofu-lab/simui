import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis, lucideFiles, lucideFilm } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-33',
	standalone: true,
	providers: [provideIcons({ lucideFiles, lucideFilm, lucideEllipsis })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: `
		<div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
			<button
				hlmBtn
				class="rounded-none rounded-s-md shadow-none focus-visible:z-10"
				variant="outline"
				size="sm"
				(click)="downvote()">
				<ng-icon hlm name="lucideFiles" size="sm" class="mr-2" />
				Files
			</button>
			<button
				hlmBtn
				class="rounded-none shadow-none focus-visible:z-10"
				variant="outline"
				size="sm"
				(click)="downvote()">
				<ng-icon hlm name="lucideFilm" size="sm" class="mr-2" />
				Media
			</button>
			<button
				hlmBtn
				class="rounded-none rounded-e-md shadow-none focus-visible:z-10"
				variant="outline"
				size="sm"
				(click)="upvote()">
				<ng-icon hlm name="lucideEllipsis" size="sm" />
			</button>
		</div>
	`,
})
export class Button33Component {
	votes = signal<number>(235);

	upvote() {
		this.votes.set(this.votes() + 1);
	}

	downvote() {
		this.votes.set(this.votes() - 1);
	}
}

export const button33Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis, lucideFiles, lucideFilm } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-33',
	standalone: true,
	providers: [provideIcons({ lucideFiles, lucideFilm, lucideEllipsis })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: \`
		<div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
			<button
				hlmBtn
				class="rounded-none rounded-s-md shadow-none focus-visible:z-10"
				variant="outline"
				size="sm"
				(click)="downvote()">
				<ng-icon hlm name="lucideFiles" size="sm" class="mr-2" />
				Files
			</button>
			<button
				hlmBtn
				class="rounded-none shadow-none focus-visible:z-10"
				variant="outline"
				size="sm"
				(click)="downvote()">
				<ng-icon hlm name="lucideFilm" size="sm" class="mr-2" />
				Media
			</button>
			<button
				hlmBtn
				class="rounded-none rounded-e-md shadow-none focus-visible:z-10"
				variant="outline"
				size="sm"
				(click)="upvote()">
				<ng-icon hlm name="lucideEllipsis" size="sm" />
			</button>
		</div>
	\`,
})
export class Button33Component {
	votes = signal<number>(235);

	upvote() {
		this.votes.set(this.votes() + 1);
	}

	downvote() {
		this.votes.set(this.votes() - 1);
	}
}`;
