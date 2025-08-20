import { NgModule } from '@angular/core';
import { HlmCalendarMulti } from './lib/hlm-calendar-multi.component';
import { HlmCalendar } from './lib/hlm-calendar.component';

export * from './lib/hlm-calendar-multi.component';
export * from './lib/hlm-calendar.component';

export const HlmCalendarImports = [HlmCalendar, HlmCalendarMulti] as const;

@NgModule({
	imports: [...HlmCalendarImports],
	exports: [...HlmCalendarImports],
})
export class HlmCalendarModule {}
