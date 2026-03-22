import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-12',
	imports: [HlmNativeSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="group relative gap-2">
				<label
					hlmFieldLabel
					for="native-select-12"
					class="bg-background text-foreground absolute start-1 top-0 z-10 block w-fit! -translate-y-1/2 px-2 text-xs font-medium group-has-[select:disabled]:opacity-50">
					Select with overlapping label (native)
				</label>
				<hlm-native-select id="native-select-12" value="placeholder">
					<option disabled hlmNativeSelectOption value="placeholder">Select framework</option>
					<option hlmNativeSelectOption value="angular">Angular</option>
					<option hlmNativeSelectOption value="react">React</option>
					<option hlmNativeSelectOption value="vue">Vue</option>
					<option hlmNativeSelectOption value="svelte">Svelte</option>
				</hlm-native-select>
			</div>
		</div>
	`,
})
export class Select12Component {}
