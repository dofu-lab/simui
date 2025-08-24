import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-18',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<label hlmLabel class="flex items-center" for="checkbox-18">
			<hlm-checkbox
				id="checkbox-18"
				class="peer border-input rounded-full focus-visible:ring-sky-600 data-[state=checked]:border-sky-600 data-[state=checked]:bg-sky-600"
				[checked]="true" />
			<span
				class="after:bg-muted-foreground peer-has-checked:text-muted-foreground relative peer-has-checked:line-through after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:origin-left after:-translate-y-1/2 after:scale-x-0 after:transition-transform after:ease-in-out peer-has-checked:after:scale-x-100">
				Implement new landing page
			</span>
		</label>
	`,
})
export class Checkbox18Component {}

export const checkbox18Code = `import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-18',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: \`
		<label hlmLabel class="flex items-center" for="checkbox-18">
			<hlm-checkbox
				id="checkbox-18"
				class="peer border-input rounded-full focus-visible:ring-sky-600 data-[state=checked]:border-sky-600 data-[state=checked]:bg-sky-600"
				[checked]="true" />
			<span
				class="after:bg-muted-foreground peer-has-checked:text-muted-foreground relative peer-has-checked:line-through after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:origin-left after:-translate-y-1/2 after:scale-x-0 after:transition-transform after:ease-in-out peer-has-checked:after:scale-x-100">
				Implement new landing page
			</span>
		</label>
	\`,
})
export class Checkbox18Component {}`;
