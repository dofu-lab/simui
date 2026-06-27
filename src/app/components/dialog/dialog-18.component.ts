import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCreditCard, lucideWallet } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-dialog-18',
	imports: [
		NgIcon,
		MaskitoDirective,
		ReactiveFormsModule,
		HlmIconImports,
		HlmButtonImports,
		HlmInputImports,
		HlmLabelImports,
		HlmSpinnerImports,
		HlmCheckboxImports,
		HlmDialogImports,
	],
	providers: [provideIcons({ lucideWallet, lucideCreditCard })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" hlmDialogTrigger hlmBtn variant="outline">Card update</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-100 sm:min-w-100"
				*hlmDialogPortal="let ctx">
				<div class="flex flex-col gap-2">
					<div class="flex size-11 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideWallet" size="sm" />
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="text-lg leading-none font-semibold">Update your card</h2>
						<p class="text-muted-foreground text-sm">Your new card will replace your current card.</p>
					</div>
				</div>
				<form [formGroup]="form" (submit)="onSubmit()">
					<div class="flex flex-col gap-4">
						<label hlmLabel class="flex flex-col items-start gap-2 text-sm">
							Name on card
							<input
								hlmInput
								formControlName="fullName"
								class="h-9 w-full"
								type="text"
								placeholder="Name on your card"
								[maskito]="nameMask" />
						</label>
						<div class="w-full text-sm">
							<div class="relative">
								<label hlmLabel for="card-number-input" class="flex flex-col items-start gap-2">
									Card number
									<input
										id="card-number-input"
										hlmInput
										formControlName="cardNumber"
										class="peer h-9 w-full pe-9"
										type="text"
										placeholder="Your card number"
										[maskito]="creditCardMask" />
									<div
										class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-end justify-center pe-3 pb-2.5 peer-disabled:opacity-50">
										<ng-icon hlm name="lucideCreditCard" size="sm" />
									</div>
								</label>
							</div>
						</div>
						<div class="flex gap-4">
							<label hlmLabel class="flex flex-col items-start gap-2 text-sm">
								Expiry date
								<input
									hlmInput
									formControlName="expiryDate"
									class="h-9 w-full"
									type="text"
									placeholder="MM/YY"
									[maskito]="expiryDateMask" />
							</label>
							<label hlmLabel class="flex flex-col items-start gap-2 text-sm">
								CVC
								<input
									hlmInput
									formControlName="cvc"
									class="h-9 w-full [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
									type="text"
									placeholder="000"
									[maskito]="cvcMask" />
							</label>
						</div>
						<label hlmLabel for="is-default" class="text-muted-foreground flex items-center gap-2 text-sm font-normal">
							<hlm-checkbox id="is-default" formControlName="isDefault" class="border-input" />
							Set as default payment method
						</label>
						<button hlmBtn type="submit" [disabled]="isProcessing()">
							@if (isProcessing()) {
								<hlm-spinner class="mr-2 size-4" />
								Processing...
							} @else {
								Update card
							}
						</button>
					</div>
				</form>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog18Component {
	private readonly formBuilder = inject(FormBuilder);
	protected readonly dialogRef = viewChild(HlmDialog);
	protected readonly isProcessing = signal(false);
	protected readonly form: FormGroup = this.formBuilder.group(
		{
			fullName: [
				'',
				{
					validators: Validators.required,
					updateOn: 'submit',
				},
			],
			cardNumber: [
				'',
				{
					validators: Validators.required,
					updateOn: 'submit',
				},
			],
			expiryDate: [
				'',
				{
					validators: Validators.required,
					updateOn: 'submit',
				},
			],
			isDefault: [false],
			cvc: [
				'',
				{
					validators: Validators.required,
					updateOn: 'submit',
				},
			],
		},
		{ updateOn: 'submit' },
	);
	protected readonly cvcMask: MaskitoOptions = {
		mask: [/\d/, /\d/, /\d/],
		overwriteMode: 'replace',
		preprocessors: [
			({ elementState, data }) => ({
				elementState,
				data: data.replace(/\D/g, ''),
			}),
		],
	};
	protected readonly expiryDateMask: MaskitoOptions = {
		mask: [/\d/, /[0-9]/, '/', /\d/, /\d/],
		overwriteMode: 'replace',
	};
	protected readonly nameMask: MaskitoOptions = {
		mask: /.+/,
		overwriteMode: 'replace',
		postprocessors: [({ value, selection }) => ({ value: value.toUpperCase(), selection })],
	};
	protected readonly creditCardMask: MaskitoOptions = {
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

	protected onSubmit(): void {
		if (this.form.valid) {
			this.isProcessing.set(true);
			setTimeout(() => {
				this.isProcessing.set(false);
				this.dialogRef()?.close();
			}, 2000);
		}
	}
}
