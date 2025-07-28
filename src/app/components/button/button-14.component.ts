import { Component, signal } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmSpinnerComponent } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-button-14',
	standalone: true,
	imports: [HlmButtonDirective, HlmSpinnerComponent],
	template: `
		<button hlmBtn size="sm" class="group" [disabled]="isLoading()" (click)="submit()">
			@if (isLoading()) {
				<hlm-spinner size="xs" class="mr-2" />
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

export const button14Code = `import { Component, signal } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmSpinnerComponent } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-button-14',
	standalone: true,
	imports: [HlmButtonDirective, HlmSpinnerComponent],
	template: \`
		<button hlmBtn size="sm" class="group" [disabled]="isLoading()" (click)="submit()">
			@if (isLoading()) {
				<hlm-spinner size="xs" class="mr-2" />
				Submitting...
			} @else {
				Submit
			}
		</button>
	\`,
})
export class Button14Component {
	isLoading = signal<boolean>(false);

	submit() {
		this.isLoading.set(true);
		setTimeout(() => this.isLoading.set(false), 1500);
	}
}`;
