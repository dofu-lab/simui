import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-02',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-02" class="mb-2 text-sm">
			Required input
			<span class="text-destructive">*</span>
		</label>
		<input hlmInput id="input-02" type="text" placeholder="Email" />
	`,
})
export class Input02Component {}

export const input02Code = ``;
