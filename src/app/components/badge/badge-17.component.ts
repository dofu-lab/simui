import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-17',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span hlmBadge variant="outline" class="h-fit gap-1.5 rounded-md py-[3px] pl-[3px]">
			<span hlmBadge variant="outline" class="gap-1.5 rounded-sm">
				<div class="size-3 rounded-full border-[3px] border-amber-100 bg-amber-500 dark:border-amber-900"></div>
				<span class="truncate">Warning</span>
			</span>
			<span class="truncate">Might be a problem</span>
			<ng-icon name="lucideArrowRight" />
		</span>
	`,
})
export class Badge17Component {}
