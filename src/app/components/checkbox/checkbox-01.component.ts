import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-01',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label hlmLabel for="checkbox-01" class="flex items-center">
			<hlm-checkbox class="mr-2" id="checkbox-01" />
			Basic checkbox
		</label>
	`,
})
export class Checkbox01Component {}

export const checkbox01Code = `
import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-01',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label hlmLabel for="checkbox-01" class="flex items-center">
			<hlm-checkbox class="mr-2" id="checkbox-01" />
			Basic checkbox
		</label>
	\`,
})
export class Checkbox01Component {}
`;
