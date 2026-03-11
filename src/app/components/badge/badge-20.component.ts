import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-20',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span
			hlmBadge
			variant="outline"
			class="h-fit gap-2 border-emerald-200 bg-emerald-50 py-[3px] pl-[3px] hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:hover:bg-emerald-900">
			<span
				hlmBadge
				variant="outline"
				class="bg-background truncate border-emerald-200 text-emerald-600 select-none dark:border-emerald-800">
				Success
			</span>
			<span class="truncate text-emerald-600 select-none">Profile is updated</span>
			<ng-icon name="lucideArrowRight" class="text-emerald-600" />
		</span>
	`,
})
export class Badge20Component {}
