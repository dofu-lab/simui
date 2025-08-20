import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-02',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	template: `
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio value="1" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input aspect-square rounded-full border bg-cyan-600 group-[.brn-radio-checked]:border-cyan-600! group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				Option 1
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio value="2" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input aspect-square rounded-full border bg-cyan-600 group-[.brn-radio-checked]:border-cyan-600! group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				Option 2
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio value="3" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input aspect-square rounded-full border bg-cyan-600 group-[.brn-radio-checked]:border-cyan-600! group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				Option 3
			</label>
		</hlm-radio-group>
	`,
})
export class Radio02Component {}

export const radio02Code = `import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-02',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	template: \`
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio value="1" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input aspect-square rounded-full border bg-cyan-600 group-[.brn-radio-checked]:border-cyan-600! group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				Option 1
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio value="2" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input aspect-square rounded-full border bg-cyan-600 group-[.brn-radio-checked]:border-cyan-600! group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				Option 2
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio value="3" class="space-x-0">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input aspect-square rounded-full border bg-cyan-600 group-[.brn-radio-checked]:border-cyan-600! group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				Option 3
			</label>
		</hlm-radio-group>
	\`,
})
export class Radio02Component {}`;
