import { Component, model } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-09',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmInput],
	host: {
		class: 'w-full',
	},
	template: `
		<label hlmLabel class="peer flex items-start gap-2" for="checkbox-09">
			<hlm-checkbox id="checkbox-09" [(checked)]="checked" />
			<div class="grid grow gap-2 pt-0.5">
				<span>Subscribe to newsletter</span>
				<span class="text-muted-foreground text-xs">Get the latest news and updates from us.</span>
			</div>
		</label>
		<div
			class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:grid-rows-[1fr] data-[state=expanded]:opacity-100"
			[attr.data-state]="checked() ? 'expanded' : 'collapsed'">
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

export const checkbox09Code = `import { Component, model } from '@angular/core';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-09',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmInput],
	host: {
		class: 'w-full',
	},
	template: \`
		<label hlmLabel class="peer flex items-start gap-2" for="checkbox-09">
			<hlm-checkbox id="checkbox-09" [(checked)]="checked" />
			<div class="grid grow gap-2 pt-0.5">
				<span>Subscribe to newsletter</span>
				<span class="text-muted-foreground text-xs">Get the latest news and updates from us.</span>
			</div>
		</label>
		<div
			class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:grid-rows-[1fr] data-[state=expanded]:opacity-100"
			[attr.data-state]="checked() ? 'expanded' : 'collapsed'">
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
}`;
