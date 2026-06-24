import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-53',
	imports: [HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel class="mb-2 text-sm">Simple input</label>
		<div class="flex -space-x-px">
			<input hlmInput type="text" placeholder="From" class="rounded-r-none focus-visible:z-20" />
			<input hlmInput type="text" placeholder="To" class="rounded-l-none focus-visible:z-20" />
		</div>
	`,
})
export class Input53Component {}
