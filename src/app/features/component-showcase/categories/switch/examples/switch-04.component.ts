import { Component } from '@angular/core';
import { HlmSwitchImports } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-04',
	imports: [HlmSwitchImports],
	template: `
		<hlm-switch
			disabled
			id="switch-04"
			class="h-6! w-10! border-2 [&>brn-switch-thumb]:size-5! [&>brn-switch-thumb[data-state=checked]]:translate-x-[calc(100%-4px)]!" />
	`,
})
export class Switch04Component {}
