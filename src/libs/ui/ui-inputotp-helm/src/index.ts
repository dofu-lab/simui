import { NgModule } from '@angular/core';
import { HlmInputOtpFakeCaret } from './lib/hlm-input-otp-fake-caret.component';
import { HlmInputOtpGroup } from './lib/hlm-input-otp-group.directive';
import { HlmInputOtpSeparator } from './lib/hlm-input-otp-separator.component';
import { HlmInputOtpSlot } from './lib/hlm-input-otp-slot.component';
import { HlmInputOtp } from './lib/hlm-input-otp.directive';

export * from './lib/hlm-input-otp-fake-caret.component';
export * from './lib/hlm-input-otp-group.directive';
export * from './lib/hlm-input-otp-separator.component';
export * from './lib/hlm-input-otp-slot.component';
export * from './lib/hlm-input-otp.directive';

@NgModule({
	imports: [HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSeparator, HlmInputOtpSlot, HlmInputOtpFakeCaret],
	exports: [HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSeparator, HlmInputOtpSlot, HlmInputOtpFakeCaret],
})
export class HlmInputOtpModule {}
