import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-18',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2 [--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)]">
				<label hlmFieldLabel for="select-18">Select with gray background</label>
				<brn-select placeholder="Select an option" id="select-18" value="Angular">
					<hlm-select-trigger
						class="[&>button]:bg-muted [&>button]:w-full [&>button]:border-transparent [&>button]:shadow-none">
						<hlm-select-value />
					</hlm-select-trigger>
					<hlm-select-content>
						<hlm-option value="Angular">Angular</hlm-option>
						<hlm-option value="React">React</hlm-option>
						<hlm-option value="Vue">Vue</hlm-option>
						<hlm-option value="Svelte">Svelte</hlm-option>
					</hlm-select-content>
				</brn-select>
			</div>
		</div>
	`,
})
export class Select18Component {}
