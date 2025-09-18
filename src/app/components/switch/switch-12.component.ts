import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-12',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: `
		<div
			class="group relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
			[attr.data-state]="value() ? 'checked' : 'unchecked'">
			<hlm-switch
				id="switch-12"
				class="data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto border-[2px] [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full [&>brn-switch-thumb]:size-8 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%)]"
				[(checked)]="value" />
			<span
				class="group-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center"
				(click)="value.set(false)">
				<ng-icon hlm size="sm" name="lucideMoon" />
			</span>
			<span
				class="group-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center"
				(click)="value.set(true)">
				<ng-icon hlm size="sm" name="lucideSun" />
			</span>
		</div>
	`,
})
export class Switch12Component {
	readonly value = model(false);
}

export const switch12Code = `import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-12',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: \`
		<div
			class="group relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
			[attr.data-state]="value() ? 'checked' : 'unchecked'">
			<hlm-switch
				id="switch-12"
				class="data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto border-[2px] [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full [&>brn-switch-thumb]:size-8 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%)]"
				[(checked)]="value" />
			<span
				class="group-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center"
				(click)="value.set(false)">
				<ng-icon hlm size="sm" name="lucideMoon" />
			</span>
			<span
				class="group-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center"
				(click)="value.set(true)">
				<ng-icon hlm size="sm" name="lucideSun" />
			</span>
		</div>
	\`,
})
export class Switch12Component {
	readonly value = model(false);
}`;
