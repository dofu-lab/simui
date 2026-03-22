import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-24',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="group relative gap-2">
				<label
					hlmFieldLabel
					for="select-24"
					class="bg-background text-foreground absolute start-1 top-0 z-10 block w-fit! -translate-y-1/2 px-1 text-xs font-medium group-has-[select:disabled]:opacity-50">
					Select with overlapping label
				</label>
				<brn-select placeholder="Select framework" id="select-24">
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
export class Select24Component {}
