import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { maskitoNumberOptionsGenerator, maskitoParseNumber } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp, lucideEuro } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-26',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, ReactiveFormsModule, MaskitoDirective],
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp, lucideEuro })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-26" class="mb-2 text-sm">Number input with chevrons</label>
		<div class="relative" [formGroup]="form">
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideEuro" size="sm" />
			</div>
			<input
				hlmInput
				id="input-26"
				type="text"
				class="z-20 flex overflow-hidden ps-8 pe-8"
				formControlName="control"
				[maskito]="numberMaskedInput" />
			<div
				class="absolute inset-y-0 end-0 mr-px flex flex-col items-center justify-between overflow-hidden rounded-md py-px pr-px pl-1.5">
				<button
					class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center rounded-tr-md border border-t-0 border-r-0 text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					(click)="increaseValue()">
					<ng-icon hlm size="xs" name="lucideChevronUp" />
				</button>

				<button
					class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center rounded-br-md border border-r-0 border-b-0 text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					[disabled]="isDecreaseDisabled()"
					(click)="descreaseValue()">
					<ng-icon hlm size="xs" name="lucideChevronDown" />
				</button>
			</div>
		</div>
	`,
})
export class Input26Component {
	readonly form = new FormGroup({
		control: new FormControl('99.00'),
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
		console.log(value);

		if (!isNaN(value) && value > 0) {
			const newValue = value - 1;
			this.form.get('control')?.setValue(newValue.toFixed(2));
		}
	}

	increaseValue(): void {
		const currentValue = this.form.get('control')?.value ?? '';
		const value = maskitoParseNumber(currentValue);

		if (!isNaN(value) && value >= 0) {
			const newValue = value + 1;
			this.form.get('control')?.setValue(newValue.toFixed(2));
		} else if (currentValue === '') {
			this.form.get('control')?.setValue('1');
		}
	}
}