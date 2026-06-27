import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-53',
	imports: [HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<span id="input-53-label" hlmLabel class="mb-2 text-sm">Simple input</span>
		<div role="group" aria-labelledby="input-53-label" class="flex -space-x-px">
			<input hlmInput type="text" placeholder="From" aria-label="From" class="rounded-r-none focus-visible:z-20" />
			<input hlmInput type="text" placeholder="To" aria-label="To" class="rounded-l-none focus-visible:z-20" />
		</div>
	`,
})
export class Input53Component {}
