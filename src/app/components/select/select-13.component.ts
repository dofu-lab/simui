import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';

@Component({
	selector: 'sim-select-13',
	imports: [HlmNativeSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div
				hlmField
				class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 relative gap-0 rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 has-[select:is(:disabled)_*]:pointer-events-none">
				<label hlmFieldLabel for="native-select-13" class="text-foreground block px-3 pt-2 text-xs font-medium">
					Select with inset label (native)
				</label>
				<hlm-native-select
					id="native-select-13"
					value="placeholder"
					class="shadow-none [&>select]:border-none [&>select]:bg-transparent [&>select]:focus-visible:ring-0 [&>select]:focus-visible:ring-offset-0">
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
export class Select13Component {}
