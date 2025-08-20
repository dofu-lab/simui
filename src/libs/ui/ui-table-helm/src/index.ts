import { NgModule } from '@angular/core';

import { HlmCaption } from './lib/hlm-caption.component';
import { HlmTable } from './lib/hlm-table.component';
import { HlmTd } from './lib/hlm-td.component';
import { HlmTh } from './lib/hlm-th.component';
import { HlmTrow } from './lib/hlm-trow.component';

export { HlmCaption } from './lib/hlm-caption.component';
export { HlmTable } from './lib/hlm-table.component';
export { HlmTable } from './lib/hlm-table.directive';
export { HlmTd } from './lib/hlm-td.component';
export { HlmTh } from './lib/hlm-th.component';
export { HlmTrow } from './lib/hlm-trow.component';

export const HlmTableImports = [HlmTable, HlmTable, HlmCaption, HlmTh, HlmTd, HlmTrow] as const;

@NgModule({
	imports: [...HlmTableImports],
	exports: [...HlmTableImports],
})
export class HlmTableModule {}
