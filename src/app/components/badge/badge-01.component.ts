import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-01',
	imports: [HlmBadge],
	template: `
		<span hlmBadge class="rounded-full">Badge</span>
	`,
})
export class Badge01Component {}