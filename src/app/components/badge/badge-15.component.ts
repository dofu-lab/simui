import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-15',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge variant="outline" class="gap-1.5 rounded-sm">
			<div class="size-1.5 rounded-full bg-red-500"></div>
			<span>Error</span>
		</span>
	`,
})
export class Badge15Component {}
