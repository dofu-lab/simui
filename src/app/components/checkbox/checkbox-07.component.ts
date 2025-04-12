import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-07',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label hlmLabel class="flex items-start gap-2" for="checkbox-remember-me">
			<hlm-checkbox id="checkbox-remember-me" [checked]="true" />
			<div class="grid grow gap-2 pt-0.5">
				<span>Remember me</span>
				<span class="text-muted-foreground text-xs">Save my login details for next time.</span>
			</div>
		</label>
	`,
})
export class Checkbox07Component {}

export const checkbox07Code = `
import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-07',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label hlmLabel class="flex items-start gap-2" for="checkbox-remember-me">
			<hlm-checkbox id="checkbox-remember-me" [checked]="true" />
			<div class="grid grow gap-2 pt-0.5">
				<span>Remember me</span>
				<span class="text-muted-foreground text-xs">Save my login details for next time.</span>
			</div>
		</label>
	\`,
})
export class Checkbox07Component {}
`;
