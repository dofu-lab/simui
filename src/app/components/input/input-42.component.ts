import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus } from '@ng-icons/lucide';
import { BrnInputOtp } from '@spartan-ng/brain/input-otp';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot } from '@spartan-ng/helm/input-otp';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-42',
	imports: [NgIcon, HlmIcon, HlmLabel, HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot, BrnInputOtp, FormsModule],
	providers: [provideIcons({ lucideMinus })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-42" class="mb-2 text-sm">OTP input double group</label>
		<brn-input-otp hlm maxLength="6" inputClass="disabled:cursor-not-allowed" class="mt-2" [ngModel]="otpValue()">
			<div
				hlmInputOtpGroup
				class="flex items-center justify-center -space-x-px [&>hlm-input-otp-slot]:first:rounded-l-md [&>hlm-input-otp-slot]:last:rounded-r-md">
				<hlm-input-otp-slot index="0" class="size-9 border" />
				<hlm-input-otp-slot index="1" class="size-9 border" />
				<hlm-input-otp-slot index="2" class="size-9 border" />
			</div>
			<div class="text-muted-foreground/80">
				<ng-icon hlm name="lucideMinus" size="sm" aria-hidden="true" />
			</div>
			<div
				hlmInputOtpGroup
				class="flex items-center justify-center -space-x-px [&>hlm-input-otp-slot]:first:rounded-l-md [&>hlm-input-otp-slot]:last:rounded-r-md">
				<hlm-input-otp-slot index="3" class="size-9 border" />
				<hlm-input-otp-slot index="4" class="size-9 border" />
				<hlm-input-otp-slot index="5" class="size-9 border" />
			</div>
		</brn-input-otp>
	`,
})
export class Input42Component {
	readonly otpValue = model<string>('');
}

export const input42Code = ``;
