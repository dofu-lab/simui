import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-05',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label hlmLabel class="flex items-center" for="cb-05">
			<hlm-checkbox disabled class="mr-2" id="cb-05" />
			Disabled checkbox
		</label>
	`,
})
export class Checkbox05Component {}

export const checkbox05Code = `
import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-05',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label hlmLabel class="flex items-center" for="cb-05">
			<hlm-checkbox disabled class="mr-2" id="cb-05" />
			Disabled checkbox
		</label>
	\`,
})
export class Checkbox05Component {}
`;
