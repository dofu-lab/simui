import { Component } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-07',
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<div class="flex items-start gap-3">
			<hlm-checkbox [inputId]="'checkbox-remember-me'" [checked]="true" />
			<label hlmLabel class="flex items-start gap-2" for="checkbox-remember-me">
				<div class="grid grow gap-2 pt-0.5">
					<span>Remember me</span>
					<span class="text-muted-foreground text-xs">Save my login details for next time.</span>
				</div>
			</label>
		</div>
	`,
})
export class Checkbox07Component {}
