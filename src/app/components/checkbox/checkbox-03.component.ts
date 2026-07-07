import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideMoon } from '@ng-icons/lucide';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-03',
	imports: [HlmCheckboxImports, HlmLabelImports],
	providers: [provideIcons({ lucideMoon })],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox [inputId]="uniqueId('checkbox03')" checkIconName="lucideMoon" />
			<label hlmLabel class="flex items-center" [for]="uniqueId('checkbox03')">Custom icon</label>
		</div>
	`,
})
export class Checkbox03Component {
	private readonly id = crypto.randomUUID();

	protected uniqueId(suffix: string): string {
		return `checkbox-03-${this.id}-${suffix}`;
	}
}
