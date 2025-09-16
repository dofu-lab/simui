import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-27',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-27" class="mb-2 text-sm">File input</label>
		<input
			hlmInput
			id="input-27"
			type="file"
			class="file:border-input p-0 pe-3 file:me-3 file:h-full file:border-0 file:border-e file:px-2" />
	`,
})
export class Input27Component {}

export const input27Code = `import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-27',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-27" class="mb-2 text-sm">File input</label>
		<input
			hlmInput
			id="input-27"
			type="file"
			class="file:border-input p-0 pe-3 file:me-3 file:h-full file:border-0 file:border-e file:px-2" />
	\`,
})
export class Input27Component {}`;
