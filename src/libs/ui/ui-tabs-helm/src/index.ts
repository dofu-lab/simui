import { NgModule } from '@angular/core';

import { HlmTabsContent } from './lib/hlm-tabs-content.directive';
import { HlmTabsList } from './lib/hlm-tabs-list.component';
import { HlmTabsPaginatedList } from './lib/hlm-tabs-paginated-list.component';
import { HlmTabsTrigger } from './lib/hlm-tabs-trigger.directive';
import { HlmTabs } from './lib/hlm-tabs.component';

export * from './lib/hlm-tabs-content.directive';
export * from './lib/hlm-tabs-list.component';
export * from './lib/hlm-tabs-paginated-list.component';
export * from './lib/hlm-tabs-trigger.directive';
export * from './lib/hlm-tabs.component';

export const HlmTabsImports = [HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent, HlmTabsPaginatedList] as const;

@NgModule({
	imports: [...HlmTabsImports],
	exports: [...HlmTabsImports],
})
export class HlmTabsModule {}
