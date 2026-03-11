import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-06',
	providers: [provideIcons({ lucideX })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span hlmBadge>
			<ng-icon name="lucideX" />
			Icon Badge
		</span>
	`,
})
export class Badge06Component {}
