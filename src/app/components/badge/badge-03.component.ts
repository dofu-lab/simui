import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-03',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge variant="outline" class="rounded-full">Badge</span>
	`,
})
export class Badge03Component {}
