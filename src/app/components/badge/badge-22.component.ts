import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-22',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-red-200 bg-red-50 py-[3px] pl-[3px] hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:hover:bg-red-900">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="bg-background rounded-full border-red-200 dark:border-red-800">
					<span class="truncate text-red-600">Error</span>
				</span>
				<span class="truncate text-red-600">Something went wrong</span>
				<ng-icon hlm name="lucideArrowRight" size="xs" class="text-red-600" />
			</div>
		</span>
	`,
})
export class Badge22Component {}

export const badge22Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-22',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: \`
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-red-200 bg-red-50 py-[3px] pl-[3px] hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:hover:bg-red-900">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="bg-background rounded-full border-red-200 dark:border-red-800">
					<span class="truncate text-red-600">Error</span>
				</span>
				<span class="truncate text-red-600">Something went wrong</span>
				<ng-icon hlm name="lucideArrowRight" size="xs" class="text-red-600" />
			</div>
		</span>
	\`,
})
export class Badge22Component {}`;
