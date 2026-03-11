import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-49',
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	imports: [HlmButton, NgIcon],
	template: `
		<button hlmBtn variant="ghost" (click)="toggle()">
			{{ buttonLabel() }}
			<ng-icon [name]="buttonIcon()" />
		</button>
	`,
})
export class Button49Component {
	protected readonly isShow = signal<boolean>(false);
	protected readonly buttonLabel = computed(() => (this.isShow() ? 'Show less' : 'Show more'));
	protected readonly buttonIcon = computed(() => (this.isShow() ? 'lucideChevronUp' : 'lucideChevronDown'));

	protected toggle(): void {
		this.isShow.set(!this.isShow());
	}
}
