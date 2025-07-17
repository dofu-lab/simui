import { Component } from '@angular/core';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-04',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective],
	template: `
		<hlm-radio-group class="flex flex-col gap-6 text-sm font-medium" value="1">
			<label class="flex items-start gap-2" hlmLabel>
				<hlm-radio value="1" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Small</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
				</div>
			</label>
			<label class="flex items-start gap-2" hlmLabel>
				<hlm-radio value="2" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Large</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
				</div>
			</label>
		</hlm-radio-group>
	`,
})
export class Radio04Component {}

export const radio04Code = `
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';
import { Component } from '@angular/core';

@Component({
	selector: 'sim-radio-04',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective],
	template: \`
		<hlm-radio-group class="flex flex-col gap-6 text-sm font-medium" value="1">
			<label class="flex items-start gap-2" hlmLabel>
				<hlm-radio value="1" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Small</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
				</div>
			</label>
			<label class="flex items-start gap-2" hlmLabel>
				<hlm-radio value="2" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Large</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
				</div>
			</label>
		</hlm-radio-group>
	\`,
})
export class Radio04Component {}
`;
