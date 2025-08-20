import { NgModule } from '@angular/core';
import { HlmAspectRatio } from './lib/helm-aspect-ratio.directive';

export * from './lib/helm-aspect-ratio.directive';

@NgModule({
	imports: [HlmAspectRatio],
	exports: [HlmAspectRatio],
})
export class HlmAspectRatioModule {}
