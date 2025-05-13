import { afterNextRender, Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLockKeyhole } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { BrnInputOtpComponent } from '@spartan-ng/brain/input-otp';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import {
	HlmInputOtpDirective,
	HlmInputOtpGroupDirective,
	HlmInputOtpSlotComponent,
} from '@spartan-ng/ui-inputotp-helm';

@Component({
	selector: 'sim-dialog-32',
	imports: [
		NgIcon,
		FormsModule,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmInputOtpDirective,
		HlmInputOtpGroupDirective,
		HlmInputOtpSlotComponent,
		BrnInputOtpComponent,
	],
	providers: [provideIcons({ lucideLockKeyhole })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">2FA</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-128"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-4">
						<div class="flex size-11 items-center justify-center rounded-lg border">
							<ng-icon hlm name="lucideLockKeyhole" />
						</div>
						<div class="flex flex-col gap-1">
							<h2 class="text-lg leading-none font-semibold">Set up two-factor authentication</h2>
							<p class="text-muted-foreground text-sm">
								To authorize transactions, please scan this QR code with your Google Authenticator App and enter the
								verification code below.
							</p>
						</div>
					</div>
					<div class="bg-muted/50 relative flex h-48 items-center justify-center rounded-md">
						<div class="flex size-38 flex-col justify-center">
							<div class="flex flex-1 flex-row items-center justify-between">
								<div class="border-primary size-3 rounded-tl-[3px] border-t-[2px] border-l-[2px]"></div>
								<div class="border-primary size-3 rounded-tr-[3px] border-t-[2px] border-r-[2px]"></div>
							</div>
							<img src="assets/qr-code.jpg" alt="qr-code" class="mx-auto size-32 rounded-xs" />
							<div
								class="animate-scan-line via-primary/70 absolute left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent"></div>
							<div class="flex h-3 flex-1 justify-between">
								<div class="border-primary size-3 rounded-bl-[3px] border-b-[2px] border-l-[2px]"></div>
								<div class="border-primary size-3 rounded-br-[3px] border-r-[2px] border-b-[2px]"></div>
							</div>
						</div>
					</div>
					<div class="flex flex-col items-center justify-center">
						<div class="flex w-full justify-start">
							<span class="text-secondary-foreground text-sm font-medium">Verification code</span>
						</div>
						<brn-input-otp
							hlm
							maxLength="6"
							inputClass="disabled:cursor-not-allowed flex w-100"
							class="mt-2"
							[ngModel]="otpValue()">
							<div hlmInputOtpGroup class="flex flex-1 items-center justify-center gap-2 text-lg">
								<hlm-input-otp-slot index="0" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="1" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="2" class="h-16 rounded-md border text-5xl sm:w-16" />
								<span class="text-5xl">-</span>
								<hlm-input-otp-slot index="3" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="4" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="5" class="h-16 rounded-md border text-5xl sm:w-16" />
							</div>
						</brn-input-otp>

						<div class="mt-1 flex w-full justify-start">
							<span class="text-muted-foreground text-sm">
								Didn't get a code?
								@if (this.isResendDisabled()) {
									<span class="text-muted-foreground">{{ this.countdown() }} seconds</span>
								} @else {
									<span
										class="hover:text-primary text-muted-foreground cursor-pointer underline hover:no-underline"
										(click)="resendCode()">
										Click to resend
									</span>
								}
							</span>
						</div>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog32Component {
	public otpValue = model<string>('');
	public isResendDisabled = computed(() => this.countdown() > 0);
	public countdown = signal(60);

	private _intervalId?: NodeJS.Timeout;

	constructor() {
		afterNextRender(() => this.startCountdown());
	}

	resendCode(): void {
		this.resetCountdown();
	}

	private resetCountdown(): void {
		this.countdown.set(60);
		this.startCountdown();
	}

	private startCountdown(): void {
		this.stopCountdown();
		this._intervalId = setInterval(() => {
			this.countdown.update((countdown) => Math.max(0, countdown - 1));
			if (this.countdown() === 0) {
				this.stopCountdown();
			}
		}, 1000);
	}

	private stopCountdown(): void {
		if (this._intervalId) {
			clearInterval(this._intervalId);
			this._intervalId = undefined;
		}
	}
}

export const dialog32Code = `
At styles.css:

@theme {
...
	--animate-scan-line: scanning 1.5s linear infinite;
...
}

@keyframes scanning {
	0% {
		top: 0%;
	}
	50% {
		top: 100%;
	}
	100% {
		top: 0%;
	}
}

================================================================

import { afterNextRender, Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLockKeyhole } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { BrnInputOtpComponent } from '@spartan-ng/brain/input-otp';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import {
	HlmInputOtpDirective,
	HlmInputOtpGroupDirective,
	HlmInputOtpSlotComponent,
} from '@spartan-ng/ui-inputotp-helm';

@Component({
	selector: 'sim-dialog-32',
	imports: [
		NgIcon,
		FormsModule,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmInputOtpDirective,
		HlmInputOtpGroupDirective,
		HlmInputOtpSlotComponent,
		BrnInputOtpComponent,
	],
	providers: [provideIcons({ lucideLockKeyhole })],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">2FA</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-128"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-4">
						<div class="flex size-11 items-center justify-center rounded-lg border">
							<ng-icon hlm name="lucideLockKeyhole" />
						</div>
						<div class="flex flex-col gap-1">
							<h2 class="text-lg leading-none font-semibold">Set up two-factor authentication</h2>
							<p class="text-muted-foreground text-sm">
								To authorize transactions, please scan this QR code with your Google Authenticator App and enter the
								verification code below.
							</p>
						</div>
					</div>
					<div class="bg-muted/50 relative flex h-48 items-center justify-center rounded-md">
						<div class="flex size-38 flex-col justify-center">
							<div class="flex flex-1 flex-row items-center justify-between">
								<div class="border-primary size-3 rounded-tl-[3px] border-t-[2px] border-l-[2px]"></div>
								<div class="border-primary size-3 rounded-tr-[3px] border-t-[2px] border-r-[2px]"></div>
							</div>
							<img src="assets/qr-code.jpg" alt="qr-code" class="mx-auto size-32 rounded-xs" />
							<div
								class="animate-scan-line via-primary/70 absolute left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent"></div>
							<div class="flex h-3 flex-1 justify-between">
								<div class="border-primary size-3 rounded-bl-[3px] border-b-[2px] border-l-[2px]"></div>
								<div class="border-primary size-3 rounded-br-[3px] border-r-[2px] border-b-[2px]"></div>
							</div>
						</div>
					</div>
					<div class="flex flex-col items-center justify-center">
						<div class="flex w-full justify-start">
							<span class="text-secondary-foreground text-sm font-medium">Verification code</span>
						</div>
						<brn-input-otp
							hlm
							maxLength="6"
							inputClass="disabled:cursor-not-allowed flex w-100"
							class="mt-2"
							[ngModel]="otpValue()">
							<div hlmInputOtpGroup class="flex flex-1 items-center justify-center gap-2 text-lg">
								<hlm-input-otp-slot index="0" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="1" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="2" class="h-16 rounded-md border text-5xl sm:w-16" />
								<span class="text-5xl">-</span>
								<hlm-input-otp-slot index="3" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="4" class="h-16 rounded-md border text-5xl sm:w-16" />
								<hlm-input-otp-slot index="5" class="h-16 rounded-md border text-5xl sm:w-16" />
							</div>
						</brn-input-otp>

						<div class="mt-1 flex w-full justify-start">
							<span class="text-muted-foreground text-sm">
								Didn't get a code?
								@if (this.isResendDisabled()) {
									<span class="text-muted-foreground">{{ this.countdown() }} seconds</span>
								} @else {
									<span
										class="hover:text-primary text-muted-foreground cursor-pointer underline hover:no-underline"
										(click)="resendCode()">
										Click to resend
									</span>
								}
							</span>
						</div>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog32Component {
	public otpValue = model<string>('');
	public isResendDisabled = computed(() => this.countdown() > 0);
	public countdown = signal(60);

	private _intervalId?: NodeJS.Timeout;

	constructor() {
		afterNextRender(() => this.startCountdown());
	}

	resendCode(): void {
		this.resetCountdown();
	}

	private resetCountdown(): void {
		this.countdown.set(60);
		this.startCountdown();
	}

	private startCountdown(): void {
		this.stopCountdown();
		this._intervalId = setInterval(() => {
			this.countdown.update((countdown) => Math.max(0, countdown - 1));
			if (this.countdown() === 0) {
				this.stopCountdown();
			}
		}, 1000);
	}

	private stopCountdown(): void {
		if (this._intervalId) {
			clearInterval(this._intervalId);
			this._intervalId = undefined;
		}
	}
}
`;
