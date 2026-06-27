import { Component, model } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-04',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox inputId="indeterminate-checkbox" [(indeterminate)]="checked" />
			<label hlmLabel class="flex items-center" for="indeterminate-checkbox">Indeterminate checkbox</label>
		</div>
	`,
})
export class Checkbox04Component {
	public readonly checked = model<boolean>(true);
}
