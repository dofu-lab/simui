import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-23',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-emerald-200 bg-emerald-50 py-[3px] pr-[3px] hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:hover:bg-emerald-900">
			<div class="flex items-center gap-2">
				<span class="truncate text-emerald-600">Profile is updated</span>
				<span
					hlmBadge
					variant="outline"
					class="bg-background flex gap-2 rounded-full border-emerald-200 dark:border-emerald-800">
					<span class="truncate text-emerald-600">Success</span>
					<ng-icon hlm name="lucideArrowRight" size="xs" class="text-emerald-600" />
				</span>
			</div>
		</span>
	`,
})
export class Badge23Component {}