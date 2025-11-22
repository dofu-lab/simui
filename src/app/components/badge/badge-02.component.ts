import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-02',
	imports: [HlmBadge],
	template: `
		<span hlmBadge variant="secondary" class="rounded-full">Badge</span>
	`,
})
export class Badge02Component {}

export const badge02Code = `import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-02',
	imports: [HlmBadge],
	template: \`
		<span hlmBadge variant="secondary" class="rounded-full">Badge</span>
	\`,
})
export class Badge02Component {}`;
