import { Component } from '@angular/core';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-13',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-col gap-4">
			<span class="text-sm">CPU Cores Option:</span>
			<hlm-radio-group class="grid grid-cols-3 justify-between gap-2 text-sm font-medium" value="2cpu" disabled>
				@for (item of items; track item.id) {
					<div
						class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full rounded-md border shadow-xs outline-none">
						<label
							class="flex w-full flex-col items-center justify-between px-2 py-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel>
							<p class="text-foreground text-sm leading-none font-medium select-none">
								{{ item.label }}
							</p>
							<hlm-radio [value]="item.value" />
						</label>
					</div>
				}
			</hlm-radio-group>
		</div>
	`,
})
export class Radio13Component {
	items: { id: number; value: string; label: string }[] = [
		{ id: 1, value: '2cpu', label: '2 CPU' },
		{ id: 2, value: '4cpu', label: '4 CPU' },
		{ id: 3, value: '6cpu', label: '6 CPU' },
		{ id: 4, value: '8cpu', label: '8 CPU' },
		{ id: 5, value: '10cpu', label: '10 CPU' },
		{ id: 6, value: '12cpu', label: '12 CPU' },
	];
}

export const radio13Code = `
import { Component } from '@angular/core';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-13',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex flex-col gap-4">
			<span class="text-sm">CPU Cores Option:</span>
			<hlm-radio-group class="grid grid-cols-3 justify-between gap-2 text-sm font-medium" value="2cpu" disabled>
				@for (item of items; track item.id) {
					<div
						class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full rounded-md border shadow-xs outline-none">
						<label
							class="flex w-full flex-col items-center justify-between px-2 py-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel>
							<p class="text-foreground text-sm leading-none font-medium select-none">
								{{ item.label }}
							</p>
							<hlm-radio [value]="item.value" />
						</label>
					</div>
				}
			</hlm-radio-group>
		</div>
	\`,
})
export class Radio13Component {
	items: { id: number; value: string; label: string }[] = [
		{ id: 1, value: '2cpu', label: '2 CPU' },
		{ id: 2, value: '4cpu', label: '4 CPU' },
		{ id: 3, value: '6cpu', label: '6 CPU' },
		{ id: 4, value: '8cpu', label: '8 CPU' },
		{ id: 5, value: '10cpu', label: '10 CPU' },
		{ id: 6, value: '12cpu', label: '12 CPU' },
	];
}
`;
