import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { maskitoNumberOptionsGenerator, maskitoParseNumber } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-25',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, ReactiveFormsModule, HlmButton, MaskitoDirective],
	providers: [provideIcons({ lucideMinus, lucidePlus })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-25" class="mb-2 text-sm">Number input with plus/minus buttons</label>
		<div class="flex -space-x-px" [formGroup]="form">
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="rounded-e-none"
				[disabled]="isDecreaseDisabled()"
				(click)="descreaseValue()">
				<ng-icon hlm size="sm" name="lucideMinus" />
			</button>
			<input
				hlmInput
				id="input-25"
				type="text"
				class="z-20 rounded-none text-center"
				formControlName="control"
				[maskito]="numberMaskedInput" />
			<button hlmBtn variant="outline" size="icon" class="rounded-s-none" (click)="increaseValue()">
				<ng-icon hlm size="sm" name="lucidePlus" />
			</button>
		</div>
	`,
})
export class Input25Component {
	readonly form = new FormGroup({
		control: new FormControl('2048'),
	});
	readonly formValueChange = toSignal(this.form.valueChanges);
	readonly isDecreaseDisabled = computed(() => this.formValueChange()?.control === '0');
	readonly numberMaskedInput = maskitoNumberOptionsGenerator({
		maximumFractionDigits: 2,
		thousandSeparator: ',',
		decimalSeparator: '.',
	});

	descreaseValue(): void {
		const currentValue = this.form.get('control')?.value ?? '';
		const value = maskitoParseNumber(currentValue);

		if (!isNaN(value) && value > 0) {
			const newValue = value - 1;
			this.form.get('control')?.setValue(newValue.toString());
		}
	}

	increaseValue(): void {
		const currentValue = this.form.get('control')?.value ?? '';
		const value = maskitoParseNumber(currentValue);

		if (!isNaN(value) && value >= 0) {
			const newValue = value + 1;
			this.form.get('control')?.setValue(newValue.toString());
		} else if (currentValue === '') {
			this.form.get('control')?.setValue('1');
		}
	}
}