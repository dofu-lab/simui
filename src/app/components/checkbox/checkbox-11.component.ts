import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-11',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-row items-center justify-between gap-2">
			<label for="checkbox-11" class="flex-1" hlmLabel>Right checkbox</label>
			<hlm-checkbox id="checkbox-11" />
		</div>
	`,
})
export class Checkbox11Component {}

export const checkbox11Code = `import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-11',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex flex-row items-center justify-between gap-2">
			<label for="checkbox-11" class="flex-1" hlmLabel>Right checkbox</label>
			<hlm-checkbox id="checkbox-11" />
		</div>
	\`,
})
export class Checkbox11Component {}`;
