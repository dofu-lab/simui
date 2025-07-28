import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-28',
	standalone: true,
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: `
		<div class="inline-flex -space-x-px rounded-full shadow-xs rtl:space-x-reverse">
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
				size="icon"
				(click)="downvote()">
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
			<span class="bg-primary text-primary-foreground flex items-center px-1 text-sm font-medium">
				{{ votes() }}
			</span>
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
				size="icon"
				(click)="upvote()">
				<ng-icon hlm name="lucideChevronUp" size="sm" />
			</button>
		</div>
	`,
})
export class Button28Component {
	votes = signal<number>(235);

	upvote() {
		this.votes.set(this.votes() + 1);
	}

	downvote() {
		this.votes.set(this.votes() - 1);
	}
}

export const button28Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-28',
	standalone: true,
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: \`
		<div class="inline-flex -space-x-px rounded-full shadow-xs rtl:space-x-reverse">
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
				size="icon"
				(click)="downvote()">
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
			<span class="bg-primary text-primary-foreground flex items-center px-1 text-sm font-medium">
				{{ votes() }}
			</span>
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
				size="icon"
				(click)="upvote()">
				<ng-icon hlm name="lucideChevronUp" size="sm" />
			</button>
		</div>
	\`,
})
export class Button28Component {
	votes = signal<number>(235);

	upvote() {
		this.votes.set(this.votes() + 1);
	}

	downvote() {
		this.votes.set(this.votes() - 1);
	}
}`;
