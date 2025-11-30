import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-07',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-07" class="mb-2 text-sm">Input with gray background</label>
		<input hlmInput id="input-07" type="text" placeholder="Email" class="bg-muted border-transparent shadow-none" />
	`,
})
export class Input07Component {}