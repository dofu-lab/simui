import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-11',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: `
		<div class="group flex items-center gap-2" [attr.data-state]="value() ? 'checked' : 'unchecked'">
			<span
				class="group-data-[state=checked]:text-muted-foreground/70 flex flex-1 cursor-pointer items-center text-right text-sm font-medium"
				(click)="value.set(false)">
				<ng-icon hlm size="sm" name="lucideMoon" />
			</span>
			<hlm-switch
				id="switch-11"
				class="h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]"
				[(checked)]="value" />
			<span
				class="group-data-[state=unchecked]:text-muted-foreground/70 flex flex-1 cursor-pointer items-center text-right text-sm font-medium"
				(click)="value.set(true)">
				<ng-icon hlm size="sm" name="lucideSun" />
			</span>
		</div>
	`,
})
export class Switch11Component {
	readonly value = model(false);
}

export const switch11Code = `import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-11',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: \`
		<div class="group flex items-center gap-2" [attr.data-state]="value() ? 'checked' : 'unchecked'">
			<span
				class="group-data-[state=checked]:text-muted-foreground/70 flex flex-1 cursor-pointer items-center text-right text-sm font-medium"
				(click)="value.set(false)">
				<ng-icon hlm size="sm" name="lucideMoon" />
			</span>
			<hlm-switch
				id="switch-11"
				class="h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]"
				[(checked)]="value" />
			<span
				class="group-data-[state=unchecked]:text-muted-foreground/70 flex flex-1 cursor-pointer items-center text-right text-sm font-medium"
				(click)="value.set(true)">
				<ng-icon hlm size="sm" name="lucideSun" />
			</span>
		</div>
	\`,
})
export class Switch11Component {
	readonly value = model(false);
}`;
