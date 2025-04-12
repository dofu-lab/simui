import { HlmBadgeDirective } from '@/libs/ui/ui-badge-helm/src';
import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideZap } from '@ng-icons/lucide';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-20',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmIconDirective, NgIcon, HlmBadgeDirective],
	providers: [provideIcons({ lucideZap })],
	host: {
		class: 'w-full',
	},
	template: `
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full flex-col rounded-md border shadow-xs"
			for="checkbox-20">
			<div class="peer flex flex-1 items-start gap-2 p-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideZap" class="text-primary" size="sm" />
				</div>
				<span class="grid h-8 grow items-center gap-2 select-none">Enterprise plan</span>
				<hlm-checkbox id="checkbox-20" [(checked)]="checked" />
			</div>
			<div class="peer-has-checked:border-ring text-primary flex flex-col gap-2 border-t p-3 text-sm">
				<span hlmBadge variant="outline" class="h-5.5 w-fit rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
						<span>Limited</span>
					</div>
				</span>
				<div>
					<span class="text-lg">$40</span>
					<span>per month</span>
				</div>
				<span class="text-muted-foreground">
					Unlimited users, unlimited individual data and access to all features.
				</span>
			</div>
		</label>
	`,
})
export class Checkbox20Component {
	public readonly checked = model<boolean>(false);
}

export const checkbox20Code = `
import { HlmBadgeDirective } from '@/libs/ui/ui-badge-helm/src';
import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideZap } from '@ng-icons/lucide';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-20',
	standalone: true,
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmIconDirective, NgIcon, HlmBadgeDirective],
	providers: [provideIcons({ lucideZap })],
	host: {
		class: 'w-full',
	},
	template: \`
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full flex-col rounded-md border shadow-xs"
			for="checkbox-20">
			<div class="peer flex flex-1 items-start gap-2 p-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideZap" class="text-primary" size="sm" />
				</div>
				<span class="grid h-8 grow items-center gap-2 select-none">Enterprise plan</span>
				<hlm-checkbox id="checkbox-20" [(checked)]="checked" />
			</div>
			<div class="peer-has-checked:border-ring text-primary flex flex-col gap-2 border-t p-3 text-sm">
				<span hlmBadge variant="outline" class="h-5.5 w-fit rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
						<span>Limited</span>
					</div>
				</span>
				<div>
					<span class="text-lg">$40</span>
					<span>per month</span>
				</div>
				<span class="text-muted-foreground">
					Unlimited users, unlimited individual data and access to all features.
				</span>
			</div>
		</label>
	\`,
})
export class Checkbox20Component {
	public readonly checked = model<boolean>(false);
}
`;
