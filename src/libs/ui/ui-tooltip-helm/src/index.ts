import { NgModule } from '@angular/core';
import { HlmTooltipTrigger } from './lib/hlm-tooltip-trigger.directive';
import { HlmTooltip } from './lib/hlm-tooltip.component';

export * from './lib/hlm-tooltip-trigger.directive';
export * from './lib/hlm-tooltip.component';

export const HlmTooltipImports = [HlmTooltip, HlmTooltipTrigger] as const;

@NgModule({
	imports: [...HlmTooltipImports],
	exports: [...HlmTooltipImports],
})
export class HlmTooltipModule {}
