import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-06',
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox id="checkbox06" [checked]="true" />
			<label hlmLabel class="group flex items-center" for="checkbox06">
				<span
					class="group-has-data-[state=checked]:text-muted-foreground relative transition-all motion-reduce:transition-none duration-100 before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:motion-reduce:transition-none before:duration-300 before:ease-out group-has-data-[state=checked]:before:scale-x-100">
					Clean your bedroom?
				</span>
			</label>
		</div>
	`,
})
export class Checkbox06Component {}
