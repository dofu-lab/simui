import { NgModule } from '@angular/core';
import { HlmLabel } from './lib/hlm-label.directive';

export * from './lib/hlm-label.directive';

@NgModule({
	imports: [HlmLabel],
	exports: [HlmLabel],
})
export class HlmLabelModule {}
