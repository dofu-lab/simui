import { NgModule } from '@angular/core';

import { HlmPopoverClose } from './lib/hlm-popover-close.directive';
import { HlmPopoverContent } from './lib/hlm-popover-content.directive';

export * from './lib/hlm-popover-close.directive';
export * from './lib/hlm-popover-content.directive';

export const HlmPopoverImports = [HlmPopoverContent, HlmPopoverClose] as const;

@NgModule({
	imports: [...HlmPopoverImports],
	exports: [...HlmPopoverImports],
})
export class HlmPopoverModule {}
