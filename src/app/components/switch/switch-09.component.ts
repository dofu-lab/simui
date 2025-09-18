import { Component, model } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-09',
	imports: [HlmSwitch, HlmLabel],
	template: `
		<div class="group flex items-center gap-2" [attr.data-state]="value() ? 'checked' : 'unchecked'">
			<span
				hlmLabel
				class="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
				(click)="value.set(false)">
				Off
			</span>
			<hlm-switch
				id="switch-09"
				class="h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]"
				[(checked)]="value" />
			<span
				hlmLabel
				class="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
				(click)="value.set(true)">
				On
			</span>
		</div>
	`,
})
export class Switch09Component {
	readonly value = model(false);
}

export const switch09Code = `import { Component, model } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-09',
	imports: [HlmSwitch, HlmLabel],
	template: \`
		<div class="group flex items-center gap-2" [attr.data-state]="value() ? 'checked' : 'unchecked'">
			<span
				hlmLabel
				class="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
				(click)="value.set(false)">
				Off
			</span>
			<hlm-switch
				id="switch-09"
				class="h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]"
				[(checked)]="value" />
			<span
				hlmLabel
				class="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
				(click)="value.set(true)">
				On
			</span>
		</div>
	\`,
})
export class Switch09Component {
	readonly value = model(false);
}`;
