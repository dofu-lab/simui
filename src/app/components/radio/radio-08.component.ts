import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-08',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	template: `
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Small</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="1">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375]"></div>
							<div
								class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Large</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="2">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375]"></div>
							<div
								class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
		</hlm-radio-group>
	`,
})
export class Radio08Component {}

export const radio08Code = `import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-08',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	template: \`
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Small</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="1">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375]"></div>
							<div
								class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Large</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="2">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="border-input bg-background absolute inset-0 scale-100 rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[0.375]"></div>
							<div
								class="border-input ring-offset-background group-[.brn-radio-checked]:border-primary group-[.brn-radio-checked]:bg-primary group-[.cdk-keyboard-focused]:ring-ring hover:border-primary/60 aspect-square rounded-full border bg-transparent transition-all duration-100 ease-out group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
		</hlm-radio-group>
	\`,
})
export class Radio08Component {}`;
