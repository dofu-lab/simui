import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-13',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
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

export const checkbox13Code = `import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-13',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
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
export class Checkbox13Component {}`;
