import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-49',
	imports: [HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-49" class="mb-2 text-sm">Readonly input</label>
		<input hlmInput readonly class="read-only:bg-muted" id="input-49" type="text" value="This is a readonly input" />
	`,
})
export class Input49Component {}
