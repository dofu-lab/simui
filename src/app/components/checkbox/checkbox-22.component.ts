import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-22',
	standalone: true,
	providers: [provideIcons({ lucideSun, lucideMoon })],
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<fieldset class="space-y-4">
			<legend class="text-foreground text-sm leading-none font-medium">Appearance mode toggle checkbox</legend>
			<div class="flex flex-col justify-center">
				<hlm-checkbox id="theme-checkbox" class="peer sr-only" [(checked)]="checked" />
				<label
					hlmLabel
					for="theme-checkbox"
					[attr.data-state]="checked() ? 'dark' : 'light'"
					class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-all ease-in-out outline-none select-none peer-focus-visible:ring-[3px]">
					<ng-icon
						hlm
						name="lucideSun"
						size="sm"
						class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=light]:scale-100 group-data-[state=light]:opacity-100" />
					<ng-icon
						hlm
						name="lucideMoon"
						size="sm"
						class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=light]:scale-0 group-data-[state=light]:opacity-0" />
				</label>
			</div>
		</fieldset>
	`,
})
export class Checkbox22Component {
	public readonly checked = model<boolean>(false);
}

export const checkbox22Code = `import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-22',
	standalone: true,
	providers: [provideIcons({ lucideSun, lucideMoon })],
	imports: [HlmCheckbox, HlmLabel, HlmIcon, NgIcon],
	host: {
		class: 'w-full',
	},
	template: \`
		<fieldset class="space-y-4">
			<legend class="text-foreground text-sm leading-none font-medium">Appearance mode toggle checkbox</legend>
			<div class="flex flex-col justify-center">
				<hlm-checkbox id="theme-checkbox" class="peer sr-only" [(checked)]="checked" />
				<label
					hlmLabel
					for="theme-checkbox"
					[attr.data-state]="checked() ? 'dark' : 'light'"
					class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-all ease-in-out outline-none select-none peer-focus-visible:ring-[3px]">
					<ng-icon
						hlm
						name="lucideSun"
						size="sm"
						class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=light]:scale-100 group-data-[state=light]:opacity-100" />
					<ng-icon
						hlm
						name="lucideMoon"
						size="sm"
						class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=light]:scale-0 group-data-[state=light]:opacity-0" />
				</label>
			</div>
		</fieldset>
	\`,
})
export class Checkbox22Component {
	public readonly checked = model<boolean>(false);
}`;
