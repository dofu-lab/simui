import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-11',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-11" class="mb-2 text-sm">Input with start inline add-on</label>
		<div class="relative">
			<input hlmInput id="input-11" type="text" placeholder="google.com" class="peer ps-16" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
				https://
			</div>
		</div>
	`,
})
export class Input11Component {}

export const input11Code = `import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-11',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-11" class="mb-2 text-sm">Input with start inline add-on</label>
		<div class="relative">
			<input hlmInput id="input-11" type="text" placeholder="google.com" class="peer ps-16" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
				https://
			</div>
		</div>
	\`,
})
export class Input11Component {}`;
