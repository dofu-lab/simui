import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-02',
	imports: [HlmLabelImports, HlmInputImports],
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
