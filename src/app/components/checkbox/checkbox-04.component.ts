import { Component, model } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-04',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<label hlmLabel class="flex items-center" for="indeterminate-checkbox">
			<hlm-checkbox id="indeterminate-checkbox" [(checked)]="checked" />
			Indeterminate checkbox
		</label>
	`,
})
export class Checkbox04Component {
	public readonly checked = model<boolean | 'indeterminate'>('indeterminate');
}

export const checkbox04Code = `import { Component, model } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-04',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: \`
		<label hlmLabel class="flex items-center" for="indeterminate-checkbox">
			<hlm-checkbox id="indeterminate-checkbox" [(checked)]="checked" />
			Indeterminate checkbox
		</label>
	\`,
})
export class Checkbox04Component {
	public readonly checked = model<boolean | 'indeterminate'>('indeterminate');
}`;
