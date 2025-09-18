import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-04',
	imports: [HlmSwitch],
	template: `
		<hlm-switch
			disabled
			id="switch-04"
			class="mr-2 h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]" />
	`,
})
export class Switch04Component {}

export const switch04Code = `import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-04',
	imports: [HlmSwitch],
	template: \`
		<hlm-switch
			disabled
			id="switch-04"
			class="mr-2 h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]" />
	\`,
})
export class Switch04Component {}`;
