import { NgModule } from '@angular/core';

import { HlmAlertDescription } from './lib/hlm-alert-description.directive';
import { HlmAlertIcon } from './lib/hlm-alert-icon.directive';
import { HlmAlertTitle } from './lib/hlm-alert-title.directive';
import { HlmAlert } from './lib/hlm-alert.directive';

export * from './lib/hlm-alert-description.directive';
export * from './lib/hlm-alert-icon.directive';
export * from './lib/hlm-alert-title.directive';
export * from './lib/hlm-alert.directive';

export const HlmAlertImports = [HlmAlert, HlmAlertTitle, HlmAlertDescription, HlmAlertIcon] as const;

@NgModule({
	imports: [...HlmAlertImports],
	exports: [...HlmAlertImports],
})
export class HlmAlertModule {}
