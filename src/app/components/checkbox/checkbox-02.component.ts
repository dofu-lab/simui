import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-02',
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<div class="flex items-center gap-3">
			<hlm-checkbox
				[inputId]="'checkbox02'"
				class="data-[state=checked]:text-background data-[state=unchecked]:bg-background border-border focus-visible:ring-[#7F56D9] data-[state=checked]:border-[#7F56D9] data-[state=checked]:bg-[#7F56D9]" />
			<label class="flex items-center" hlmLabel for="checkbox02">Custom color checkbox</label>
		</div>
	`,
})
export class Checkbox02Component {}
