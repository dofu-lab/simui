import { afterNextRender, Component, computed, model, OnDestroy, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail } from '@ng-icons/lucide';
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
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot } from '@spartan-ng/helm/input-otp';

@Component({
	selector: 'sim-dialog-13',
	providers: [provideIcons({ lucideMail })],
	imports: [
		FormsModule,
		NgIcon,
		HlmIcon,
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
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Email OTP</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-1">
					<div class="flex size-12 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideMail" />
					</div>
					@if (isVerified()) {
						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Code verified!</h2>
							<p hlmDialogDescription class="text-center">Your code has been successfully verified.</p>
						</hlm-dialog-header>
					} @else {
						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Please check your email</h2>
							<p hlmDialogDescription class="text-center">We've sent a code to alan&#64;siumui.com</p>
						</hlm-dialog-header>
						<brn-input-otp
							hlm
							maxLength="4"
							inputClass="disabled:cursor-not-allowed"
							class="mt-5"
							[ngModel]="otpValue()"
							(ngModelChange)="otpChanged($event)">
							<div hlmInputOtpGroup class="flex items-center justify-center gap-2">
								<hlm-input-otp-slot index="0" class="size-15 rounded-md border text-[40px]" />
								<hlm-input-otp-slot index="1" class="size-15 rounded-md border text-[40px]" />
								<hlm-input-otp-slot index="2" class="size-15 rounded-md border text-[40px]" />
								<hlm-input-otp-slot index="3" class="size-15 rounded-md border text-[40px]" />
							</div>
						</brn-input-otp>
						<span class="text-muted-foreground mt-2 text-left text-xs">
							Didn't get a code?
							@if (isResendDisabled()) {
								<span class="text-muted-foreground cursor-not-allowed">Resend after {{ countdown() }}s</span>
							} @else {
								<span class="hover:text-primary cursor-pointer hover:underline" (click)="resendOtp()">
									Click to resend
								</span>
							}
						</span>
						@if (isInvalidCode()) {
							<p class="text-muted-foreground mt-4 text-center text-xs">Invalid code. Please try again.</p>
						}
					}
				</div>
				<hlm-dialog-footer class="gap-3 sm:items-center sm:justify-center sm:space-x-0">
					@if (isVerified()) {
						<button hlmBtn class="h-9" (click)="closeDialog()">Close</button>
					} @else {
						<button hlmBtn class="h-9 flex-1" variant="outline" (click)="closeDialog()">Close</button>
						<button hlmBtn class="h-9 flex-1" [disabled]="otpValue().length < 4" (click)="submit()">Verify</button>
					}
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog13Component implements OnDestroy {
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

		if (this.otpValue().length === 0) {
			this.isVerified.set(false);
			return;
		}

		if (this.otpValue().length < 4) {
			this.isInvalidCode.set(false);
			return;
		}
	}

	closeDialog() {
		this.dialogRef()?.close({});
	}

	submit() {
		if (this.otpValue() === this.defaultOtpValue) {
			this.isVerified.set(true);
			this.isInvalidCode.set(false);
		} else {
			this.isVerified.set(false);
			this.isInvalidCode.set(true);
			this.otpValue.set('');
		}
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

export const dialog13Code = `import { afterNextRender, Component, computed, model, OnDestroy, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail } from '@ng-icons/lucide';
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
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot } from '@spartan-ng/helm/input-otp';

@Component({
	selector: 'sim-dialog-13',
	providers: [provideIcons({ lucideMail })],
	imports: [
		FormsModule,
		NgIcon,
		HlmIcon,
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
	template: \`
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Email OTP</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-1">
					<div class="flex size-12 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideMail" />
					</div>
					@if (isVerified()) {
						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Code verified!</h2>
							<p hlmDialogDescription class="text-center">Your code has been successfully verified.</p>
						</hlm-dialog-header>
					} @else {
						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Please check your email</h2>
							<p hlmDialogDescription class="text-center">We've sent a code to alan&#64;siumui.com</p>
						</hlm-dialog-header>
						<brn-input-otp
							hlm
							maxLength="4"
							inputClass="disabled:cursor-not-allowed"
							class="mt-5"
							[ngModel]="otpValue()"
							(ngModelChange)="otpChanged($event)">
							<div hlmInputOtpGroup class="flex items-center justify-center gap-2">
								<hlm-input-otp-slot index="0" class="size-15 rounded-md border text-[40px]" />
								<hlm-input-otp-slot index="1" class="size-15 rounded-md border text-[40px]" />
								<hlm-input-otp-slot index="2" class="size-15 rounded-md border text-[40px]" />
								<hlm-input-otp-slot index="3" class="size-15 rounded-md border text-[40px]" />
							</div>
						</brn-input-otp>
						<span class="text-muted-foreground mt-2 text-left text-xs">
							Didn't get a code?
							@if (isResendDisabled()) {
								<span class="text-muted-foreground cursor-not-allowed">Resend after {{ countdown() }}s</span>
							} @else {
								<span class="hover:text-primary cursor-pointer hover:underline" (click)="resendOtp()">
									Click to resend
								</span>
							}
						</span>
						@if (isInvalidCode()) {
							<p class="text-muted-foreground mt-4 text-center text-xs">Invalid code. Please try again.</p>
						}
					}
				</div>
				<hlm-dialog-footer class="gap-3 sm:items-center sm:justify-center sm:space-x-0">
					@if (isVerified()) {
						<button hlmBtn class="h-9" (click)="closeDialog()">Close</button>
					} @else {
						<button hlmBtn class="h-9 flex-1" variant="outline" (click)="closeDialog()">Close</button>
						<button hlmBtn class="h-9 flex-1" [disabled]="otpValue().length < 4" (click)="submit()">Verify</button>
					}
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog13Component implements OnDestroy {
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

		if (this.otpValue().length === 0) {
			this.isVerified.set(false);
			return;
		}

		if (this.otpValue().length < 4) {
			this.isInvalidCode.set(false);
			return;
		}
	}

	closeDialog() {
		this.dialogRef()?.close({});
	}

	submit() {
		if (this.otpValue() === this.defaultOtpValue) {
			this.isVerified.set(true);
			this.isInvalidCode.set(false);
		} else {
			this.isVerified.set(false);
			this.isInvalidCode.set(true);
			this.otpValue.set('');
		}
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
}`;
