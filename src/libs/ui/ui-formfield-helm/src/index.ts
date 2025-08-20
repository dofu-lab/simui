import { NgModule } from '@angular/core';
import { HlmError } from './lib/hlm-error.directive';
import { HlmFormField } from './lib/hlm-form-field.component';
import { HlmHint } from './lib/hlm-hint.directive';

export * from './lib/hlm-error.directive';
export * from './lib/hlm-form-field.component';
export * from './lib/hlm-hint.directive';

@NgModule({
	imports: [HlmFormField, HlmError, HlmHint],
	exports: [HlmFormField, HlmError, HlmHint],
})
export class HlmFormFieldModule {}
