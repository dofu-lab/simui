import { Component, model } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-09',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmInputDirective],
	template: `
		<label hlmLabel class="peer flex items-start gap-2" for="checkbox-09">
			<hlm-checkbox id="checkbox-09" [(checked)]="checked" />
			<div class="grid grow gap-2 pt-0.5">
				<span>Subscribe to newsletter</span>
				<span class="text-muted-foreground text-xs">Get the latest news and updates from us.</span>
			</div>
		</label>
		<div
			class="grid transition-all ease-in-out peer-not-checked:grid-rows-[0fr] peer-not-checked:opacity-0 peer-has-checked:grid-rows-[1fr] peer-has-checked:opacity-100">
			<div class="pointer-events-none -m-2 overflow-hidden p-2">
				<div class="pointer-events-auto mt-3">
					<input hlmInput type="text" class="h-9 w-full" placeholder="Enter your email address" />
				</div>
			</div>
		</div>
	`,
})
export class Checkbox09Component {
	public readonly checked = model<boolean>(false);
}

export const checkbox09Code = `
import { Component, model } from '@angular/core';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-09',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmInputDirective],
	template: \`
		<label hlmLabel class="peer flex items-start gap-2" for="checkbox-09">
			<hlm-checkbox id="checkbox-09" [(checked)]="checked" />
			<div class="grid grow gap-2 pt-0.5">
				<span>Subscribe to newsletter</span>
				<span class="text-muted-foreground text-xs">Get the latest news and updates from us.</span>
			</div>
		</label>
		<div
			class="grid transition-all ease-in-out peer-not-checked:grid-rows-[0fr] peer-not-checked:opacity-0 peer-has-checked:grid-rows-[1fr] peer-has-checked:opacity-100">
			<div class="pointer-events-none -m-2 overflow-hidden p-2">
				<div class="pointer-events-auto mt-3">
					<input hlmInput type="text" class="h-9 w-full" placeholder="Enter your email address" />
				</div>
			</div>
		</div>
	\`,
})
export class Checkbox09Component {
	public readonly checked = model<boolean>(false);
}
`;
