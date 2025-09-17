import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-02',
	imports: [HlmSwitch],
	template: `
		<hlm-switch class="mr-2" />
	`,
})
export class Switch02Component {}

export const switch02Code = `import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-02',
	imports: [HlmSwitch],
	template: \`
		<hlm-switch class="mr-2" />
	\`,
})
export class Switch02Component {}`;
