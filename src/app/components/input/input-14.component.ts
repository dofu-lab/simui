import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-14',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-14" class="mb-2 text-sm">Input with start inline add-on</label>
		<div class="flex -space-x-px">
			<div
				class="text-muted-foreground/80 dark:bg-input/30 pointer-events-none flex items-center justify-center rounded-l-md border bg-transparent px-3 text-sm peer-disabled:opacity-50">
				https://
			</div>
			<input hlmInput id="input-14" type="text" placeholder="google.com" class="peer rounded-l-none" />
		</div>
	`,
})
export class Input14Component {}

export const input14Code = `import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-14',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-14" class="mb-2 text-sm">Input with start inline add-on</label>
		<div class="flex -space-x-px">
			<div
				class="text-muted-foreground/80 dark:bg-input/30 pointer-events-none flex items-center justify-center rounded-l-md border bg-transparent px-3 text-sm peer-disabled:opacity-50">
				https://
			</div>
			<input hlmInput id="input-14" type="text" placeholder="google.com" class="peer rounded-l-none" />
		</div>
	\`,
})
export class Input14Component {}`;
