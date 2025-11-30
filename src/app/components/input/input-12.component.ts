import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-12',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-12" class="mb-2 text-sm">Input with end inline add-on</label>
		<div class="relative">
			<input hlmInput id="input-12" type="text" placeholder="google" class="peer pe-9" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
				.com
			</div>
		</div>
	`,
})
export class Input12Component {}