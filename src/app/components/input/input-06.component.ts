import { HlmFieldImports } from '@/libs/ui/field/src';
import { Component } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-06',
	imports: [HlmLabelImports, HlmInputImports, HlmFieldImports],
	host: { class: 'w-full' },
	template: `
		<hlm-field forceInvalid>
			<label hlmFieldLabel for="input-06">Input with helper text</label>
			<input hlmInput forceInvalid id="input-06" type="email" placeholder="Email" value="invalid@mail.com" />
			<hlm-field-error [forceShow]="true">Email is invalid</hlm-field-error>
		</hlm-field>
	`,
})
export class Input06Component {}
