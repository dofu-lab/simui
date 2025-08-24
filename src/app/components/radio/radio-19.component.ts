import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideMinus } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-19',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel, FormsModule, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideCheck, lucideMinus })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex flex-col gap-4">
			<span class="text-sm">Choose a theme</span>
			<hlm-radio-group
				class="grid grid-cols-3 justify-between gap-2 text-sm font-medium"
				value="light"
				[ngModel]="theme()"
				(ngModelChange)="theme.set($event)">
				@for (item of items; track item.id) {
					<label
						class="group flex w-full flex-col items-start justify-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
						hlmLabel>
						<img
							class="border-input focus-visible:ring-ring/50 relative cursor-pointer overflow-hidden rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
							[class]="{ 'border-ring': theme() === item.value }"
							width="88"
							height="70"
							[src]="item.thumbnailPath"
							[alt]="item.label" />
						<hlm-radio [value]="item.value" class="hidden" />
						<div
							class="group text-foreground data-[state=unchecked]:text-muted-foreground/70 flex items-center justify-start gap-1 text-xs leading-none font-medium select-none"
							[attr.data-state]="theme() === item.value ? 'checked' : 'unchecked'">
							<label
								hlmLabel
								for="theme-checkbox"
								class="group-data-[state=unchecked]:text-muted-foreground/70 bg-background text-foreground relative inline-flex items-center justify-center transition-all ease-in-out outline-none select-none">
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=checked]:scale-100 group-data-[state=checked]:opacity-100" />
								<ng-icon
									hlm
									name="lucideMinus"
									size="sm"
									class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=checked]:scale-0 group-data-[state=checked]:opacity-0" />
							</label>
							{{ item.label }}
						</div>
					</label>
				}
			</hlm-radio-group>
		</div>
	`,
})
export class Radio19Component {
	theme = signal('light');
	items: { id: number; value: string; label: string; thumbnailPath: string }[] = [
		{ id: 1, value: 'light', label: 'Light', thumbnailPath: '/assets/thumbnails/light-theme.png' },
		{ id: 2, value: 'dark', label: 'Dark', thumbnailPath: '/assets/thumbnails/dark-theme.png' },
		{ id: 3, value: 'system', label: 'System', thumbnailPath: '/assets/thumbnails/system-theme.png' },
	];
}

export const radio19Code = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideMinus } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-19',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel, FormsModule, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideCheck, lucideMinus })],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex flex-col gap-4">
			<span class="text-sm">Choose a theme</span>
			<hlm-radio-group
				class="grid grid-cols-3 justify-between gap-2 text-sm font-medium"
				value="light"
				[ngModel]="theme()"
				(ngModelChange)="theme.set($event)">
				@for (item of items; track item.id) {
					<label
						class="group flex w-full flex-col items-start justify-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
						hlmLabel>
						<img
							class="border-input focus-visible:ring-ring/50 relative cursor-pointer overflow-hidden rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
							[class]="{ 'border-ring': theme() === item.value }"
							width="88"
							height="70"
							[src]="item.thumbnailPath"
							[alt]="item.label" />
						<hlm-radio [value]="item.value" class="hidden" />
						<div
							class="group text-foreground data-[state=unchecked]:text-muted-foreground/70 flex items-center justify-start gap-1 text-xs leading-none font-medium select-none"
							[attr.data-state]="theme() === item.value ? 'checked' : 'unchecked'">
							<label
								hlmLabel
								for="theme-checkbox"
								class="group-data-[state=unchecked]:text-muted-foreground/70 bg-background text-foreground relative inline-flex items-center justify-center transition-all ease-in-out outline-none select-none">
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=checked]:scale-100 group-data-[state=checked]:opacity-100" />
								<ng-icon
									hlm
									name="lucideMinus"
									size="sm"
									class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=checked]:scale-0 group-data-[state=checked]:opacity-0" />
							</label>
							{{ item.label }}
						</div>
					</label>
				}
			</hlm-radio-group>
		</div>
	\`,
})
export class Radio19Component {
	theme = signal('light');
	items: { id: number; value: string; label: string; thumbnailPath: string }[] = [
		{ id: 1, value: 'light', label: 'Light', thumbnailPath: '/assets/thumbnails/light-theme.png' },
		{ id: 2, value: 'dark', label: 'Dark', thumbnailPath: '/assets/thumbnails/dark-theme.png' },
		{ id: 3, value: 'system', label: 'System', thumbnailPath: '/assets/thumbnails/system-theme.png' },
	];
}`;
