import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideZap } from '@ng-icons/lucide';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

interface CheckboxItem {
	value: string;
	label: string;
	defaultChecked: boolean;
	disabled: boolean;
}

@Component({
	selector: 'sim-checkbox-21',
	imports: [NgClass, HlmCheckboxImports, HlmLabelImports],
	providers: [provideIcons({ lucideZap })],
	host: {
		class: 'w-fit',
	},
	template: `
		<fieldset class="space-y-4">
			<legend class="text-foreground text-sm leading-none font-medium">Days of the week</legend>
			<div class="flex gap-1.5">
				@for (item of items; track item.value) {
					<label
						hlmLabel
						class="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 ease relative flex size-9 cursor-pointer flex-col items-center justify-center gap-3 rounded-full border text-center shadow-xs transition-[color,box-shadow] duration-150 outline-none has-focus-visible:ring-[3px] has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50 motion-reduce:transition-none"
						[for]="uniqueId('checkbox' + item.label)">
						<hlm-checkbox
							class="sr-only after:absolute after:inset-0"
							[inputId]="uniqueId('checkbox' + item.label)"
							[disabled]="item.disabled"
							[checked]="item.defaultChecked" />
						<span aria-hidden="true" class="text-sm font-medium" [ngClass]="{ 'text-destructive': item.value === '0' }">
							{{ item.label[0] }}
						</span>
						<span class="sr-only">{{ item.label }}</span>
					</label>
				}
			</div>
		</fieldset>
	`,
})
export class Checkbox21Component {
	private readonly id = crypto.randomUUID();

	protected uniqueId(suffix: string): string {
		return `checkbox-21-${this.id}-${suffix}`;
	}

	protected readonly items: CheckboxItem[] = [
		{ value: '0', label: 'Sunday', defaultChecked: false, disabled: false },
		{ value: '1', label: 'Monday', defaultChecked: true, disabled: false },
		{ value: '2', label: 'Tuesday', defaultChecked: false, disabled: true },
		{ value: '3', label: 'Wednesday', defaultChecked: false, disabled: false },
		{ value: '4', label: 'Thursday', defaultChecked: false, disabled: false },
		{ value: '5', label: 'Friday', defaultChecked: false, disabled: false },
		{ value: '6', label: 'Saturday', defaultChecked: true, disabled: false },
	];
}
