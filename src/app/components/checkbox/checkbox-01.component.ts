import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-01',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox [inputId]="'checkbox01'" />
			<label hlmLabel for="checkbox01">Basic checkbox</label>
		</div>
	`,
})
export class Checkbox01Component {}
