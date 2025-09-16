import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-49',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-49" class="mb-2 text-sm">Readonly input</label>
		<input hlmInput readonly class="read-only:bg-muted" id="input-49" type="text" value="This is a readonly input" />
	`,
})
export class Input49Component {}

export const input49Code = `import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-49',
	imports: [HlmLabel, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-49" class="mb-2 text-sm">Readonly input</label>
		<input hlmInput readonly class="read-only:bg-muted" id="input-49" type="text" value="This is a readonly input" />
	\`,
})
export class Input49Component {}`;
