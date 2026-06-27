import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-13',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox inputId="checkbox13" />
			<label hlmLabel class="flex items-center" for="checkbox13">
				<span>
					I agree to the
					<a href="#" class="underline">terms and conditions</a>
				</span>
			</label>
		</div>
	`,
})
export class Checkbox13Component {}
