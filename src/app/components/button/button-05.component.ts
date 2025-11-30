import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-05',
	imports: [HlmButton],
	template: `
		<button hlmBtn disabled size="sm">Disabled</button>
	`,
})
export class Button05Component {}