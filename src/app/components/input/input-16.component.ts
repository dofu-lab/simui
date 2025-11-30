import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSend } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-16',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSend })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-16" class="mb-2 text-sm">Input with end inline button</label>
		<div class="relative">
			<input hlmInput id="input-16" type="text" placeholder="Email" class="peer pe-9" />
			<button
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
				<ng-icon hlm name="lucideSend" size="sm" />
			</button>
		</div>
	`,
})
export class Input16Component {}