import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-04',
	imports: [HlmNativeSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="native-select-04">Select with helper text (native)</label>
				<hlm-native-select id="native-select-04" value="angular">
					<option hlmNativeSelectOption value="angular">Angular</option>
					<option hlmNativeSelectOption value="react">React</option>
					<option hlmNativeSelectOption value="vue">Vue</option>
					<option hlmNativeSelectOption value="svelte">Svelte</option>
				</hlm-native-select>
				<p hlmFieldDescription class="text-xs">Tell us what‘s your favorite Select framework.</p>
			</div>
		</div>
	`,
})
export class Select04Component {}
