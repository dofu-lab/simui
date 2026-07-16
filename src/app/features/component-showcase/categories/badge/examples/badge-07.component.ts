import { Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-07',
	imports: [HlmBadgeImports],
	template: `
		<span hlmBadge>
			Messages
			<span class="text-primary-foreground/60 text-[0.625rem]">12</span>
		</span>
	`,
})
export class Badge07Component {}
