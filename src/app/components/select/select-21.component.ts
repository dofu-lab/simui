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
				<hlm-select id="select-21" value="Angular" required>
					<hlm-select-trigger class="[&>button]:w-full">
						<hlm-select-value placeholder="Select an option" />
					</hlm-select-trigger>
					<hlm-select-content *hlmSelectPortal>
						<hlm-select-group>
							<hlm-select-label>Frontend Frameworks</hlm-select-label>
							<hlm-select-item value="Angular">Angular</hlm-select-item>
							<hlm-select-item value="React">React</hlm-select-item>
							<hlm-select-item value="Vue">Vue</hlm-select-item>
							<hlm-select-item value="Svelte">Svelte</hlm-select-item>
						</hlm-select-group>
						<hlm-select-group>
							<hlm-select-label>Backend Frameworks</hlm-select-label>
							<hlm-select-item value="Node.js">Node.js</hlm-select-item>
							<hlm-select-item value="Django">Django</hlm-select-item>
							<hlm-select-item value="Ruby on Rails">Ruby on Rails</hlm-select-item>
							<hlm-select-item value="Spring">Spring</hlm-select-item>
						</hlm-select-group>
					</hlm-select-content>
				</hlm-select>
			</div>
		</div>
	`,
})
export class Select21Component {}
