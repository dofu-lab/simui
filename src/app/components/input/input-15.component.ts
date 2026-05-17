import { Component } from '@angular/core';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-15',
	imports: [HlmLabel, HlmInputGroupImports, HlmButtonGroupImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-15" class="mb-2 text-sm">Input with end inline add-on</label>
		<hlm-button-group class="w-full">
			<hlm-input-group>
				<input hlmInputGroupInput id="input-15" type="text" placeholder="google.com" />
			</hlm-input-group>
			<hlm-button-group-text class="text-muted-foreground/80 dark:bg-input/30 bg-transparent text-sm font-normal">
				<label hlmLabel for="input-15">.com</label>
			</hlm-button-group-text>
		</hlm-button-group>
	`,
})
export class Input15Component {}
