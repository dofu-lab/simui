import { Component, signal } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSpinner } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-button-14',
	imports: [HlmButton, HlmSpinner],
	template: `
		<button hlmBtn size="sm" class="group" [disabled]="isLoading()" (click)="submit()">
			@if (isLoading()) {
				<hlm-spinner class="mr-2 size-4" />
				Submitting...
			} @else {
				Submit
			}
		</button>
	`,
})
export class Button14Component {
	isLoading = signal<boolean>(false);

	submit() {
		this.isLoading.set(true);
		setTimeout(() => this.isLoading.set(false), 1500);
	}
}