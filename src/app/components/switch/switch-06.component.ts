import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-06',
	imports: [HlmSwitch],
	template: `
		<hlm-switch
			id="switch-06"
			class="[&>brn-switch-thumb]:border-input/80 mr-2 h-3 w-10 border-0 [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:border [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%)]" />
	`,
})
export class Switch06Component {}