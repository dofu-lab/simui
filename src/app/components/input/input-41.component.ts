import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnInputOtpImports } from '@spartan-ng/brain/input-otp';
import { HlmInputOtpImports } from '@spartan-ng/helm/input-otp';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-41',
	imports: [FormsModule, HlmLabelImports, HlmInputOtpImports, BrnInputOtpImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-41" class="mb-2 text-sm">OTP input single</label>
		<brn-input-otp
			id="input-41"
			hlm
			maxLength="4"
			inputClass="disabled:cursor-not-allowed"
			class="mt-2"
			[ngModel]="otpValue()">
			<div
				hlmInputOtpGroup
				class="flex items-center justify-center -space-x-px [&>hlm-input-otp-slot]:first:rounded-l-md [&>hlm-input-otp-slot]:last:rounded-r-md">
				<hlm-input-otp-slot index="0" class="size-9 border" />
				<hlm-input-otp-slot index="1" class="size-9 border" />
				<hlm-input-otp-slot index="2" class="size-9 border" />
				<hlm-input-otp-slot index="3" class="size-9 border" />
			</div>
		</brn-input-otp>
	`,
})
export class Input41Component {
	protected readonly otpValue = model<string>('');
}
