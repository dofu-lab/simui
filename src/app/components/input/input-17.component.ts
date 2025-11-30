import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-17',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideDownload })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-17" class="mb-2 text-sm">Input with end icon button</label>
		<div class="flex -space-x-px">
			<input hlmInput id="input-17" type="text" placeholder="Email" class="peer z-10 rounded-r-none" />
			<button
				hlmBtn
				size="icon"
				class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded-s-none border text-sm transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
				<ng-icon hlm name="lucideDownload" size="sm" />
			</button>
		</div>
	`,
})
export class Input17Component {}