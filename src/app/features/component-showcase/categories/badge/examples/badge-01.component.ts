import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-01',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge>Badge</span>
	`,
})
export class Badge01Component {}
