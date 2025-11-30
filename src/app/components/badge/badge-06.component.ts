import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-06',
	providers: [provideIcons({ lucideX })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span hlmBadge class="rounded-full">
			<div class="flex items-center justify-center gap-1">
				<ng-icon hlm name="lucideX" size="xs" class="text-primary-foreground" />
				<span>Icon badge</span>
			</div>
		</span>
	`,
})
export class Badge06Component {}