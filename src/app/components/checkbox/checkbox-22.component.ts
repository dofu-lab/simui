import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-22',
	standalone: true,
	providers: [provideIcons({ lucideSun, lucideMoon })],
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmIconDirective, NgIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<fieldset class="space-y-4">
			<legend class="text-foreground text-sm leading-none font-medium">Appearance mode toggle checkbox</legend>
			<div class="flex flex-col justify-center">
				<hlm-checkbox id="theme-checkbox" class="peer sr-only" />
				<label
					hlmLabel
					for="theme-checkbox"
					class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-all ease-in-out outline-none select-none peer-focus-visible:ring-[3px]">
					<ng-icon
						hlm
						name="lucideSun"
						size="sm"
						class="shrink-0 scale-0 opacity-0 transition-all group-peer-has-checked:scale-100 group-peer-has-checked:opacity-100" />
					<ng-icon
						hlm
						name="lucideMoon"
						size="sm"
						class="absolute shrink-0 scale-100 opacity-100 transition-all group-peer-has-checked:scale-0 group-peer-has-checked:opacity-0" />
				</label>
			</div>
		</fieldset>
	`,
})
export class Checkbox22Component {
	theme = signal<'light' | 'dark'>('light');
}

export const checkbox22Code = `
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-22',
	standalone: true,
	providers: [provideIcons({ lucideSun, lucideMoon })],
	imports: [HlmCheckboxComponent, HlmLabelDirective, HlmIconDirective, NgIcon],
	host: {
		class: 'w-full',
	},
	template: \`
		<fieldset class="space-y-4">
			<legend class="text-foreground text-sm leading-none font-medium">Appearance mode toggle checkbox</legend>
			<div class="flex flex-col justify-center">
				<hlm-checkbox id="theme-checkbox" class="peer sr-only" />
				<label
					hlmLabel
					for="theme-checkbox"
					class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-all ease-in-out outline-none select-none peer-focus-visible:ring-[3px]">
					<ng-icon
						hlm
						name="lucideSun"
						size="sm"
						class="shrink-0 scale-0 opacity-0 transition-all group-peer-has-checked:scale-100 group-peer-has-checked:opacity-100" />
					<ng-icon
						hlm
						name="lucideMoon"
						size="sm"
						class="absolute shrink-0 scale-100 opacity-100 transition-all group-peer-has-checked:scale-0 group-peer-has-checked:opacity-0" />
				</label>
			</div>
		</fieldset>
	\`,
})
export class Checkbox22Component {
	theme = signal<'light' | 'dark'>('light');
}
`;
