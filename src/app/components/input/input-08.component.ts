import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-08',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-08" class="mb-2 text-sm">Disabled input</label>
		<input hlmInput id="input-08" type="text" placeholder="Email" disabled />
	`,
})
export class Input08Component {}

export const input08Code = ``;
