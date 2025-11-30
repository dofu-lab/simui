import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-01',
	imports: [HlmButton],
	template: `
		<button hlmBtn size="sm">Primary</button>
	`,
})
export class Button01Component {}