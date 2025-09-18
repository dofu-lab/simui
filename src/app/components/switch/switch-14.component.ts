import { Component, model } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-14',
	imports: [HlmSwitch],
	template: `
		<div
			class="group relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
			[attr.data-state]="value() ? 'checked' : 'unchecked'">
			<hlm-switch
				id="switch-13"
				class="data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto rounded-md border-[2px] [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full [&>brn-switch-thumb]:size-8 [&>brn-switch-thumb]:rounded-[6px] [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%)]"
				[(checked)]="value" />
			<span
				class="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=checked]:invisible group-data-[state=unchecked]:translate-x-full group-data-[state=unchecked]:rtl:-translate-x-full"
				(click)="value.set(false)">
				<span class="text-[10px] font-medium uppercase">Off</span>
			</span>
			<span
				class="group-data-[state=checked]:text-background pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=checked]:-translate-x-full group-data-[state=unchecked]:invisible group-data-[state=checked]:rtl:translate-x-full"
				(click)="value.set(true)">
				<span class="text-[10px] font-medium uppercase">On</span>
			</span>
		</div>
	`,
})
export class Switch14Component {
	readonly value = model(false);
}

export const switch14Code = `import { Component, model } from '@angular/core';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-14',
	imports: [HlmSwitch],
	template: \`
		<div
			class="group relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
			[attr.data-state]="value() ? 'checked' : 'unchecked'">
			<hlm-switch
				id="switch-13"
				class="data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto rounded-md border-[2px] [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full [&>brn-switch-thumb]:size-8 [&>brn-switch-thumb]:rounded-[6px] [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%)]"
				[(checked)]="value" />
			<span
				class="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=checked]:invisible group-data-[state=unchecked]:translate-x-full group-data-[state=unchecked]:rtl:-translate-x-full"
				(click)="value.set(false)">
				<span class="text-[10px] font-medium uppercase">Off</span>
			</span>
			<span
				class="group-data-[state=checked]:text-background pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=checked]:-translate-x-full group-data-[state=unchecked]:invisible group-data-[state=checked]:rtl:translate-x-full"
				(click)="value.set(true)">
				<span class="text-[10px] font-medium uppercase">On</span>
			</span>
		</div>
	\`,
})
export class Switch14Component {
	readonly value = model(false);
}`;
