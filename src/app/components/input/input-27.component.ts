import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-27',
	imports: [HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-27" class="mb-2 text-sm">File input</label>
		<input
			hlmInput
			id="input-27"
			type="file"
			class="file:border-input p-0 pe-3 file:me-3 file:h-full file:border-0 file:border-e file:px-2" />
	`,
})
export class Input27Component {}
