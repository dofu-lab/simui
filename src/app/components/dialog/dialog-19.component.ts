import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCreditCard, lucideWalletCards } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
	selector: 'app-dialog-19',
	providers: [provideIcons({ lucideWalletCards, lucideCreditCard })],
	imports: [
		NgIcon,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmButtonDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmButtonDirective,
		HlmInputDirective,
		HlmLabelDirective,
		HlmSpinnerComponent,
		HlmCheckboxComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		MaskitoDirective,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Card update (2)</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-100 sm:min-w-100"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-2">
					<div class="flex size-11 items-center justify-center rounded-lg border">
						<ng-icon hlm name="lucideWalletCards" />
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="text-lg leading-none font-semibold">Update payment method</h2>
						<p class="text-muted-foreground text-sm">Your new card will replace your current card.</p>
					</div>
				</div>
				<form [formGroup]="form" (submit)="onSubmit()">
					<div class="flex flex-col gap-4 sm:flex-row">
						<div class="flex flex-1 flex-col gap-4">
							<label hlmLabel class="flex flex-col gap-2 text-sm">
								Name on card
								<input
									hlmInput
									formControlName="fullName"
									class="w-full text-sm"
									type="text"
									placeholder="Name on your card"
									size="sm"
									[maskito]="nameMask" />
							</label>
							<div class="w-full text-sm">
								<div class="relative">
									<label hlmLabel class="flex flex-col gap-2 text-sm">
										Card number
										<input
											id="card-number-input"
											hlmInput
											formControlName="cardNumber"
											class="peer mt-2 w-full ps-12 text-sm"
											type="text"
											placeholder="Your card number"
											size="sm"
											[maskito]="creditCardMask" />
										<div
											class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-end justify-center ps-3 pb-3 peer-disabled:opacity-50">
											<div class="border-input flex h-4.5 w-6.5 items-center justify-center rounded-[3px] border">
												<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.9121 0C14.7758 4.44529e-05 17.0977 2.25019 17.0977 5.02539C17.0974 7.80041 14.7757 10.0498 11.9121 10.0498C10.628 10.0498 9.45349 9.59689 8.54785 8.84766C7.64241 9.59637 6.46908 10.0497 5.18555 10.0498C2.32196 10.0498 0.000218043 7.80044 0 5.02539C0 2.25016 2.32182 0 5.18555 0C6.46881 7.36374e-05 7.64249 0.452743 8.54785 1.20117C9.45341 0.452226 10.6283 0 11.9121 0Z"
														fill="#ED0006" />
													<path
														d="M11.9119 0C14.7756 0 17.0975 2.25016 17.0975 5.02539C17.0972 7.80044 14.7755 10.0498 11.9119 10.0498C10.6278 10.0498 9.45424 9.5959 8.54862 8.84668C9.6626 7.92509 10.3708 6.55604 10.3709 5.02539C10.3709 3.49432 9.66302 2.12382 8.54862 1.20215C9.45416 0.453216 10.6281 2.66463e-05 11.9119 0Z"
														fill="#F9A000" />
													<path
														d="M8.54811 1.2019C9.66275 2.12358 10.3704 3.49388 10.3704 5.02515C10.3703 6.5562 9.66253 7.92577 8.54811 8.84741C7.43406 7.92577 6.72687 6.55591 6.72682 5.02515C6.72682 3.49417 7.43383 2.12357 8.54811 1.2019Z"
														fill="#FF5E00" />
												</svg>
											</div>
										</div>
									</label>
								</div>
							</div>
						</div>
						<div class="flex flex-row gap-4 sm:flex-col">
							<label hlmLabel class="flex flex-col gap-2 text-sm">
								Expiry date
								<input
									hlmInput
									formControlName="expiryDate"
									class="w-full text-sm sm:max-w-20"
									type="text"
									placeholder="MM/YY"
									size="sm"
									[maskito]="expiryDateMask" />
							</label>
							<label hlmLabel class="flex flex-col gap-2 text-sm">
								CVC
								<input
									hlmInput
									formControlName="cvc"
									class="w-full text-sm sm:max-w-20"
									type="text"
									placeholder="000"
									size="sm"
									[maskito]="cvcMask" />
							</label>
						</div>
					</div>
					<label
						hlmLabel
						for="is-default"
						class="text-muted-foreground mt-4 flex items-center gap-2 text-sm font-normal">
						<hlm-checkbox id="is-default" formControlName="isDefault" class="border-input" />
						Set as default payment method
					</label>
					<button hlmBtn type="submit" class="mt-4 w-full" size="sm" [disabled]="isProcessing()">
						@if (isProcessing()) {
							<hlm-spinner size="xs" class="mr-2" />
							Processing...
						} @else {
							Update card
						}
					</button>
				</form>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog19Component {
	private _formBuilder = inject(FormBuilder);
	public dialogRef = viewChild(BrnDialogComponent);
	public form: FormGroup = this._formBuilder.group(
		{
			fullName: ['', Validators.required],
			cardNumber: ['', Validators.required],
			expiryDate: ['', Validators.required],
			isDefault: [false],
			cvc: ['', Validators.required],
		},
		{ updateOn: 'submit' },
	);
	public readonly cvcMask: MaskitoOptions = {
		mask: [/\d/, /\d/, /\d/],
		overwriteMode: 'replace',
		preprocessors: [
			({ elementState, data }) => ({
				elementState,
				data: data.replace(/\D/g, ''),
			}),
		],
	};
	public readonly expiryDateMask: MaskitoOptions = {
		mask: [/\d/, /[0-9]/, '/', /\d/, /\d/],
		overwriteMode: 'replace',
	};
	public readonly nameMask: MaskitoOptions = {
		mask: /.+/,
		overwriteMode: 'replace',
		postprocessors: [({ value, selection }) => ({ value: value.toUpperCase(), selection })],
	};
	public readonly creditCardMask: MaskitoOptions = {
		mask: [
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
		],
		overwriteMode: 'replace',
		preprocessors: [({ elementState, data }) => ({ elementState, data: data.replace(/\D/g, '') })],
	};

	public isProcessing = signal(false);

	public onSubmit() {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 2000);
		}
	}
}

export const dialog19Code = `
import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCreditCard, lucideWalletCards } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/ui-dialog-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
	selector: 'app-dialog-19',
	providers: [provideIcons({ lucideWalletCards, lucideCreditCard })],
	imports: [
		NgIcon,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmButtonDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmButtonDirective,
		HlmInputDirective,
		HlmLabelDirective,
		HlmSpinnerComponent,
		HlmCheckboxComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		MaskitoDirective,
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Card update (2)</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-100 sm:min-w-100"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-2">
					<div class="flex size-11 items-center justify-center rounded-lg border">
						<ng-icon hlm name="lucideWalletCards" />
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="text-lg leading-none font-semibold">Update payment method</h2>
						<p class="text-muted-foreground text-sm">Your new card will replace your current card.</p>
					</div>
				</div>
				<form [formGroup]="form" (submit)="onSubmit()">
					<div class="flex flex-col gap-4 sm:flex-row">
						<div class="flex flex-1 flex-col gap-4">
							<label hlmLabel class="flex flex-col gap-2 text-sm">
								Name on card
								<input
									hlmInput
									formControlName="fullName"
									class="w-full text-sm"
									type="text"
									placeholder="Name on your card"
									size="sm"
									[maskito]="nameMask" />
							</label>
							<div class="w-full text-sm">
								<div class="relative">
									<label hlmLabel class="flex flex-col gap-2 text-sm">
										Card number
										<input
											id="card-number-input"
											hlmInput
											formControlName="cardNumber"
											class="peer mt-2 w-full ps-12 text-sm"
											type="text"
											placeholder="Your card number"
											size="sm"
											[maskito]="creditCardMask" />
										<div
											class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-end justify-center ps-3 pb-3 peer-disabled:opacity-50">
											<div class="border-input flex h-4.5 w-6.5 items-center justify-center rounded-[3px] border">
												<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M11.9121 0C14.7758 4.44529e-05 17.0977 2.25019 17.0977 5.02539C17.0974 7.80041 14.7757 10.0498 11.9121 10.0498C10.628 10.0498 9.45349 9.59689 8.54785 8.84766C7.64241 9.59637 6.46908 10.0497 5.18555 10.0498C2.32196 10.0498 0.000218043 7.80044 0 5.02539C0 2.25016 2.32182 0 5.18555 0C6.46881 7.36374e-05 7.64249 0.452743 8.54785 1.20117C9.45341 0.452226 10.6283 0 11.9121 0Z"
														fill="#ED0006" />
													<path
														d="M11.9119 0C14.7756 0 17.0975 2.25016 17.0975 5.02539C17.0972 7.80044 14.7755 10.0498 11.9119 10.0498C10.6278 10.0498 9.45424 9.5959 8.54862 8.84668C9.6626 7.92509 10.3708 6.55604 10.3709 5.02539C10.3709 3.49432 9.66302 2.12382 8.54862 1.20215C9.45416 0.453216 10.6281 2.66463e-05 11.9119 0Z"
														fill="#F9A000" />
													<path
														d="M8.54811 1.2019C9.66275 2.12358 10.3704 3.49388 10.3704 5.02515C10.3703 6.5562 9.66253 7.92577 8.54811 8.84741C7.43406 7.92577 6.72687 6.55591 6.72682 5.02515C6.72682 3.49417 7.43383 2.12357 8.54811 1.2019Z"
														fill="#FF5E00" />
												</svg>
											</div>
										</div>
									</label>
								</div>
							</div>
						</div>
						<div class="flex flex-row gap-4 sm:flex-col">
							<label hlmLabel class="flex flex-col gap-2 text-sm">
								Expiry date
								<input
									hlmInput
									formControlName="expiryDate"
									class="w-full text-sm sm:max-w-20"
									type="text"
									placeholder="MM/YY"
									size="sm"
									[maskito]="expiryDateMask" />
							</label>
							<label hlmLabel class="flex flex-col gap-2 text-sm">
								CVC
								<input
									hlmInput
									formControlName="cvc"
									class="w-full text-sm sm:max-w-20"
									type="text"
									placeholder="000"
									size="sm"
									[maskito]="cvcMask" />
							</label>
						</div>
					</div>
					<label
						hlmLabel
						for="is-default"
						class="text-muted-foreground mt-4 flex items-center gap-2 text-sm font-normal">
						<hlm-checkbox id="is-default" formControlName="isDefault" class="border-input" />
						Set as default payment method
					</label>
					<button hlmBtn type="submit" class="mt-4 w-full" size="sm" [disabled]="isProcessing()">
						@if (isProcessing()) {
							<hlm-spinner size="xs" class="mr-2" />
							Processing...
						} @else {
							Update card
						}
					</button>
				</form>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog19Component {
	private _formBuilder = inject(FormBuilder);
	public dialogRef = viewChild(BrnDialogComponent);
	public form: FormGroup = this._formBuilder.group(
		{
			fullName: ['', Validators.required],
			cardNumber: ['', Validators.required],
			expiryDate: ['', Validators.required],
			isDefault: [false],
			cvc: ['', Validators.required],
		},
		{ updateOn: 'submit' },
	);
	public readonly cvcMask: MaskitoOptions = {
		mask: [/\d/, /\d/, /\d/],
		overwriteMode: 'replace',
		preprocessors: [
			({ elementState, data }) => ({
				elementState,
				data: data.replace(/\D/g, ''),
			}),
		],
	};
	public readonly expiryDateMask: MaskitoOptions = {
		mask: [/\d/, /[0-9]/, '/', /\d/, /\d/],
		overwriteMode: 'replace',
	};
	public readonly nameMask: MaskitoOptions = {
		mask: /.+/,
		overwriteMode: 'replace',
		postprocessors: [({ value, selection }) => ({ value: value.toUpperCase(), selection })],
	};
	public readonly creditCardMask: MaskitoOptions = {
		mask: [
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
		],
		overwriteMode: 'replace',
		preprocessors: [({ elementState, data }) => ({ elementState, data: data.replace(/\D/g, '') })],
	};

	public isProcessing = signal(false);

	public onSubmit() {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 2000);
		}
	}
}
`;
