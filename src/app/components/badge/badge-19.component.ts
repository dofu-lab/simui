import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-19',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span hlmBadge variant="outline" class="h-fit gap-1.5 rounded-md py-[3px] pr-[3px]">
			<span class="truncate">New release, try it?</span>
			<span hlmBadge variant="outline" class="gap-1.5 rounded-sm">
				<div class="size-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500 dark:border-emerald-900"></div>
				<span class="truncate">Version 2.0</span>
				<ng-icon name="lucideArrowRight" />
			</span>
		</span>
	`,
})
export class Badge19Component {}
