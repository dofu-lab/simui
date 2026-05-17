import { Component } from '@angular/core';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-11',
	imports: [HlmLabel, HlmInputGroupImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-11" class="mb-2 text-sm">Input with start inline add-on</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-11" type="text" placeholder="google.com" />
			<hlm-input-group-addon>
				<div class="text-muted-foreground/80 text-sm font-normal">https://</div>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input11Component {}
