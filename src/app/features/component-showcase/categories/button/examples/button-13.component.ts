import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-button-13',
	imports: [HlmButtonImports, HlmSpinnerImports],
	template: `
		<button hlmBtn disabled size="sm">
			<hlm-spinner class="size-4" />
			Saving...
		</button>
	`,
})
export class Button13Component {}
