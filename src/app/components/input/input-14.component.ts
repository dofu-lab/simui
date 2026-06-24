import { Component } from '@angular/core';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-14',
	imports: [HlmLabelImports, HlmButtonGroupImports, HlmInputGroupImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-14" class="mb-2 text-sm">Input with start inline add-on</label>
		<hlm-button-group class="w-full">
			<hlm-button-group-text class="text-muted-foreground/80 dark:bg-input/30 bg-transparent text-sm font-normal">
				<label hlmLabel for="input-14">https://</label>
			</hlm-button-group-text>
			<hlm-input-group>
				<input hlmInputGroupInput id="input-14" type="text" placeholder="google.com" />
			</hlm-input-group>
		</hlm-button-group>
	`,
})
export class Input14Component {}
