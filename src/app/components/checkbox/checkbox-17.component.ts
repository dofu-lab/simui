import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFrame, lucideHand, lucideMousePointer2, lucidePenTool } from '@ng-icons/lucide';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-17',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmIconDirective, NgIcon],
	providers: [
		provideIcons({
			lucideMousePointer2,
			lucideFrame,
			lucidePenTool,
			lucideHand,
		}),
	],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="grid grid-cols-2 gap-3">
			@for (item of items; track item.id) {
				<label
					hlmLabel
					class="border-input has-data-[state=checked]:border-ring tran relative grid w-full items-start gap-3 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
					for="checkbox-{{ item.value }}">
					<div class="flex flex-1 items-center justify-between">
						<ng-icon hlm class="opacity-60" size="sm" [name]="item.icon" />
						<hlm-checkbox id="checkbox-{{ item.value }}" />
					</div>
					<div class="text-md text-primary select-none">{{ item.label }}</div>
				</label>
			}
		</div>
	`,
})
export class Checkbox17Component {
	items: { id: number; value: string; label: string; icon: string }[] = [
		{ id: 1, value: 'frame', label: 'Frame', icon: 'lucideFrame' },
		{ id: 2, value: 'pointer', label: 'Pointer', icon: 'lucideMousePointer2' },
		{ id: 3, value: 'pen', label: 'Pen', icon: 'lucidePenTool' },
		{ id: 4, value: 'handTool', label: 'Hand tool', icon: 'lucideHand' },
	];
}

export const checkbox17Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFrame, lucideHand, lucideMousePointer2, lucidePenTool } from '@ng-icons/lucide';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-17',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmIconDirective, NgIcon],
	providers: [
		provideIcons({
			lucideMousePointer2,
			lucideFrame,
			lucidePenTool,
			lucideHand,
		}),
	],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="grid grid-cols-2 gap-3">
			@for (item of items; track item.id) {
				<label
					hlmLabel
					class="border-input has-data-[state=checked]:border-ring tran relative grid w-full items-start gap-3 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
					for="checkbox-{{ item.value }}">
					<div class="flex flex-1 items-center justify-between">
						<ng-icon hlm class="opacity-60" size="sm" [name]="item.icon" />
						<hlm-checkbox id="checkbox-{{ item.value }}" />
					</div>
					<div class="text-md text-primary select-none">{{ item.label }}</div>
				</label>
			}
		</div>
	\`,
})
export class Checkbox17Component {
	items: { id: number; value: string; label: string; icon: string }[] = [
		{ id: 1, value: 'frame', label: 'Frame', icon: 'lucideFrame' },
		{ id: 2, value: 'pointer', label: 'Pointer', icon: 'lucideMousePointer2' },
		{ id: 3, value: 'pen', label: 'Pen', icon: 'lucidePenTool' },
		{ id: 4, value: 'handTool', label: 'Hand tool', icon: 'lucideHand' },
	];
}
`;
