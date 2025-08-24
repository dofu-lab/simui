import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFrame, lucideHand, lucideMousePointer2, lucidePenTool } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-11',
	imports: [NgIcon, HlmIcon, HlmRadioGroup, HlmRadio, HlmLabel],
	providers: [
		provideIcons({
			lucideMousePointer2,
			lucideFrame,
			lucidePenTool,
			lucideHand,
		}),
	],
	template: `
		<hlm-radio-group class="grid grid-cols-2 justify-between gap-3 text-sm font-medium" value="frame">
			@for (item of items; track item.id) {
				<div
					class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border shadow-xs outline-none">
					<label
						class="flex w-full items-start justify-between gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
						hlmLabel>
						<div class="flex flex-col gap-2">
							<ng-icon hlm class="opacity-60" size="sm" [name]="item.icon" />
							<p class="text-muted-foreground text-xs font-normal">{{ item.label }}</p>
						</div>
						<hlm-radio class="space-x-0" [value]="item.value" [disabled]="item.value === 'handTool'">
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
			}
		</hlm-radio-group>
	`,
})
export class Radio11Component {
	items: { id: number; value: string; label: string; icon: string }[] = [
		{ id: 1, value: 'frame', label: 'Frame', icon: 'lucideFrame' },
		{ id: 2, value: 'pointer', label: 'Pointer', icon: 'lucideMousePointer2' },
		{ id: 3, value: 'pen', label: 'Pen', icon: 'lucidePenTool' },
		{ id: 4, value: 'handTool', label: 'Hand tool', icon: 'lucideHand' },
	];
}

export const radio11Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFrame, lucideHand, lucideMousePointer2, lucidePenTool } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-11',
	imports: [NgIcon, HlmIcon, HlmRadioGroup, HlmRadio, HlmLabel],
	providers: [
		provideIcons({
			lucideMousePointer2,
			lucideFrame,
			lucidePenTool,
			lucideHand,
		}),
	],
	template: \`
		<hlm-radio-group class="grid grid-cols-2 justify-between gap-3 text-sm font-medium" value="frame">
			@for (item of items; track item.id) {
				<div
					class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border shadow-xs outline-none">
					<label
						class="flex w-full items-start justify-between gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
						hlmLabel>
						<div class="flex flex-col gap-2">
							<ng-icon hlm class="opacity-60" size="sm" [name]="item.icon" />
							<p class="text-muted-foreground text-xs font-normal">{{ item.label }}</p>
						</div>
						<hlm-radio class="space-x-0" [value]="item.value" [disabled]="item.value === 'handTool'">
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
			}
		</hlm-radio-group>
	\`,
})
export class Radio11Component {
	items: { id: number; value: string; label: string; icon: string }[] = [
		{ id: 1, value: 'frame', label: 'Frame', icon: 'lucideFrame' },
		{ id: 2, value: 'pointer', label: 'Pointer', icon: 'lucideMousePointer2' },
		{ id: 3, value: 'pen', label: 'Pen', icon: 'lucidePenTool' },
		{ id: 4, value: 'handTool', label: 'Hand tool', icon: 'lucideHand' },
	];
}`;
