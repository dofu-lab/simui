import { Component, model } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-04',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label hlmLabel class="flex items-center" for="indeterminate-checkbox">
			<hlm-checkbox id="indeterminate-checkbox" class="mr-2" [(checked)]="checked" />
			Indeterminate checkbox
		</label>
	`,
})
export class Checkbox04Component {
	public readonly checked = model<boolean | 'indeterminate'>('indeterminate');
}

export const checkbox04Code = `import { Component, model } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-04',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label hlmLabel class="flex items-center" for="indeterminate-checkbox">
			<hlm-checkbox id="indeterminate-checkbox" class="mr-2" [(checked)]="checked" />
			Indeterminate checkbox
		</label>
	\`,
})
export class Checkbox04Component {
	public readonly checked = model<boolean | 'indeterminate'>('indeterminate');
}`;
