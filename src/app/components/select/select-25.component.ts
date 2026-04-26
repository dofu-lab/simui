import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-select-25',
	imports: [BrnSelectImports, HlmSelectImports, HlmFieldImports],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div
				hlmField
				class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 relative gap-0 rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 has-[select:is(:disabled)_*]:pointer-events-none">
				<label hlmFieldLabel for="select-25" class="text-foreground block px-3 pt-2 text-xs font-medium">
					Select with inset label
				</label>
				<hlm-select id="select-25">
					<hlm-select-trigger
						class="shadow-none [&>button]:w-full [&>button]:border-none [&>button]:bg-transparent [&>button]:focus-visible:ring-0 [&>button]:focus-visible:ring-offset-0">
						<hlm-select-value placeholder="Select framework" />
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
export class Select25Component {}
