import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-02',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge variant="secondary">Badge</span>
	`,
})
export class Badge02Component {}
