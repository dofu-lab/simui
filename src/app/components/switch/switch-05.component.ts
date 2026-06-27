import { Component } from '@angular/core';
import { HlmSwitchImports } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-05',
	imports: [HlmSwitchImports],
	template: `
		<hlm-switch
			id="switch-05"
			class="h-6! w-10! rounded-md border-2 [&>brn-switch-thumb]:size-5! [&>brn-switch-thumb]:rounded-[6px] [&>brn-switch-thumb[data-state=checked]]:translate-x-[calc(100%-4px)]!" />
	`,
})
export class Switch05Component {}
