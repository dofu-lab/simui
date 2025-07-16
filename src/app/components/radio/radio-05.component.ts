import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-05',
	imports: [FormsModule, HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, HlmInputDirective],
	template: `
		<hlm-radio-group class="flex flex-col gap-6 text-sm font-medium" [(ngModel)]="value">
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
						<span class="text-sm leading-4">Radio with expansion</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">
						You can use this radio with a label and a description.
					</p>
					<div
						class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:grid-rows-[1fr] data-[state=expanded]:opacity-100"
						[attr.data-state]="value() === '1' ? 'expanded' : 'collapsed'">
						<div class="pointer-events-none -m-2 overflow-hidden p-2">
							<div class="pointer-events-auto">
								<input hlmInput type="text" class="h-9 w-full" placeholder="Enter your data" />
							</div>
						</div>
					</div>
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
						<span class="text-sm leading-4">Radio without expansion</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
				</div>
			</label>
		</hlm-radio-group>
	`,
})
export class Radio05Component {
	public value = model<string>('2');
}

export const radio05Code = `
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

@Component({
	selector: 'sim-radio-05',
	imports: [FormsModule, HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, HlmInputDirective],
	template: \`
		<hlm-radio-group class="flex flex-col gap-6 text-sm font-medium" [(ngModel)]="value">
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
						<span class="text-sm leading-4">Radio with expansion</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">
						You can use this radio with a label and a description.
					</p>
					<div
						class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:grid-rows-[1fr] data-[state=expanded]:opacity-100"
						[attr.data-state]="value() === '1' ? 'expanded' : 'collapsed'">
						<div class="pointer-events-none -m-2 overflow-hidden p-2">
							<div class="pointer-events-auto">
								<input hlmInput type="text" class="h-9 w-full" placeholder="Enter your data" />
							</div>
						</div>
					</div>
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
						<span class="text-sm leading-4">Radio without expansion</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
				</div>
			</label>
		</hlm-radio-group>
	\`,
})
export class Radio05Component {
	public value = model<string>('2');
}
`;
