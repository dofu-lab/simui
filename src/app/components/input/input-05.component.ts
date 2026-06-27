import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-05',
	imports: [HlmLabelImports, HlmInputImports],
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
