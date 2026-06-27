import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-08',
	imports: [HlmCheckboxImports, HlmLabelImports],
	template: `
		<div class="flex items-start gap-3">
			<hlm-checkbox inputId="checkbox08" [checked]="true" />
			<label hlmLabel class="flex items-start gap-2" for="checkbox08">
				<div class="grid grow gap-2 pt-0.5">
					<div>
						Checkbox label
						<span class="text-muted-foreground text-xs">(Sublabel)</span>
					</div>
					<span class="text-muted-foreground text-xs">Save my login details for next time.</span>
				</div>
			</label>
		</div>
	`,
})
export class Checkbox08Component {}
