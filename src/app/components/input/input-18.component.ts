import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-18',
	imports: [HlmLabel, HlmInputGroupImports, HlmButtonGroupImports, HlmButtonImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-18" class="mb-2 text-sm">Input with end button</label>
		<hlm-button-group class="w-full">
			<hlm-input-group>
				<input hlmInputGroupInput id="input-18" type="text" placeholder="Email" />
			</hlm-input-group>
			<button hlmBtn variant="outline" aria-label="Send" align="end">Send</button>
		</hlm-button-group>
	`,
})
export class Input18Component {}
