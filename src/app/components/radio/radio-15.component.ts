import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-15',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, HlmBadgeDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-col gap-4">
			<span class="text-sm">Choose a plan</span>
			<hlm-radio-group class="flex flex-col justify-between gap-0 -space-y-px text-sm font-medium" value="plus">
				@for (item of items; track item.id) {
					<div
						class="border-input has-data-[checked=true]:border-primary/50 has-data-[checked=true]:bg-accent relative flex w-full border shadow-xs outline-none first:rounded-t-md last:rounded-b-md has-data-[checked=true]:z-10">
						<label
							class="flex w-full items-center justify-start gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
							hlmLabel>
							<hlm-radio [value]="item.value" class="space-x-0">
								<div class="relative inline-flex size-4">
									<div
										class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
									<div
										class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
								</div>
							</hlm-radio>
							<div class="flex w-full flex-row items-center justify-between">
								<div class="flex flex-row items-center gap-2">
									<p class="text-foreground text-sm leading-none font-medium select-none">
										{{ item.label }}
									</p>
									@if (item.isPopular) {
										<span hlmBadge>Popular</span>
									}
								</div>
								<span class="text-muted-foreground text-xs font-normal">
									{{ item.price }}
								</span>
							</div>
						</label>
					</div>
				}
			</hlm-radio-group>
		</div>
	`,
})
export class Radio15Component {
	items: { id: number; value: string; label: string; isPopular: boolean; price: string }[] = [
		{ id: 1, value: 'hobby', label: 'Hobby', isPopular: false, price: '$9/month' },
		{ id: 2, value: 'plus', label: 'Plus', isPopular: true, price: '$29/month' },
		{ id: 3, value: 'team', label: 'Team', isPopular: false, price: '$49/month' },
		{ id: 4, value: 'enterprise', label: 'Enterprise', isPopular: false, price: 'Custom' },
	];
}

export const radio15Code = `
import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-15',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, HlmBadgeDirective],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex flex-col gap-4">
			<span class="text-sm">Choose a plan</span>
			<hlm-radio-group class="flex flex-col justify-between gap-0 -space-y-px text-sm font-medium" value="plus">
				@for (item of items; track item.id) {
					<div
						class="border-input has-data-[checked=true]:border-primary/50 has-data-[checked=true]:bg-accent relative flex w-full border shadow-xs outline-none first:rounded-t-md last:rounded-b-md has-data-[checked=true]:z-10">
						<label
							class="flex w-full items-center justify-start gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
							hlmLabel>
							<hlm-radio [value]="item.value" class="space-x-0">
								<div class="relative inline-flex size-4">
									<div
										class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
									<div
										class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
								</div>
							</hlm-radio>
							<div class="flex w-full flex-row items-center justify-between">
								<div class="flex flex-row items-center gap-2">
									<p class="text-foreground text-sm leading-none font-medium select-none">
										{{ item.label }}
									</p>
									@if (item.isPopular) {
										<span hlmBadge>Popular</span>
									}
								</div>
								<span class="text-muted-foreground text-xs font-normal">
									{{ item.price }}
								</span>
							</div>
						</label>
					</div>
				}
			</hlm-radio-group>
		</div>
	\`,
})
export class Radio15Component {
	items: { id: number; value: string; label: string; isPopular: boolean; price: string }[] = [
		{ id: 1, value: 'hobby', label: 'Hobby', isPopular: false, price: '$9/month' },
		{ id: 2, value: 'plus', label: 'Plus', isPopular: true, price: '$29/month' },
		{ id: 3, value: 'team', label: 'Team', isPopular: false, price: '$49/month' },
		{ id: 4, value: 'enterprise', label: 'Enterprise', isPopular: false, price: 'Custom' },
	];
}
`;
