import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-03',
	standalone: true,
	imports: [HlmBadge],
	template: `
		<span hlmBadge variant="outline">Badge</span>
	`,
})
export class Badge03Component {}

export const badge03Code = `import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-03',
	standalone: true,
	imports: [HlmBadge],
	template: \`
		<span hlmBadge variant="outline">Badge</span>
	\`,
})
export class Badge03Component {}`;
