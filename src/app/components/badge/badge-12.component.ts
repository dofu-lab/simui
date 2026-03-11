import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowUp } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-12',
	providers: [provideIcons({ lucideArrowUp })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span hlmBadge variant="outline">
			<span>Up trend</span>
			<ng-icon name="lucideArrowUp" class="text-primary" />
		</span>
	`,
})
export class Badge12Component {}
