import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowUp } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-12',
	providers: [provideIcons({ lucideArrowUp })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span hlmBadge variant="outline" class="rounded-full">
			<div class="flex items-center justify-center gap-1">
				<span>Icon badge</span>
				<ng-icon hlm name="lucideArrowUp" size="xs" class="text-primary" />
			</div>
		</span>
	`,
})
export class Badge12Component {}