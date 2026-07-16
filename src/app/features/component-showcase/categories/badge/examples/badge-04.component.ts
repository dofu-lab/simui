import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-04',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge variant="destructive">Badge</span>
	`,
})
export class Badge04Component {}
