import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFrame, lucideHand, lucideMousePointer2, lucidePenTool } from '@ng-icons/lucide';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmLabelImports } from '@spartan-ng/helm/label';

interface CheckboxItem {
	id: number;
	value: string;
	label: string;
	icon: string;
}

@Component({
	selector: 'sim-checkbox-17',
	imports: [NgIcon, HlmCheckboxImports, HlmLabelImports, HlmIconImports],
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
					class="border-input has-data-[state=checked]:border-ring tran ease relative grid w-full items-start gap-3 rounded-md border p-4 shadow-xs transition-colors duration-200 motion-reduce:transition-none"
					for="checkbox{{ item.value }}">
					<div class="flex flex-1 items-center justify-between">
						<ng-icon hlm class="opacity-60" size="sm" [name]="item.icon" />
						<hlm-checkbox [inputId]="'checkbox' + item.value" />
					</div>
					<div class="text-md text-primary select-none">{{ item.label }}</div>
				</label>
			}
		</div>
	`,
})
export class Checkbox17Component {
	protected readonly items: CheckboxItem[] = [
		{ id: 1, value: 'frame', label: 'Frame', icon: 'lucideFrame' },
		{ id: 2, value: 'pointer', label: 'Pointer', icon: 'lucideMousePointer2' },
		{ id: 3, value: 'pen', label: 'Pen', icon: 'lucidePenTool' },
		{ id: 4, value: 'handTool', label: 'Hand tool', icon: 'lucideHand' },
	];
}
