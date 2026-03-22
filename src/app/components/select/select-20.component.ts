import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-20',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-20" class="gap-0.5">
					Required select
					<span class="text-destructive">*</span>
				</label>
				<brn-select placeholder="Select an option" id="select-20" value="Angular" required>
					<hlm-select-trigger class="[&>button]:w-full">
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
export class Select20Component {}
