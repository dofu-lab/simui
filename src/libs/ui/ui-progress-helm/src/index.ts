import { NgModule } from '@angular/core';

import { HlmProgressIndicator } from './lib/hlm-progress-indicator.directive';
import { HlmProgress } from './lib/hlm-progress.directive';

export * from './lib/hlm-progress-indicator.directive';
export * from './lib/hlm-progress.directive';

export const HlmProgressImports = [HlmProgress, HlmProgressIndicator] as const;

@NgModule({
	imports: [...HlmProgressImports],
	exports: [...HlmProgressImports],
})
export class HlmProgressModule {}
