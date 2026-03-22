import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-21',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-21">Select with options groups</label>
				<brn-select placeholder="Select an option" id="select-21" value="Angular" required>
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value />
					</hlm-select-trigger>
					<hlm-select-content>
						<hlm-select-group>
							<hlm-select-label>Frontend Frameworks</hlm-select-label>
							<hlm-option value="Angular">Angular</hlm-option>
							<hlm-option value="React">React</hlm-option>
							<hlm-option value="Vue">Vue</hlm-option>
							<hlm-option value="Svelte">Svelte</hlm-option>
						</hlm-select-group>
						<hlm-select-group>
							<hlm-select-label>Backend Frameworks</hlm-select-label>
							<hlm-option value="Node.js">Node.js</hlm-option>
							<hlm-option value="Django">Django</hlm-option>
							<hlm-option value="Ruby on Rails">Ruby on Rails</hlm-option>
							<hlm-option value="Spring">Spring</hlm-option>
						</hlm-select-group>
					</hlm-select-content>
				</brn-select>
			</div>
		</div>
	`,
})
export class Select21Component {}
