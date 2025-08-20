import { NgModule } from '@angular/core';
import { HlmSpinner } from './lib/hlm-spinner.component';

export * from './lib/hlm-spinner.component';

@NgModule({
	imports: [HlmSpinner],
	exports: [HlmSpinner],
})
export class HlmSpinnerModule {}
