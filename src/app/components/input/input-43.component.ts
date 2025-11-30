import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnInputOtp } from '@spartan-ng/brain/input-otp';
import { HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot } from '@spartan-ng/helm/input-otp';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-43',
	imports: [HlmLabel, HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot, BrnInputOtp, FormsModule],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-43" class="mb-2 text-sm">OTP input with space</label>
		<brn-input-otp hlm maxLength="4" inputClass="disabled:cursor-not-allowed" class="mt-2" [ngModel]="otpValue()">
			<div hlmInputOtpGroup class="flex items-center justify-center gap-2">
				<hlm-input-otp-slot index="0" class="size-9 rounded-md border" />
				<hlm-input-otp-slot index="1" class="size-9 rounded-md border" />
				<hlm-input-otp-slot index="2" class="size-9 rounded-md border" />
				<hlm-input-otp-slot index="3" class="size-9 rounded-md border" />
			</div>
		</brn-input-otp>
	`,
})
export class Input43Component {
	readonly otpValue = model<string>('');
}