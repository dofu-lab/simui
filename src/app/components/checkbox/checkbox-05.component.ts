import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-05',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<label hlmLabel class="flex items-center" for="cb-05">
			<hlm-checkbox disabled id="cb-05" />
			Disabled checkbox
		</label>
	`,
})
export class Checkbox05Component {}

export const checkbox05Code = `import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-05',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: \`
		<label hlmLabel class="flex items-center" for="cb-05">
			<hlm-checkbox disabled id="cb-05" />
			Disabled checkbox
		</label>
	\`,
})
export class Checkbox05Component {}`;
