import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-07',
	imports: [HlmSwitch],
	template: `
		<hlm-switch
			id="switch-07"
			class="data-[state=unchecked]:bg-background data-[state=unchecked]:border-input [&>brn-switch-thumb]:group-data-[state=unchecked]:bg-input mr-2 h-6 w-10 border-[2px] pl-0.5 [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-6px)] [&>brn-switch-thumb]:group-data-[state=unchecked]:size-4" />
	`,
})
export class Switch07Component {}

export const switch07Code = `import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-07',
	imports: [HlmSwitch],
	template: \`
		<hlm-switch
			id="switch-07"
			class="data-[state=unchecked]:bg-background data-[state=unchecked]:border-input [&>brn-switch-thumb]:group-data-[state=unchecked]:bg-input mr-2 h-6 w-10 border-[2px] pl-0.5 [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-6px)] [&>brn-switch-thumb]:group-data-[state=unchecked]:size-4" />
	\`,
})
export class Switch07Component {}`;
