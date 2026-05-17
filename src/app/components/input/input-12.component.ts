import { Component } from '@angular/core';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-12',
	imports: [HlmLabel, HlmInputGroupImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-12" class="mb-2 text-sm">Input with end inline add-on</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-12" type="text" placeholder="www.google" />
			<hlm-input-group-addon align="inline-end">
				<div class="text-muted-foreground/80 text-sm font-normal">.com</div>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input12Component {}
