import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-20',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-emerald-200 bg-emerald-50 py-[3px] pl-[3px] hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:hover:bg-emerald-900">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="bg-background rounded-full border-emerald-200 dark:border-emerald-800">
					<span class="truncate text-emerald-600 select-none">Success</span>
				</span>
				<span class="truncate text-emerald-600 select-none">Profile is updated</span>
				<ng-icon hlm name="lucideArrowRight" size="xs" class="text-emerald-600" />
			</div>
		</span>
	`,
})
export class Badge20Component {}