import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-19',
	imports: [HlmLabel, HlmInput, HlmButton],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-19" class="mb-2 text-sm">Input with end button</label>
		<div class="flex gap-2">
			<input hlmInput id="input-19" type="text" placeholder="Email" />
			<button hlmBtn variant="outline">Send</button>
		</div>
	`,
})
export class Input19Component {}

export const input19Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-19',
	imports: [HlmLabel, HlmInput, HlmButton],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-19" class="mb-2 text-sm">Input with end button</label>
		<div class="flex gap-2">
			<input hlmInput id="input-19" type="text" placeholder="Email" />
			<button hlmBtn variant="outline">Send</button>
		</div>
	\`,
})
export class Input19Component {}`;
