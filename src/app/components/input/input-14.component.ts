import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-14',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-14" class="mb-2 text-sm">Input with start inline add-on</label>
		<div class="flex -space-x-px">
			<div
				class="text-muted-foreground/80 pointer-events-none flex items-center justify-center border rounded-l-md px-3 text-sm peer-disabled:opacity-50">
				https://
			</div>
			<input hlmInput id="input-14" type="text" placeholder="google.com" class="peer rounded-l-none" />
		</div>
	`,
})
export class Input14Component {}

export const input14Code = ``;
