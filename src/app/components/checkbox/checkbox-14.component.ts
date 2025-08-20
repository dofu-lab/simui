import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRocket } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-14',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon],
	providers: [provideIcons({ lucideRocket })],
	host: {
		class: 'w-full',
	},
	template: `
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full rounded-md border p-4 shadow-xs transition-colors ease-in-out"
			for="checkbox-14">
			<div class="peer flex flex-1 items-start gap-2">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideRocket" class="text-primary" size="sm" />
				</div>
				<div class="grid grow gap-2 pt-0.5 select-none">
					<span>Basic plan</span>
					<span class="text-muted-foreground truncate text-xs">Includes up to 10 users and 5 projects</span>
				</div>
				<hlm-checkbox id="checkbox-14" [(checked)]="checked" />
			</div>
		</label>
	`,
})
export class Checkbox14Component {
	public readonly checked = model<boolean>(false);
}

export const checkbox14Code = `import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRocket } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-14',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon],
	providers: [provideIcons({ lucideRocket })],
	host: {
		class: 'w-full',
	},
	template: \`
		<label
			hlmLabel
			class="border-input has-data-[state=checked]:border-ring relative flex w-full rounded-md border p-4 shadow-xs transition-colors ease-in-out"
			for="checkbox-14">
			<div class="peer flex flex-1 items-start gap-2">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border">
					<ng-icon hlm name="lucideRocket" class="text-primary" size="sm" />
				</div>
				<div class="grid grow gap-2 pt-0.5 select-none">
					<span>Basic plan</span>
					<span class="text-muted-foreground truncate text-xs">Includes up to 10 users and 5 projects</span>
				</div>
				<hlm-checkbox id="checkbox-14" [(checked)]="checked" />
			</div>
		</label>
	\`,
})
export class Checkbox14Component {
	public readonly checked = model<boolean>(false);
}`;
