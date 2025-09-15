import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-28',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<div class="group relative">
			<label
				hlmLabel
				for="input-28"
				class="bg-background text-foreground absolute start-1 top-0 block -translate-y-1/2 px-2 text-xs group-has-disabled:opacity-50">
				Input with overlapping label
			</label>
			<input hlmInput id="input-28" type="text" placeholder="Email" />
		</div>
	`,
})
export class Input28Component {}

export const input28Code = ``;
