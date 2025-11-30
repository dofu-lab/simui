import { Component } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-02',
	imports: [HlmSwitch],
	template: `
		<hlm-switch />
	`,
})
export class Switch02Component {}