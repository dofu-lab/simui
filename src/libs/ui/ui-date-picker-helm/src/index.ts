import { NgModule } from '@angular/core';
import { HlmDatePickerMulti } from './lib/hlm-date-picker-multi.component';
import { HlmDatePicker } from './lib/hlm-date-picker.component';

export * from './lib/hlm-date-picker.token';

export * from './lib/hlm-date-picker-multi.component';
export * from './lib/hlm-date-picker.component';

export const HlmDatePickerImports = [HlmDatePicker, HlmDatePickerMulti] as const;

@NgModule({
	imports: [...HlmDatePickerImports],
	exports: [...HlmDatePickerImports],
})
export class HlmDatePickerModule {}
