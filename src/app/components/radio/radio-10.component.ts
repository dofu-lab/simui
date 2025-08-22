import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-10',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel, HlmAvatar, HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<hlm-avatar class="size-10">
						<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
						<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
					</hlm-avatar>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Alan Cooper</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(FE Dev)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">Working on the design system.</p>
					</div>
					<hlm-radio class="space-x-0" value="1">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<hlm-avatar class="size-10">
						<img src="assets/avatars/jessica-lambert.png" alt="Jessica Lambert" hlmAvatarImage />
						<span class="bg-primary text-primary-foreground" hlmAvatarFallback>JL</span>
					</hlm-avatar>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Jessica</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Designer)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">Working on Web and App at Acme Corp</p>
					</div>
					<hlm-radio class="space-x-0" value="2">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
		</hlm-radio-group>
	`,
})
export class Radio10Component {}

export const radio10Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-10',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel, HlmAvatar, HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: \`
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<hlm-avatar class="size-10">
						<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
						<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
					</hlm-avatar>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Alan Cooper</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(FE Dev)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">Working on the design system.</p>
					</div>
					<hlm-radio class="space-x-0" value="1">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<hlm-avatar class="size-10">
						<img src="assets/avatars/jessica-lambert.png" alt="Jessica Lambert" hlmAvatarImage />
						<span class="bg-primary text-primary-foreground" hlmAvatarFallback>JL</span>
					</hlm-avatar>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Jessica</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Designer)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">Working on Web and App at Acme Corp</p>
					</div>
					<hlm-radio class="space-x-0" value="2">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
		</hlm-radio-group>
	\`,
})
export class Radio10Component {}`;
