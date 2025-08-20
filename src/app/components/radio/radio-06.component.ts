import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixStarFill } from '@ng-icons/remixicon';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-06',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel, HlmIcon, NgIcon],
	providers: [provideIcons({ remixStarFill })],
	template: `
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="6">
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="6">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<span class="text-sm leading-4">All reviews</span>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(10,480)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="5">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(4,238)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="4">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(2,435)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="3">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(1,983)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="2">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(1,389)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="1">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(435)</span>
				</span>
			</label>
		</hlm-radio-group>
	`,
})
export class Radio06Component {}

export const radio06Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixStarFill } from '@ng-icons/remixicon';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-06',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel, HlmIcon, NgIcon],
	providers: [provideIcons({ remixStarFill })],
	template: \`
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="6">
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="6">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<span class="text-sm leading-4">All reviews</span>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(10,480)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="5">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(4,238)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="4">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(2,435)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="3">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(1,983)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="2">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(1,389)</span>
				</span>
			</label>
			<label class="flex items-center gap-2" hlmLabel>
				<hlm-radio class="space-x-0" value="1">
					<div
						class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
						<div
							class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
						<div
							class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
					</div>
				</hlm-radio>
				<span class="flex items-center gap-1">
					<div class="text-sm leading-4 text-amber-500">
						<ng-icon hlm name="remixStarFill" size="sm" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
						<ng-icon hlm name="remixStarFill" size="sm" class="opacity-30" />
					</div>
					<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(435)</span>
				</span>
			</label>
		</hlm-radio-group>
	\`,
})
export class Radio06Component {}`;
