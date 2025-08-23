import { HlmBadge } from '@/libs/ui/ui-badge-helm/src';
import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRocket } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-19',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon, HlmBadge],
	providers: [provideIcons({ lucideRocket })],
	host: {
		class: 'w-full',
	},
	template: `
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full flex-col rounded-md border shadow-xs"
			for="checkbox-19">
			<div class="peer flex w-full flex-1 items-start gap-2 p-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideRocket" class="text-primary" size="sm" />
				</div>
				<span class="grid h-8 grow items-center gap-2 select-none">Basic plan</span>
				<hlm-checkbox id="checkbox-19" [(checked)]="checked" />
			</div>
			<div class="peer-has-checked:border-ring text-primary flex w-full flex-col gap-2 border-t p-3 text-sm">
				<div class="flex items-center justify-between">
					<div class="space-x-1">
						<span class="text-lg">$10</span>
						<span>per month</span>
					</div>

					<span hlmBadge variant="outline" class="h-5.5 rounded-sm">
						<div class="flex items-center justify-center gap-1.5">
							<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
							<span>Limited</span>
						</div>
					</span>
				</div>
				<span class="text-muted-foreground">
					Includes up to 10 users, 20GB individual data and access to all features.
				</span>
			</div>
		</label>
	`,
})
export class Checkbox19Component {
	public readonly checked = model<boolean>(false);
}

export const checkbox19Code = `import { HlmBadge } from '@/libs/ui/ui-badge-helm/src';
import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRocket } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-19',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon, HlmBadge],
	providers: [provideIcons({ lucideRocket })],
	host: {
		class: 'w-full',
	},
	template: \`
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full flex-col rounded-md border shadow-xs"
			for="checkbox-19">
			<div class="peer flex w-full flex-1 items-start gap-2 p-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideRocket" class="text-primary" size="sm" />
				</div>
				<span class="grid h-8 grow items-center gap-2 select-none">Basic plan</span>
				<hlm-checkbox id="checkbox-19" [(checked)]="checked" />
			</div>
			<div class="peer-has-checked:border-ring text-primary flex w-full flex-col gap-2 border-t p-3 text-sm">
				<div class="flex items-center justify-between">
					<div class="space-x-1">
						<span class="text-lg">import { HlmBadge } from '@/libs/ui/ui-badge-helm/src';
import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRocket } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-19',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon, HlmBadge],
	providers: [provideIcons({ lucideRocket })],
	host: {
		class: 'w-full',
	},
	template: \`
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full flex-col rounded-md border shadow-xs"
			for="checkbox-19">
			<div class="peer flex flex-1 items-start gap-2 p-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideRocket" class="text-primary" size="sm" />
				</div>
				<span class="grid h-8 grow items-center gap-2 select-none">Basic plan</span>
				<hlm-checkbox id="checkbox-19" [(checked)]="checked" />
			</div>
			<div class="peer-has-checked:border-ring text-primary flex flex-col gap-2 border-t p-3 text-sm">
				<div class="flex items-center justify-between">
					<div>
						<span class="text-lg">$10</span>
						<span>per month</span>
					</div>

					<span hlmBadge variant="outline" class="h-5.5 rounded-sm">
						<div class="flex items-center justify-center gap-1.5">
							<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
							<span>Limited</span>
						</div>
					</span>
				</div>
				<span class="text-muted-foreground">
					Includes up to 10 users, 20GB individual data and access to all features.
				</span>
			</div>
		</label>
	\`,
})
export class Checkbox19Component {
	public readonly checked = model<boolean>(false);
}0</span>
						<span>per month</span>
					</div>

					<span hlmBadge variant="outline" class="h-5.5 rounded-sm">
						<div class="flex items-center justify-center gap-1.5">
							<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
							<span>Limited</span>
						</div>
					</span>
				</div>
				<span class="text-muted-foreground">
					Includes up to 10 users, 20GB individual data and access to all features.
				</span>
			</div>
		</label>
	\`,
})
export class Checkbox19Component {
	public readonly checked = model<boolean>(false);
}`;
