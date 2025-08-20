import { NgModule } from '@angular/core';
import { HlmScrollArea } from './lib/hlm-scroll-area.directive';

export * from './lib/hlm-scroll-area.directive';

@NgModule({
	imports: [HlmScrollArea],
	exports: [HlmScrollArea],
})
export class HlmScrollAreaModule {}
