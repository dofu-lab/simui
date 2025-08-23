import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-01',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<label hlmLabel for="checkbox-01" class="flex items-center">
			<hlm-checkbox id="checkbox-01" />
			Basic checkbox
		</label>
	`,
})
export class Checkbox01Component {}

export const checkbox01Code = `import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-01',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: \`
		<label hlmLabel for="checkbox-01" class="flex items-center">
			<hlm-checkbox id="checkbox-01" />
			Basic checkbox
		</label>
	\`,
})
export class Checkbox01Component {}`;
