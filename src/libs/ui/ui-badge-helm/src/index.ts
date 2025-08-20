import { NgModule } from '@angular/core';
import { HlmBadge } from './lib/hlm-badge.directive';

export * from './lib/hlm-badge.directive';

@NgModule({
	imports: [HlmBadge],
	exports: [HlmBadge],
})
export class HlmBadgeModule {}
