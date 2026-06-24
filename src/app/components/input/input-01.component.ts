import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-01',
	imports: [HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-01" class="mb-2 text-sm">Simple input</label>
		<input hlmInput id="input-01" type="text" placeholder="Email" />
	`,
})
export class Input01Component {}
