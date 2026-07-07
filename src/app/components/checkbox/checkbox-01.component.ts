import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-01',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox [inputId]="uniqueId('checkbox01')" />
			<label hlmLabel [for]="uniqueId('checkbox01')">Basic checkbox</label>
		</div>
	`,
})
export class Checkbox01Component {
	private readonly id = crypto.randomUUID();

	protected uniqueId(suffix: string): string {
		return `checkbox-01-${this.id}-${suffix}`;
	}
}
