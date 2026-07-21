import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-03',
	imports: [HlmButtonImports],
	template: `
		<button hlmBtn size="sm" class="rounded-full">Rounded</button>
	`,
})
export class Button03Component {}
