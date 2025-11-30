import { Component, model } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-08',
	imports: [HlmSwitch, HlmLabel],
	template: `
		<div class="flex items-center gap-2">
			<hlm-switch
				id="switch-08"
				class="h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]"
				[(checked)]="value" />
			<span hlmLabel>
				@if (value()) {
					On
				} @else {
					Off
				}
			</span>
		</div>
	`,
})
export class Switch08Component {
	readonly value = model(true);
}