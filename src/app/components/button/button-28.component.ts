import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-28',
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	imports: [HlmButtonImports, HlmButtonGroupImports, NgIcon],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn size="icon" class="rounded-full" (click)="downvote()">
				<ng-icon name="lucideChevronDown" />
			</button>
			<button hlmBtn class="px-2">{{ votes() }}</button>
			<button hlmBtn size="icon" class="rounded-full" (click)="upvote()">
				<ng-icon name="lucideChevronUp" />
			</button>
		</div>
	`,
})
export class Button28Component {
	protected readonly votes = signal<number>(235);

	protected upvote(): void {
		this.votes.set(this.votes() + 1);
	}

	protected downvote(): void {
		this.votes.set(this.votes() - 1);
	}
}
