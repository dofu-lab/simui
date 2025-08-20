import { NgModule } from '@angular/core';
import { HlmToggleGroup } from './lib/hlm-toggle-group.directive';
import { HlmToggleGroupItem } from './lib/hlm-toggle-item.directive';

export * from './lib/hlm-toggle-group.directive';
export * from './lib/hlm-toggle-item.directive';

@NgModule({
	imports: [HlmToggleGroupItem, HlmToggleGroup],
	exports: [HlmToggleGroupItem, HlmToggleGroup],
})
export class HlmToggleGroupModule {}
