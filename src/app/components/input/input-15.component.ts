import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-15',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-15" class="mb-2 text-sm">Input with end inline add-on</label>
		<div class="flex -space-x-px">
			<input hlmInput id="input-15" type="text" placeholder="google.com" class="peer rounded-r-none" />
			<div
				class="text-muted-foreground/80 pointer-events-none z-10 flex items-center justify-center rounded-r-md border border-l-0 px-3 text-sm peer-disabled:opacity-50">
				.com
			</div>
		</div>
	`,
})
export class Input15Component {}