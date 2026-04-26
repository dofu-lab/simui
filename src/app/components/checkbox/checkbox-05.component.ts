import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-05',
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox disabled id="checkbox05" />
			<label hlmLabel class="flex items-center" for="checkbox05">Disabled checkbox</label>
		</div>
	`,
})
export class Checkbox05Component {}
