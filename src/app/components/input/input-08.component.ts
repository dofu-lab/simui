import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-08',
	imports: [HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-08" class="mb-2 text-sm">Disabled input</label>
		<input hlmInput id="input-08" type="text" placeholder="Email" disabled />
	`,
})
export class Input08Component {}
