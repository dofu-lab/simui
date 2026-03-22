import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-05',
	imports: [HlmNativeSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2 [--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)]">
				<label hlmFieldLabel for="native-select-05">Select with colored border (native)</label>
				<hlm-native-select id="native-select-05" value="angular">
					<option hlmNativeSelectOption value="angular">Angular</option>
					<option hlmNativeSelectOption value="react">React</option>
					<option hlmNativeSelectOption value="vue">Vue</option>
					<option hlmNativeSelectOption value="svelte">Svelte</option>
				</hlm-native-select>
			</div>
		</div>
	`,
})
export class Select05Component {}
