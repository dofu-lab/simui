import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-21',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span
			hlmBadge
			variant="outline"
			class="h-fit gap-2 border-amber-200 bg-amber-50 py-[3px] pl-[3px] hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:hover:bg-amber-900">
			<span
				hlmBadge
				variant="outline"
				class="bg-background truncate border-amber-200 text-amber-600 select-none dark:border-amber-800">
				Warning
			</span>
			<span class="truncate text-amber-600 select-none">Password expired in 3 days</span>
			<ng-icon name="lucideArrowRight" class="text-amber-600" />
		</span>
	`,
})
export class Badge21Component {}
