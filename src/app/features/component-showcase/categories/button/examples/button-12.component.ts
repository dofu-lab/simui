import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-12',
	imports: [HlmButtonImports],
	template: `
		<div class="flex gap-2">
			<button hlmBtn variant="ghost" size="sm">Cancel</button>
			<button hlmBtn size="sm">Save</button>
		</div>
	`,
})
export class Button12Component {}
