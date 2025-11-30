import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-03',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-03" class="mb-2 text-sm">Input with helper text</label>
		<input hlmInput id="input-03" type="text" placeholder="Email" />
		<p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
			We won&lsquo;t share your email with anyone
		</p>
	`,
})
export class Input03Component {}