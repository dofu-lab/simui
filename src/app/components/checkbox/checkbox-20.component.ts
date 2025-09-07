import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideZap } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-20',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon, HlmBadge],
	providers: [provideIcons({ lucideZap })],
	host: {
		class: 'w-full',
	},
	template: `
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full flex-col gap-0 rounded-md border shadow-xs"
			for="checkbox-20">
			<div class="peer flex w-full flex-1 items-start gap-2 p-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideZap" class="text-primary" size="sm" />
				</div>
				<span class="grid h-8 grow items-center gap-2 select-none">Enterprise plan</span>
				<hlm-checkbox id="checkbox-20" [(checked)]="checked" />
			</div>
			<div class="peer-has-checked:border-ring text-primary flex w-full flex-col gap-2 border-t p-3 text-sm">
				<span hlmBadge variant="outline" class="h-5.5 w-fit rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
						<span>Limited</span>
					</div>
				</span>
				<div class="space-x-1">
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

export const checkbox20Code = `import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideZap } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-20',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon, HlmBadge],
	providers: [provideIcons({ lucideZap })],
	host: {
		class: 'w-full',
	},
	template: \`
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full flex-col gap-0 rounded-md border shadow-xs"
			for="checkbox-20">
			<div class="peer flex w-full flex-1 items-start gap-2 p-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideZap" class="text-primary" size="sm" />
				</div>
				<span class="grid h-8 grow items-center gap-2 select-none">Enterprise plan</span>
				<hlm-checkbox id="checkbox-20" [(checked)]="checked" />
			</div>
			<div class="peer-has-checked:border-ring text-primary flex w-full flex-col gap-2 border-t p-3 text-sm">
				<span hlmBadge variant="outline" class="h-5.5 w-fit rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
						<span>Limited</span>
					</div>
				</span>
				<div class="space-x-1">
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
}`;
