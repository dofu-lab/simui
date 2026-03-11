import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-18',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span hlmBadge variant="outline" class="h-fit gap-1.5 rounded-md py-[3px] pl-[3px]">
			<span hlmBadge variant="outline" class="gap-1.5 rounded-sm">
				<div class="size-3 rounded-full border-[3px] border-red-100 bg-red-500 dark:border-red-900"></div>
				<span class="truncate">Error</span>
			</span>
			<span class="truncate">There was a problem</span>
			<ng-icon name="lucideArrowRight" />
		</span>
	`,
})
export class Badge18Component {}
