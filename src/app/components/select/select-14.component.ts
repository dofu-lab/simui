import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-14',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-14">Simple select with default value</label>
				<hlm-select id="select-14" value="Angular">
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value placeholder="Select an option" />
					</hlm-select-trigger>
					<hlm-select-content *hlmSelectPortal>
						<hlm-select-group>
							<hlm-select-item value="Angular">Angular</hlm-select-item>
							<hlm-select-item value="React">React</hlm-select-item>
							<hlm-select-item value="Vue">Vue</hlm-select-item>
							<hlm-select-item value="Svelte">Svelte</hlm-select-item>
						</hlm-select-group>
					</hlm-select-content>
				</hlm-select>
			</div>
		</div>
	`,
})
export class Select14Component {}
