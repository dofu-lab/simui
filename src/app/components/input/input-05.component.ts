import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-05',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-05" class="mb-2 text-sm">Input with colored border and ring</label>
		<input
			hlmInput
			id="input-05"
			type="text"
			placeholder="Email"
			class="[--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)]" />
	`,
})
export class Input05Component {}