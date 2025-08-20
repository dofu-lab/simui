import { NgModule } from '@angular/core';

import { HlmSwitchThumb } from './lib/hlm-switch-thumb.directive';
import { HlmSwitch } from './lib/hlm-switch.component';

export * from './lib/hlm-switch-thumb.directive';
export * from './lib/hlm-switch.component';

export const HlmSwitchImports = [HlmSwitch, HlmSwitchThumb] as const;
@NgModule({
	imports: [...HlmSwitchImports],
	exports: [...HlmSwitchImports],
})
export class HlmSwitchModule {}
