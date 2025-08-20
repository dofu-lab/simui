import { NgModule } from '@angular/core';
import { HlmToggleGroup } from './lib/hlm-toggle-group.directive';
import { HlmToggle } from './lib/hlm-toggle.directive';

export * from './lib/hlm-toggle-group.directive';
export * from './lib/hlm-toggle.directive';
@NgModule({
	imports: [HlmToggle],
	exports: [HlmToggle],
})
export class HlmToggleModule {}

@NgModule({
	imports: [HlmToggle, HlmToggleGroup],
	exports: [HlmToggle, HlmToggleGroup],
})
export class HlmToggleGroupModule {}
