import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-06',
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<label hlmLabel class="group flex items-center" for="checkbox-06">
			<hlm-checkbox id="checkbox-06" class="peer" [checked]="true" />
			<span
				class="group-has-data-[state=checked]:text-muted-foreground relative transition-all duration-100 before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-0 before:bg-current before:transition-all before:duration-300 before:ease-out group-has-data-[state=checked]:before:w-full">
				Clean your bedroom?
			</span>
		</label>
	`,
})
export class Checkbox06Component {}

export const checkbox06Code = `import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-06',
	imports: [HlmCheckbox, HlmLabel],
	template: \`
		<label hlmLabel class="group flex items-center" for="checkbox-06">
			<hlm-checkbox id="checkbox-06" class="peer" [checked]="true" />
			<span
				class="group-has-data-[state=checked]:text-muted-foreground relative transition-all duration-100 before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-0 before:bg-current before:transition-all before:duration-300 before:ease-out group-has-data-[state=checked]:before:w-full">
				Clean your bedroom?
			</span>
		</label>
	\`,
})
export class Checkbox06Component {}`;
