import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-02',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label class="flex items-center" hlmLabel for="checkbox-02">
			<hlm-checkbox
				id="checkbox-02"
				class="data-[state=checked]:text-background data-[state=unchecked]:bg-background border-border mr-2 focus-visible:ring-[#7F56D9] data-[state=checked]:border-[#7F56D9] data-[state=checked]:bg-[#7F56D9]" />
			Custom color checkbox
		</label>
	`,
})
export class Checkbox02Component {}

export const checkbox02Code = `
import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-02',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label class="flex items-center" hlmLabel for="checkbox-02">
			<hlm-checkbox
				id="checkbox-02"
				class="data-[state=checked]:text-background data-[state=unchecked]:bg-background border-border mr-2 focus-visible:ring-[#7F56D9] data-[state=checked]:border-[#7F56D9] data-[state=checked]:bg-[#7F56D9]" />
			Custom color checkbox
		</label>
	\`,
})
export class Checkbox02Component {}
`;
