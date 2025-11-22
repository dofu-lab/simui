import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-05',
	imports: [HlmBadge],
	template: `
		<span hlmBadge>Badge</span>
	`,
})
export class Badge05Component {}

export const badge05Code = `import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-05',
	imports: [HlmBadge],
	template: \`
		<span hlmBadge>Badge</span>
	\`,
})
export class Badge05Component {}`;
