import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-01',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-01" class="mb-2 text-sm">Simple input</label>
		<input hlmInput id="input-01" type="text" placeholder="Email" />
	`,
})
export class Input01Component {}

export const input01Code = ``;
