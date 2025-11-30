import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-05',
	imports: [HlmSwitch],
	template: `
		<hlm-switch
			id="switch-05"
			class="mr-2 h-6 w-10 rounded-md border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:rounded-[6px] [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]" />
	`,
})
export class Switch05Component {}