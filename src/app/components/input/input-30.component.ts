import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-30',
	imports: [HlmLabel],
	host: { class: 'w-full' },
	template: `
		<div
			class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none">
			<label hlmLabel for="input-30" class="text-foreground block px-3 pt-2 text-xs">Input with insert label</label>
			<input
				id="input-30"
				type="text"
				placeholder="Email"
				class="text-foreground placeholder:text-muted-foreground/70 flex h-10 w-full border-none bg-transparent px-3 pb-2 text-sm focus-visible:outline-none" />
		</div>
	`,
})
export class Input30Component {}

export const input30Code = ``;
