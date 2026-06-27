import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';

interface RadioItem {
	id: number;
	value: number;
	label: string;
}

@Component({
	selector: 'sim-radio-17',
	imports: [HlmRadioGroupImports, HlmLabelImports, FormsModule],
	template: `
		<div class="flex flex-1 flex-col gap-2">
			<span hlmLabel class="flex-1">How do you feel?</span>
			<div class="flex-1">
				<hlm-radio-group
					class="group mt-2 flex gap-1 rounded-md"
					[ngModel]="rating()"
					(ngModelChange)="rating.set($event)">
					@for (item of items; track item) {
						<label
							[for]="'radio-17-' + item.value"
							class="hover:bg-accent/80 border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 ease relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] duration-150 outline-none has-focus-visible:ring-[3px] has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50 motion-reduce:transition-none"
							hlmLabel>
							{{ item.label }}
							<hlm-radio class="hidden space-x-0" [value]="item.value" [inputId]="'radio-17-' + item.value" />
						</label>
					}
				</hlm-radio-group>
			</div>
		</div>
	`,
})
export class Radio17Component {
	protected readonly rating = signal(3);
	protected readonly items: RadioItem[] = [
		{ id: 1, value: 1, label: '😠' },
		{ id: 2, value: 2, label: '😐' },
		{ id: 3, value: 3, label: '😃' },
		{ id: 4, value: 4, label: '😍' },
		{ id: 5, value: 5, label: '🤩' },
	];
}
