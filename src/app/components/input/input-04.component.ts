import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-04',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<div class="mb-2 flex items-center justify-between text-sm">
			<label hlmLabel for="input-04">Input with hint</label>
			<span class="text-muted-foreground">Optional</span>
		</div>
		<input hlmInput id="input-04" type="text" placeholder="Email" />
	`,
})
export class Input04Component {}