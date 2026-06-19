import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-03',
	imports: [HlmSwitch],
	template: `
		<hlm-switch
			id="switch-03"
			class="h-6! w-10! border-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)] [&>brn-switch-thumb]:size-5! [&>brn-switch-thumb[data-state=checked]]:translate-x-[calc(100%-4px)]!" />
	`,
})
export class Switch03Component {}
