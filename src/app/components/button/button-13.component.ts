import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSpinner } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-button-13',
	imports: [HlmButton, HlmSpinner],
	template: `
		<button hlmBtn disabled size="sm">
			<hlm-spinner class="size-4" />
			Saving...
		</button>
	`,
})
export class Button13Component {}
