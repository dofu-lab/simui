import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-49',
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	imports: [HlmButton, HlmIcon, NgIcon],
	template: `
		<button hlmBtn variant="ghost" (click)="toggle()">
			{{ buttonLabel() }}
			<ng-icon hlm [name]="buttonIcon()" class="ml-2" />
		</button>
	`,
})
export class Button49Component {
	isShow = signal<boolean>(false);
	buttonLabel = computed(() => (this.isShow() ? 'Show less' : 'Show more'));
	buttonIcon = computed(() => (this.isShow() ? 'lucideChevronUp' : 'lucideChevronDown'));

	toggle() {
		this.isShow.set(!this.isShow());
	}
}