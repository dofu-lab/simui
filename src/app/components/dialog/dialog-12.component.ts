import { afterNextRender, Component, computed, model, OnDestroy, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { BrnInputOtp } from '@spartan-ng/brain/input-otp';
import { HlmButton } from '@spartan-ng/helm/button';
import {
	HlmDialog,
	HlmDialogContent,
	HlmDialogDescription,
	HlmDialogFooter,
	HlmDialogHeader,
} from '@spartan-ng/helm/dialog';
import { HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot } from '@spartan-ng/helm/input-otp';

@Component({
	selector: 'sim-dialog-12',
	imports: [
		FormsModule,
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		HlmDialogFooter,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
		HlmInputOtp,
		HlmInputOtpGroup,
		HlmInputOtpSlot,
		BrnInputOtp,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">OTP</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-1">
					<div class="flex size-9 shrink-0 items-center justify-center">
						<svg width="36" height="36" viewBox="0 0 36 36" class="fill-primary" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_380_1629)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.47059 9C3.79241 9 0 12.7722 0 17.4255C0 22.0788 3.79241 25.8511 8.47059 25.8511H27.5294C32.2076 25.8511 36 22.0788 36 17.4255C36 12.7722 32.2076 9 27.5294 9H8.47059ZM4.23529 17.4255C4.23529 15.0989 6.1315 13.2128 8.47059 13.2128H27.5294C29.8685 13.2128 31.7647 15.0989 31.7647 17.4255C31.7647 19.7521 29.8685 21.6383 27.5294 21.6383H8.47059C6.1315 21.6383 4.23529 19.7521 4.23529 17.4255ZM6.35294 17.4255C6.35294 16.2622 7.30104 15.3191 8.47059 15.3191H27.1444C28.3139 15.3191 29.2621 16.2622 29.2621 17.4255C29.2621 18.5889 28.3139 19.5319 27.1444 19.5319H8.47059C7.30104 19.5319 6.35294 18.5889 6.35294 17.4255Z"
									fill="currentColor" />
							</g>
							<defs>
								<clipPath id="clip0_380_1629">
									<rect width="36" height="16.8511" fill="white" transform="translate(0 9)" />
								</clipPath>
							</defs>
						</svg>
					</div>
					@if (isVerified()) {
						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Code verified!</h2>
							<p hlmDialogDescription class="text-center">Your code has been successfully verified.</p>
						</hlm-dialog-header>
					} @else {
						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Enter confirmation code</h2>
							<p hlmDialogDescription class="text-center">
								Check your email and enter the code - Try {{ defaultOtpValue }}
							</p>
						</hlm-dialog-header>
						<brn-input-otp
							hlm
							maxLength="4"
							inputClass="disabled:cursor-not-allowed"
							class="mt-2"
							[ngModel]="otpValue()"
							(ngModelChange)="otpChanged($event)">
							<div hlmInputOtpGroup class="flex items-center justify-center gap-2">
								<hlm-input-otp-slot index="0" class="size-9 rounded-md border" />
								<hlm-input-otp-slot index="1" class="size-9 rounded-md border" />
								<hlm-input-otp-slot index="2" class="size-9 rounded-md border" />
								<hlm-input-otp-slot index="3" class="size-9 rounded-md border" />
							</div>
						</brn-input-otp>
						@if (isInvalidCode()) {
							<p class="text-muted-foreground mt-4 text-center text-xs">Invalid code. Please try again.</p>
						}
					}
				</div>
				<hlm-dialog-footer class="gap-3 sm:items-center sm:justify-center sm:space-x-0">
					@if (isVerified()) {
						<button hlmBtn class="h-9" (click)="closeDialog()">Close</button>
					} @else {
						<button
							hlmBtn
							type="submit"
							variant="link"
							class="h-9"
							[disabled]="isResendDisabled()"
							(click)="resendCode()">
							Resend code {{ countdown() }}s
						</button>
					}
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog12Component implements OnDestroy {
	public dialogRef = viewChild(BrnDialog);
	public defaultOtpValue = '1234';
	public otpValue = model<string>('');
	public countdown = signal(60);
	public isVerified = signal(false);
	public isInvalidCode = signal(false);
	public isResendDisabled = computed(() => this.countdown() > 0);
	private _intervalId?: NodeJS.Timeout;

	constructor() {
		afterNextRender(() => this.startCountdown());
	}

	otpChanged(event: string) {
		this.otpValue.set(event);

		// Reset validation state when input is empty
		if (event.length === 0) {
			this.isVerified.set(false);
			return;
		}

		// When code is not yet complete
		if (event.length < 4) {
			this.isInvalidCode.set(false);
			return;
		}

		// Handle completed OTP entry
		if (event === this.defaultOtpValue) {
			this.isVerified.set(true);
			this.isInvalidCode.set(false);
		} else {
			this.isVerified.set(false);
			this.isInvalidCode.set(true);
			this.otpValue.set('');
		}
	}

	closeDialog() {
		this.dialogRef()?.close({});
	}

	resendCode() {
		this.resetCountdown();
	}

	resendOtp() {
		this.resetCountdown();
	}

	ngOnDestroy() {
		this.otpValue.set('');
		this.stopCountdown();
	}

	private resetCountdown() {
		this.countdown.set(60);
		this.startCountdown();
	}

	private startCountdown() {
		this.stopCountdown();
		this._intervalId = setInterval(() => {
			this.countdown.update((countdown) => Math.max(0, countdown - 1));
			if (this.countdown() === 0) {
				this.stopCountdown();
			}
		}, 1000);
	}

	private stopCountdown() {
		if (this._intervalId) {
			clearInterval(this._intervalId);
			this._intervalId = undefined;
		}
	}
}