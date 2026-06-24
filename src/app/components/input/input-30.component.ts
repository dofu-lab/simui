import { Component } from '@angular/core';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-30',
	imports: [HlmLabelImports, HlmInputGroupImports],
	host: { class: 'w-full' },
	template: `
		<hlm-input-group>
			<input hlmInputGroupInput id="input-30" type="text" placeholder="Email" />
			<hlm-input-group-addon align="block-start">
				<label hlmLabel for="input-30" class="text-foreground text-xs">Input with insert label</label>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input30Component {}
