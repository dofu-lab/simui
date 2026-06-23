import { Component, model } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-04',
	imports: [HlmCheckbox, HlmLabel],
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
