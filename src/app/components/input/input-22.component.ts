import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-22',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-22" class="mb-2 text-sm">Search input with shortcut</label>
		<div class="relative">
			<input hlmInput id="input-22" type="text" placeholder="Search..." class="peer pe-9" />
			<div
				class="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2">
				<kbd
					class="text-muted-foreground/70 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
					⌘K
				</kbd>
			</div>
		</div>
	`,
})
export class Input22Component {}

export const input22Code = ``;
