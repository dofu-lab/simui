import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-10',
	imports: [HlmNativeSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="native-select-10">Select with option groups (native)</label>
				<hlm-native-select id="native-select-10">
					<option hlmNativeSelectOption value="">Select department</option>
					<optgroup hlmNativeSelectOptGroup label="Engineering">
						<option hlmNativeSelectOption value="frontend">Frontend</option>
						<option hlmNativeSelectOption value="backend">Backend</option>
						<option hlmNativeSelectOption value="devops">DevOps</option>
					</optgroup>
					<optgroup hlmNativeSelectOptGroup label="Sales">
						<option hlmNativeSelectOption value="sales-rep">Sales Rep</option>
						<option hlmNativeSelectOption value="account-manager">Account Manager</option>
						<option hlmNativeSelectOption value="sales-director">Sales Director</option>
					</optgroup>
				</hlm-native-select>
			</div>
		</div>
	`,
})
export class Select10Component {}
