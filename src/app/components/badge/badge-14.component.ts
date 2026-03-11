import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-14',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge variant="outline" class="gap-1.5 rounded-sm">
			<div class="size-1.5 rounded-full bg-amber-500"></div>
			<span>Warning</span>
		</span>
	`,
})
export class Badge14Component {}
