import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-22',
	providers: [provideIcons({ lucideSun, lucideMoon })],
	imports: [HlmCheckboxImports, HlmLabelImports, HlmIconImports, NgIcon],
	host: {
		class: 'w-full',
	},
	template: `
		<fieldset class="space-y-4">
			<legend class="text-foreground text-sm leading-none font-medium">Appearance mode toggle checkbox</legend>
			<div class="flex flex-col justify-center">
				<hlm-checkbox inputId="theme-checkbox" class="peer sr-only" [(checked)]="checked" />
				<label
					hlmLabel
					for="theme-checkbox"
					[attr.data-state]="checked() ? 'dark' : 'light'"
					class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 ease relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-all duration-150 outline-none select-none peer-focus-visible:ring-[3px] motion-reduce:transition-none">
					<ng-icon
						hlm
						name="lucideSun"
						size="sm"
						class="shrink-0 scale-95 opacity-0 transition-all group-data-[state=light]:scale-100 group-data-[state=light]:opacity-100 motion-reduce:transition-none" />
					<ng-icon
						hlm
						name="lucideMoon"
						size="sm"
						class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=light]:scale-95 group-data-[state=light]:opacity-0 motion-reduce:transition-none" />
				</label>
			</div>
		</fieldset>
	`,
})
export class Checkbox22Component {
	public readonly checked = model<boolean>(false);
}
