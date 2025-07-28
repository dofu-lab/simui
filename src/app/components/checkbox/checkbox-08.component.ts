import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-08',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: `
		<label hlmLabel class="flex items-start gap-2" for="checkbox-08">
			<hlm-checkbox id="checkbox-08" [checked]="true" />
			<div class="grid grow gap-2 pt-0.5">
				<div>
					Checkbox label
					<span class="text-muted-foreground text-xs">(Sublabel)</span>
				</div>
				<span class="text-muted-foreground text-xs">Save my login details for next time.</span>
			</div>
		</label>
	`,
})
export class Checkbox08Component {}

export const checkbox08Code = `import { Component } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-08',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective],
	template: \`
		<label hlmLabel class="flex items-start gap-2" for="checkbox-08">
			<hlm-checkbox id="checkbox-08" [checked]="true" />
			<div class="grid grow gap-2 pt-0.5">
				<div>
					Checkbox label
					<span class="text-muted-foreground text-xs">(Sublabel)</span>
				</div>
				<span class="text-muted-foreground text-xs">Save my login details for next time.</span>
			</div>
		</label>
	\`,
})
export class Checkbox08Component {}`;
