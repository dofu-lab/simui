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
				<hlm-select id="select-18" value="Angular">
					<hlm-select-trigger
						class="[&>button]:bg-muted [&>button]:w-full [&>button]:border-transparent [&>button]:shadow-none">
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
export class Select18Component {}
