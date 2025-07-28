import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-02',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: `
		<span hlmBadge variant="secondary">Badge</span>
	`,
})
export class Badge02Component {}

export const badge02Code = `import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-02',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: \`
		<span hlmBadge variant="secondary">Badge</span>
	\`,
})
export class Badge02Component {}`;
