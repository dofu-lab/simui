import { HlmButton } from '@/libs/ui/ui-button-helm/src';
import { Component } from '@angular/core';
import { DISCUSSION_LINK } from './constants';

@Component({
	selector: 'app-suggestion',
	imports: [HlmButton],
	template: `
		<div class="flex flex-col items-center justify-center gap-4">
			<span class="text-center text-2xl font-bold">Didn't find what you were looking for?</span>
			<button hlmBtn (click)="goToDiscussion()" class="rounded-full">Suggest new component</button>
		</div>
	`,
})
export class SuggestionComponent {
	goToDiscussion() {
		window.open(DISCUSSION_LINK, '_blank');
	}
}
