import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-18',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: `
		<div
			class="group relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
			[attr.data-state]="value() ? 'checked' : 'unchecked'">
			<hlm-switch
				id="switch-12"
				class="absolute inset-0 h-[inherit] w-auto rounded-xl border-[2px] data-[state=checked]:bg-blue-950 data-[state=unchecked]:bg-amber-300 dark:data-[state=unchecked]:bg-amber-500 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full [&>brn-switch-thumb]:size-8 [&>brn-switch-thumb]:rounded-[12px] [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%)]"
				[(checked)]="value" />
			<span
				class="pointer-events-none relative ms-0.5 flex min-w-8 rotate-45 items-center justify-center text-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[state=checked]:rotate-0 group-data-[state=checked]:text-white group-data-[state=unchecked]:invisible group-data-[state=unchecked]:translate-y-full"
				(click)="value.set(false)">
				<ng-icon hlm size="sm" name="lucideMoon" />
			</span>
			<span
				class="pointer-events-none relative me-0.5 flex min-w-8 rotate-45 items-center justify-center text-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[state=checked]:invisible group-data-[state=checked]:translate-y-full group-data-[state=unchecked]:rotate-0 group-data-[state=unchecked]:text-white"
				(click)="value.set(true)">
				<ng-icon hlm size="sm" name="lucideSun" />
			</span>
		</div>
	`,
})
export class Switch18Component {
	readonly value = model(false);
}

export const switch18Code = `import { HlmIcon } from '@/libs/ui/ui-icon-helm/src';
import { Component, model } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-18',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: \`
		<div
			class="group relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
			[attr.data-state]="value() ? 'checked' : 'unchecked'">
			<hlm-switch
				id="switch-12"
				class="absolute inset-0 h-[inherit] w-auto rounded-xl border-[2px] data-[state=checked]:bg-blue-950 data-[state=unchecked]:bg-amber-300 dark:data-[state=unchecked]:bg-amber-500 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full [&>brn-switch-thumb]:size-8 [&>brn-switch-thumb]:rounded-[12px] [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%)]"
				[(checked)]="value" />
			<span
				class="pointer-events-none relative ms-0.5 flex min-w-8 rotate-45 items-center justify-center text-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[state=checked]:rotate-0 group-data-[state=checked]:text-white group-data-[state=unchecked]:invisible group-data-[state=unchecked]:translate-y-full"
				(click)="value.set(false)">
				<ng-icon hlm size="sm" name="lucideMoon" />
			</span>
			<span
				class="pointer-events-none relative me-0.5 flex min-w-8 rotate-45 items-center justify-center text-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[state=checked]:invisible group-data-[state=checked]:translate-y-full group-data-[state=unchecked]:rotate-0 group-data-[state=unchecked]:text-white"
				(click)="value.set(true)">
				<ng-icon hlm size="sm" name="lucideSun" />
			</span>
		</div>
	\`,
})
export class Switch18Component {
	readonly value = model(false);
}`;
