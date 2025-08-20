import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-04',
	standalone: true,
	imports: [HlmBadge],
	template: `
		<span hlmBadge variant="destructive">Badge</span>
	`,
})
export class Badge04Component {}

export const badge04Code = `import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-04',
	standalone: true,
	imports: [HlmBadge],
	template: \`
		<span hlmBadge variant="destructive">Badge</span>
	\`,
})
export class Badge04Component {}`;
