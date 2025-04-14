import { HlmButtonDirective } from '@/libs/ui/ui-button-helm/src';
import { Component } from '@angular/core';
import { DISCUSSION_LINK } from './constants';

@Component({
	selector: 'app-suggestion',
	imports: [HlmButtonDirective],
	template: `
		<div class="flex items-center justify-center">
			<span>Do you have new idea?</span>
			<button hlmBtn (click)="goToDiscussion()">Suggest new component</button>
		</div>
	`,
})
export class SuggestionComponent {
	goToDiscussion() {
		window.open(DISCUSSION_LINK, '_blank');
	}
}
