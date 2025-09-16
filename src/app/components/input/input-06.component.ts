import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-06',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-06" class="mb-2 text-sm">Input with helper text</label>
		<input
			hlmInput
			class="peer"
			id="input-06"
			type="email"
			placeholder="Email"
			value="invalid@mail.com"
			aria-invalid="true"
			[error]="true" />
		<p class="peer-aria-invalid:text-destructive mt-2 text-xs" role="region" aria-live="polite">Email is invalid</p>
	`,
})
export class Input06Component {}

export const input06Code = `import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-06',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-06" class="mb-2 text-sm">Input with helper text</label>
		<input
			hlmInput
			class="peer"
			id="input-06"
			type="email"
			placeholder="Email"
			value="invalid@mail.com"
			aria-invalid="true"
			[error]="true" />
		<p class="peer-aria-invalid:text-destructive mt-2 text-xs" role="region" aria-live="polite">Email is invalid</p>
	\`,
})
export class Input06Component {}`;
