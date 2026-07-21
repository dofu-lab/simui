import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-08',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge variant="outline" class="gap-1.5">
			<div class="size-1.5 rounded-full bg-emerald-500"></div>
			<span>Success</span>
		</span>
	`,
})
export class Badge08Component {}
