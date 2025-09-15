import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-47',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput, ReactiveFormsModule],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel class="mb-2 text-sm">Card details</label>
		<div class="flex flex-col -space-y-px" [formGroup]="form">
			<div class="w-full text-sm">
				<div class="relative">
					<input
						id="card-number-input"
						hlmInput
						formControlName="cardNumber"
						class="peer mt-0 mb-0 w-full rounded-none rounded-t-md ps-12 text-sm focus-visible:z-10"
						type="text"
						placeholder="Your card number"
						size="sm"
						[maskito]="creditCardMask" />
					<div
						class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-end justify-center ps-3 pb-2 peer-disabled:opacity-50">
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
				</div>
			</div>
			<div class="flex w-full flex-row -space-x-px">
				<input
					hlmInput
					formControlName="expiryDate"
					class="w-full flex-1 rounded-none rounded-bl-md text-sm focus-visible:z-10"
					type="text"
					placeholder="MM / YY"
					size="sm"
					[maskito]="expiryDateMask" />
				<input
					hlmInput
					formControlName="cvc"
					class="w-full flex-1 rounded-none rounded-br-md text-sm focus-visible:z-10"
					type="text"
					placeholder="000"
					size="sm"
					[maskito]="cvcMask" />
			</div>
		</div>
	`,
})
export class Input47Component {
	private readonly _formBuilder = inject(FormBuilder);
	readonly cvcMask: MaskitoOptions = {
		mask: [/\d/, /\d/, /\d/],
		overwriteMode: 'replace',
		preprocessors: [
			({ elementState, data }) => ({
				elementState,
				data: data.replace(/\D/g, ''),
			}),
		],
	};
	readonly expiryDateMask: MaskitoOptions = maskitoDateOptionsGenerator({ mode: 'mm/dd', separator: ' / ' });
	readonly creditCardMask: MaskitoOptions = {
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

	public form: FormGroup = this._formBuilder.group(
		{
			cardNumber: ['', Validators.required],
			expiryDate: ['', Validators.required],
			cvc: ['', Validators.required],
		},
		{ updateOn: 'submit' },
	);
}

export const input47Code = ``;
