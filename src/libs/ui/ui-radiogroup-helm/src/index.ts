import { NgModule } from '@angular/core';

import { HlmRadioGroup } from './lib/hlm-radio-group.component';
import { HlmRadioIndicator } from './lib/hlm-radio-indicator.component';
import { HlmRadio } from './lib/hlm-radio.component';

export * from './lib/hlm-radio-group.component';
export * from './lib/hlm-radio-indicator.component';
export * from './lib/hlm-radio.component';

export const HlmRadioGroupImports = [HlmRadioGroup, HlmRadio, HlmRadioIndicator];

@NgModule({
	imports: [...HlmRadioGroupImports],
	exports: [...HlmRadioGroupImports],
})
export class HlmRadioGroupModule {}
