import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-02',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
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

export const checkbox02Code = `import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-02',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	template: \`
		<label class="flex items-center" hlmLabel for="checkbox-02">
			<hlm-checkbox
				id="checkbox-02"
				class="data-[state=checked]:text-background data-[state=unchecked]:bg-background border-border mr-2 focus-visible:ring-[#7F56D9] data-[state=checked]:border-[#7F56D9] data-[state=checked]:bg-[#7F56D9]" />
			Custom color checkbox
		</label>
	\`,
})
export class Checkbox02Component {}`;
