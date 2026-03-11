import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';

@Component({
	selector: 'sim-button-27',
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	imports: [HlmButtonImports, HlmButtonGroupImports, NgIcon],
	template: `
		<div hlmButtonGroup>
			<button hlmBtn variant="outline" size="icon" (click)="downvote()">
				<ng-icon name="lucideChevronDown" />
			</button>
			<button hlmBtn variant="outline">{{ votes() }}</button>
			<button hlmBtn variant="outline" size="icon" (click)="upvote()">
				<ng-icon name="lucideChevronUp" />
			</button>
		</div>
	`,
})
export class Button27Component {
	protected readonly votes = signal<number>(235);

	protected upvote(): void {
		this.votes.set(this.votes() + 1);
	}

	protected downvote(): void {
		this.votes.set(this.votes() - 1);
	}
}
