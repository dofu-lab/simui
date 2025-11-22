import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-03',
	imports: [HlmBadge],
	template: `
		<span hlmBadge variant="outline" class="rounded-full">Badge</span>
	`,
})
export class Badge03Component {}

export const badge03Code = `import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-03',
	imports: [HlmBadge],
	template: \`
		<span hlmBadge variant="outline" class="rounded-full">Badge</span>
	\`,
})
export class Badge03Component {}`;
