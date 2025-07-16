import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-18',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, FormsModule],
	template: `
		<div class="flex flex-col gap-2">
			<label hlmLabel class="flex-1">How likely are you to recommend us?</label>
			<hlm-radio-group
				class="mt-2 flex w-full gap-0 -space-x-px"
				[ngModel]="rating()"
				(ngModelChange)="rating.set($event)">
				@for (item of items; track item) {
					<label
						class="hover:bg-accent/80 border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex h-9 flex-1 cursor-pointer flex-col items-center justify-center border text-center text-sm shadow-xs transition-[color,box-shadow] outline-none first:rounded-l-md last:rounded-r-md has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
						hlmLabel>
						{{ item.label }}
						<hlm-radio class="hidden space-x-0" [value]="item.value" />
					</label>
				}
			</hlm-radio-group>
			<div class="flex flex-row items-center justify-between text-xs font-medium">
				<span>
					<span class="text-base">😡</span>
					Not likely
				</span>
				<span>
					Very likely
					<span class="text-base">😃</span>
				</span>
			</div>
		</div>
	`,
})
export class Radio18Component {
	rating = signal(3);
	items: { id: number; value: number; label: string }[] = [
		{ id: 1, value: 1, label: '1' },
		{ id: 2, value: 2, label: '2' },
		{ id: 3, value: 3, label: '3' },
		{ id: 4, value: 4, label: '4' },
		{ id: 5, value: 5, label: '5' },
	];
}

export const radio18Code = `
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'sim-radio-18',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, FormsModule],
	template: \`
		<div class="flex flex-col gap-2">
			<label hlmLabel class="flex-1">How likely are you to recommend us?</label>
			<hlm-radio-group
				class="mt-2 flex w-full gap-0 -space-x-px"
				[ngModel]="rating()"
				(ngModelChange)="rating.set($event)">
				@for (item of items; track item) {
					<label
						class="hover:bg-accent/80 border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex h-9 flex-1 cursor-pointer flex-col items-center justify-center border text-center text-sm shadow-xs transition-[color,box-shadow] outline-none first:rounded-l-md last:rounded-r-md has-focus-visible:ring-[3px] has-data-[checked=true]:z-10 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
						hlmLabel>
						{{ item.label }}
						<hlm-radio class="hidden space-x-0" [value]="item.value" />
					</label>
				}
			</hlm-radio-group>
			<div class="flex flex-row items-center justify-between text-xs font-medium">
				<span>
					<span class="text-base">😡</span>
					Not likely
				</span>
				<span>
					Very likely
					<span class="text-base">😃</span>
				</span>
			</div>
		</div>
	\`,
})
export class Radio18Component {
	rating = signal(3);
	items: { id: number; value: number; label: string }[] = [
		{ id: 1, value: 1, label: '1' },
		{ id: 2, value: 2, label: '2' },
		{ id: 3, value: 3, label: '3' },
		{ id: 4, value: 4, label: '4' },
		{ id: 5, value: 5, label: '5' },
	];
}
`;
