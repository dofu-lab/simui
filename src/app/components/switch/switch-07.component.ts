import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-07',
	imports: [HlmSwitch],
	template: `
		<hlm-switch
			id="switch-07"
			class="mr-2 h-6! w-10! border-2 data-[state=unchecked]:bg-background data-[state=unchecked]:border-input pl-0.5 [&>brn-switch-thumb]:size-5! [&>brn-switch-thumb]:data-unchecked:bg-input [&>brn-switch-thumb[data-state=unchecked]]:size-4! [&>brn-switch-thumb[data-state=checked]]:translate-x-[calc(100%-6px)]!" />
	`,
})
export class Switch07Component {}
