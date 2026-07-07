import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-06',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox [inputId]="uniqueId('checkbox06')" [checked]="true" />
			<label hlmLabel class="group flex items-center" [for]="uniqueId('checkbox06')">
				<span
					class="group-has-data-[state=checked]:text-muted-foreground relative transition-all duration-100 before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:duration-300 before:ease-out group-has-data-[state=checked]:before:scale-x-100 motion-reduce:transition-none before:motion-reduce:transition-none">
					Clean your bedroom?
				</span>
			</label>
		</div>
	`,
})
export class Checkbox06Component {
	private readonly id = crypto.randomUUID();

	protected uniqueId(suffix: string): string {
		return `checkbox-06-${this.id}-${suffix}`;
	}
}
