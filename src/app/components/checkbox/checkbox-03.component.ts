import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideMoon } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-03',
	imports: [HlmCheckbox, HlmLabel],
	providers: [provideIcons({ lucideMoon })],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox id="checkbox-03" checkIconName="lucideMoon" />
			<label hlmLabel class="flex items-center" for="checkbox-03">Custom icon</label>
		</div>
	`,
})
export class Checkbox03Component {}
