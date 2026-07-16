import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-05',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox disabled [inputId]="uniqueId('checkbox05')" />
			<label hlmLabel class="flex items-center" [for]="uniqueId('checkbox05')">Disabled checkbox</label>
		</div>
	`,
})
export class Checkbox05Component {
	private readonly id = crypto.randomUUID();

	protected uniqueId(suffix: string): string {
		return `checkbox-05-${this.id}-${suffix}`;
	}
}
