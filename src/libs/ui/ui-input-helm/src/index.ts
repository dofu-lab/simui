import { NgModule } from '@angular/core';
import { HlmInputError } from './lib/hlm-input-error.directive';
import { HlmInput } from './lib/hlm-input.directive';

export * from './lib/hlm-input-error.directive';
export * from './lib/hlm-input.directive';

@NgModule({
	imports: [HlmInput, HlmInputError],
	exports: [HlmInput, HlmInputError],
})
export class HlmInputModule {}
