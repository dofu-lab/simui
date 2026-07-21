import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-11',
	imports: [HlmCheckboxImports, HlmLabelImports],
	host: {
		class: 'w-full max-w-[300px]',
	},
	template: `
		<div class="flex flex-row items-center justify-between gap-2">
			<label [for]="uniqueId('checkbox11')" class="flex-1" hlmLabel>Right checkbox</label>
			<hlm-checkbox [inputId]="uniqueId('checkbox11')" />
		</div>
	`,
})
export class Checkbox11Component {
	private readonly id = crypto.randomUUID();

	protected uniqueId(suffix: string): string {
		return `checkbox-11-${this.id}-${suffix}`;
	}
}
