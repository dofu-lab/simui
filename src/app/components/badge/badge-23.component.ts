import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-23',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeImports, NgIcon],
	template: `
		<span
			hlmBadge
			variant="outline"
			class="h-fit gap-2 border-emerald-200 bg-emerald-50 py-[3px] pr-[3px] hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:hover:bg-emerald-900">
			<span class="truncate text-emerald-600">Profile is updated</span>
			<span
				hlmBadge
				variant="outline"
				class="bg-background border-emerald-200 text-emerald-600 select-none dark:border-emerald-800">
				<span class="truncate">Success</span>
				<ng-icon name="lucideArrowRight" />
			</span>
		</span>
	`,
})
export class Badge23Component {}
