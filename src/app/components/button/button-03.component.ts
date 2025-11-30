import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-03',
	imports: [HlmButton],
	template: `
		<button hlmBtn size="sm" class="rounded-full">Rounded</button>
	`,
})
export class Button03Component {}