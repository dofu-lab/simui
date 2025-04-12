import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-13',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label hlmLabel class="flex items-center" for="checkbox-13">
			<hlm-checkbox class="mr-2" id="checkbox-13" />
			<span>
				I agree to the
				<a href="#" class="underline">terms and conditions</a>
			</span>
		</label>
	`,
})
export class Checkbox13Component {}

export const checkbox13Code = `
import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-13',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label hlmLabel class="flex items-center" for="checkbox-13">
			<hlm-checkbox class="mr-2" id="checkbox-13" />
			<span>
				I agree to the
				<a href="#" class="underline">terms and conditions</a>
			</span>
		</label>
	\`,
})
export class Checkbox13Component {}
`;
