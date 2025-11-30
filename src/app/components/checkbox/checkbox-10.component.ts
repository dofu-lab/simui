import { Component, model } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-10',
	imports: [HlmCheckbox, HlmLabel],
	template: `
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
			for="checkbox-10">
			<div class="peer flex items-start gap-2">
				<hlm-checkbox id="checkbox-10" [(checked)]="checked" />
				<div class="grid grow gap-2 pt-0.5 select-none">
					<span>
						Checkbox label
						<span class="text-muted-foreground text-xs">(Sublabel)</span>
					</span>
					<span class="text-muted-foreground text-xs">The description of the checkbox here.</span>
				</div>
			</div>
		</label>
	`,
})
export class Checkbox10Component {
	public readonly checked = model<boolean>(false);
}