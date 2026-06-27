import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { maskitoNumber, maskitoParseNumber } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-25',
	imports: [
		MaskitoDirective,
		NgIcon,
		ReactiveFormsModule,
		HlmLabelImports,
		HlmButtonGroupImports,
		HlmButtonImports,
		HlmInputGroupImports,
	],
	providers: [provideIcons({ lucideMinus, lucidePlus })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-25" class="mb-2 text-sm">Number input with plus/minus buttons</label>
		<hlm-button-group class="w-full" [formGroup]="form">
			<button hlmBtn variant="outline" size="icon" [disabled]="isDecreaseDisabled()" (click)="descreaseValue()">
				<ng-icon name="lucideMinus" />
			</button>
			<hlm-input-group>
				<input
					hlmInputGroupInput
					id="input-25"
					type="text"
					class="text-center"
					formControlName="control"
					[maskito]="numberMaskedInput" />
			</hlm-input-group>
			<button hlmBtn variant="outline" size="icon" (click)="increaseValue()">
				<ng-icon name="lucidePlus" />
			</button>
		</hlm-button-group>
	`,
})
export class Input25Component {
	protected readonly form = new FormGroup({
		control: new FormControl('2048'),
	});
	protected readonly isDecreaseDisabled = computed(() => this.formValueChange()?.control === '0');
	protected readonly numberMaskedInput = maskitoNumber({
		maximumFractionDigits: 2,
		thousandSeparator: ',',
		decimalSeparator: '.',
	});

	private readonly formValueChange = toSignal(this.form.valueChanges);

	protected descreaseValue(): void {
		const currentValue = this.form.get('control')?.value ?? '';
		const value = maskitoParseNumber(currentValue);

		if (!Number.isNaN(value) && value > 0) {
			const newValue = value - 1;
			this.form.get('control')?.setValue(newValue.toString());
		}
	}

	protected increaseValue(): void {
		const currentValue = this.form.get('control')?.value ?? '';
		const value = maskitoParseNumber(currentValue);

		if (!Number.isNaN(value) && value >= 0) {
			const newValue = value + 1;
			this.form.get('control')?.setValue(newValue.toString());
		} else if (currentValue === '') {
			this.form.get('control')?.setValue('1');
		}
	}
}
