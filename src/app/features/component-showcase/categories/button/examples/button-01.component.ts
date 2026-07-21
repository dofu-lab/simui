import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-01',
	imports: [HlmButtonImports],
	template: `
		<button hlmBtn size="sm">Primary</button>
	`,
})
export class Button01Component {}
