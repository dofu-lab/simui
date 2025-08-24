import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-14',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-col gap-4">
			<span class="text-sm">Server location</span>
			<hlm-radio-group class="grid grid-cols-3 justify-between gap-2 text-sm font-medium" value="usa">
				@for (item of items; track item.id) {
					<div
						class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full rounded-md border shadow-xs outline-none">
						<label
							class="flex w-full items-center justify-start gap-2 p-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel>
							<hlm-radio [value]="item.value" class="space-x-0">
								<div
									class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
									<div
										class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375]"></div>
									<div
										class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
								</div>
							</hlm-radio>
							<p class="text-foreground text-sm leading-none font-medium select-none">
								{{ item.label }}
							</p>
						</label>
					</div>
				}
			</hlm-radio-group>
		</div>
	`,
})
export class Radio14Component {
	items: { id: number; value: string; label: string }[] = [
		{ id: 1, value: 'usa', label: 'USA' },
		{ id: 2, value: 'uk', label: 'UK' },
		{ id: 3, value: 'sea', label: 'SEA' },
	];
}

export const radio14Code = `import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-14',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex flex-col gap-4">
			<span class="text-sm">Server location</span>
			<hlm-radio-group class="grid grid-cols-3 justify-between gap-2 text-sm font-medium" value="usa">
				@for (item of items; track item.id) {
					<div
						class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full rounded-md border shadow-xs outline-none">
						<label
							class="flex w-full items-center justify-start gap-2 p-3 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel>
							<hlm-radio [value]="item.value" class="space-x-0">
								<div
									class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
									<div
										class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375]"></div>
									<div
										class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
								</div>
							</hlm-radio>
							<p class="text-foreground text-sm leading-none font-medium select-none">
								{{ item.label }}
							</p>
						</label>
					</div>
				}
			</hlm-radio-group>
		</div>
	\`,
})
export class Radio14Component {
	items: { id: number; value: string; label: string }[] = [
		{ id: 1, value: 'usa', label: 'USA' },
		{ id: 2, value: 'uk', label: 'UK' },
		{ id: 3, value: 'sea', label: 'SEA' },
	];
}`;
