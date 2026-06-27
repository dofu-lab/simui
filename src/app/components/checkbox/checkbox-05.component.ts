import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-05',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox disabled inputId="checkbox05" />
			<label hlmLabel class="flex items-center" for="checkbox05">Disabled checkbox</label>
		</div>
	`,
})
export class Checkbox05Component {}
