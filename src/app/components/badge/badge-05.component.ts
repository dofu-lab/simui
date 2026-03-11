import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-05',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge>Badge</span>
	`,
})
export class Badge05Component {}
