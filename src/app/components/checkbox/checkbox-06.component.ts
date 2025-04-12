import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-06',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label hlmLabel class="flex items-center" for="checkbox-06">
			<hlm-checkbox id="checkbox-06" class="peer mr-2" [checked]="true" />
			<span class="peer-has-checked:text-muted-foreground peer-has-checked:line-through">Clean your bedroom?</span>
		</label>
	`,
})
export class Checkbox06Component {}

export const checkbox06Code = `
import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-06',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label hlmLabel class="flex items-center" for="checkbox-06">
			<hlm-checkbox id="checkbox-06" class="peer mr-2" [checked]="true" />
			<span class="peer-has-checked:text-muted-foreground peer-has-checked:line-through">Clean your bedroom?</span>
		</label>
	\`,
})
export class Checkbox06Component {}
`;
