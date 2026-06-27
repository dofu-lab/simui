import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-19',
	imports: [HlmLabelImports, HlmInputImports, HlmButtonImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-19" class="mb-2 text-sm">Input with end button</label>
		<div class="flex gap-2">
			<input hlmInput id="input-19" type="text" placeholder="Email" />
			<button hlmBtn variant="outline">Send</button>
		</div>
	`,
})
export class Input19Component {}
