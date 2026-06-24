import { Component } from '@angular/core';
import { HlmSwitchImports } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-02',
	imports: [HlmSwitchImports],
	template: `
		<hlm-switch />
	`,
})
export class Switch02Component {}
