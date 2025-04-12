import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-11',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
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

export const checkbox11Code = `
import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-11',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
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
export class Checkbox11Component {}
`;
