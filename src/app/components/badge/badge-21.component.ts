import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-21',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-amber-200 bg-amber-50 py-[3px] pl-[3px] hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:hover:bg-amber-900">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="bg-background rounded-full border-amber-200 dark:border-amber-800">
					<span class="truncate text-amber-600">Warning</span>
				</span>
				<span class="truncate text-amber-600">Password expired in 3 days</span>
				<ng-icon hlm name="lucideArrowRight" size="xs" class="text-amber-600" />
			</div>
		</span>
	`,
})
export class Badge21Component {}

export const badge21Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-21',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: \`
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-amber-200 bg-amber-50 py-[3px] pl-[3px] hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:hover:bg-amber-900">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="bg-background rounded-full border-amber-200 dark:border-amber-800">
					<span class="truncate text-amber-600">Warning</span>
				</span>
				<span class="truncate text-amber-600">Password expired in 3 days</span>
				<ng-icon hlm name="lucideArrowRight" size="xs" class="text-amber-600" />
			</div>
		</span>
	\`,
})
export class Badge21Component {}`;
