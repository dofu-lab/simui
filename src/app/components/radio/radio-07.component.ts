import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hlm } from '@spartan-ng/brain/core';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

type OptionColor = 'sky' | 'amber' | 'violet' | 'rose' | 'emerald' | 'orange';

@Component({
	selector: 'sim-radio-07',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, FormsModule],
	template: `
		<div class="flex flex-1 flex-col gap-2">
			<label hlmLabel class="flex-1">Choose a color</label>
			<div class="flex-1">
				<hlm-radio-group class="mt-2 flex gap-2 rounded-md" [ngModel]="color()" (ngModelChange)="color.set($event)">
					@for (item of colorOptions; track item) {
						<label hlmLabel>
							<hlm-radio class="space-x-0" [value]="item">
								<div
									class="relative inline-flex size-6 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
									<div
										class="bg-primary-foreground absolute inset-0 scale-0 rounded-full transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[30%]"></div>
									<div [class]="tagColor(item.bgClass)"></div>
								</div>
							</hlm-radio>
						</label>
					}
				</hlm-radio-group>
			</div>
		</div>
	`,
})
export class Radio07Component {
	colorOptions: Array<{
		value: OptionColor;
		label: string;
		bgClass: string;
	}> = [
		{
			value: 'sky',
			label: 'Sky',
			bgClass: 'bg-sky-400 data-[state=checked]:bg-sky-400 border-sky-400 data-[state=checked]:border-sky-400',
		},
		{
			value: 'amber',
			label: 'Amber',
			bgClass: 'bg-amber-400 data-[state=checked]:bg-amber-400 border-amber-400 data-[state=checked]:border-amber-400',
		},
		{
			value: 'violet',
			label: 'Violet',
			bgClass:
				'bg-violet-400 data-[state=checked]:bg-violet-400 border-violet-400 data-[state=checked]:border-violet-400',
		},
		{
			value: 'rose',
			label: 'Rose',
			bgClass: 'bg-rose-400 data-[state=checked]:bg-rose-400 border-rose-400 data-[state=checked]:border-rose-400',
		},
		{
			value: 'emerald',
			label: 'Emerald',
			bgClass:
				'bg-emerald-400 data-[state=checked]:bg-emerald-400 border-emerald-400 data-[state=checked]:border-emerald-400',
		},
		{
			value: 'orange',
			label: 'Orange',
			bgClass:
				'bg-orange-400 data-[state=checked]:bg-orange-400 border-orange-400 data-[state=checked]:border-orange-400',
		},
	];
	color = signal(this.colorOptions[0]);

	tagColor(color: string) {
		return hlm(
			'ring-offset-background group-[.cdk-keyboard-focused]:ring-ring aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2',
			color,
		);
	}
}

export const radio07Code = `
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hlm } from '@spartan-ng/brain/core';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/ui-radiogroup-helm';

type OptionColor = 'sky' | 'amber' | 'violet' | 'rose' | 'emerald' | 'orange';

@Component({
	selector: 'sim-radio-07',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, FormsModule],
	template: \`
		<div class="flex flex-1 flex-col gap-2">
			<label hlmLabel class="flex-1">Choose a color</label>
			<div class="flex-1">
				<hlm-radio-group class="mt-2 flex gap-2 rounded-md" [ngModel]="color()" (ngModelChange)="color.set($event)">
					@for (item of colorOptions; track item) {
						<label hlmLabel>
							<hlm-radio class="space-x-0" [value]="item">
								<div
									class="relative inline-flex size-6 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
									<div
										class="bg-primary-foreground absolute inset-0 scale-0 rounded-full transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[30%]"></div>
									<div [class]="tagColor(item.bgClass)"></div>
								</div>
							</hlm-radio>
						</label>
					}
				</hlm-radio-group>
			</div>
		</div>
	\`,
})
export class Radio07Component {
	colorOptions: Array<{
		value: OptionColor;
		label: string;
		bgClass: string;
	}> = [
		{
			value: 'sky',
			label: 'Sky',
			bgClass: 'bg-sky-400 data-[state=checked]:bg-sky-400 border-sky-400 data-[state=checked]:border-sky-400',
		},
		{
			value: 'amber',
			label: 'Amber',
			bgClass: 'bg-amber-400 data-[state=checked]:bg-amber-400 border-amber-400 data-[state=checked]:border-amber-400',
		},
		{
			value: 'violet',
			label: 'Violet',
			bgClass:
				'bg-violet-400 data-[state=checked]:bg-violet-400 border-violet-400 data-[state=checked]:border-violet-400',
		},
		{
			value: 'rose',
			label: 'Rose',
			bgClass: 'bg-rose-400 data-[state=checked]:bg-rose-400 border-rose-400 data-[state=checked]:border-rose-400',
		},
		{
			value: 'emerald',
			label: 'Emerald',
			bgClass:
				'bg-emerald-400 data-[state=checked]:bg-emerald-400 border-emerald-400 data-[state=checked]:border-emerald-400',
		},
		{
			value: 'orange',
			label: 'Orange',
			bgClass:
				'bg-orange-400 data-[state=checked]:bg-orange-400 border-orange-400 data-[state=checked]:border-orange-400',
		},
	];
	color = signal(this.colorOptions[0]);

	tagColor(color: string) {
		return hlm(
			'ring-offset-background group-[.cdk-keyboard-focused]:ring-ring aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2',
			color,
		);
	}
}
`;
