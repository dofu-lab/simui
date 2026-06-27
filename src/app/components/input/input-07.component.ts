import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-07',
	imports: [HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-07" class="mb-2 text-sm">Input with gray background</label>
		<input hlmInput id="input-07" type="text" placeholder="Email" class="bg-muted border-transparent shadow-none" />
	`,
})
export class Input07Component {}
