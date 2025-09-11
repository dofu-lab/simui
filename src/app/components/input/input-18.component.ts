import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-18',
	imports: [HlmLabel, HlmInput, HlmButton],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-18" class="mb-2 text-sm">Input with end button</label>
		<div class="flex -space-x-px">
			<input hlmInput id="input-18" type="text" placeholder="Email" class="peer z-10 rounded-r-none" />
			<button
				hlmBtn
				variant="outline"
				class="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center justify-center rounded-s-none border text-sm transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
				Send
			</button>
		</div>
	`,
})
export class Input18Component {}

export const input18Code = ``;
