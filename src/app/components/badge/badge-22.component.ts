import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-22',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span
			hlmBadge
			variant="outline"
			class="h-fit gap-2 border-red-200 bg-red-50 py-[3px] pl-[3px] hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:hover:bg-red-900">
			<span
				hlmBadge
				variant="outline"
				class="bg-background truncate border-red-200 text-red-600 select-none dark:border-red-800">
				Error
			</span>
			<span class="truncate text-red-600 select-none">Something went wrong</span>
			<ng-icon name="lucideArrowRight" class="text-red-600" />
		</span>
	`,
})
export class Badge22Component {}
