import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-02',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge variant="secondary" class="rounded-full">Badge</span>
	`,
})
export class Badge02Component {}
