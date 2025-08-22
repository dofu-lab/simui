import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-18',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span hlmBadge size="lg" variant="outline" class="w-full rounded-md py-[3px] pl-[3px]">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-red-100 bg-red-500 dark:border-red-900"></div>
						<span class="truncate">Error</span>
					</div>
				</span>
				<span class="truncate">There was a problem</span>
				<ng-icon hlm name="lucideArrowRight" size="xs"></ng-icon>
			</div>
		</span>
	`,
})
export class Badge18Component {}

export const badge18Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-18',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: \`
		<span hlmBadge size="lg" variant="outline" class="w-full rounded-md py-[3px] pl-[3px]">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-red-100 bg-red-500 dark:border-red-900"></div>
						<span class="truncate">Error</span>
					</div>
				</span>
				<span class="truncate">There was a problem</span>
				<ng-icon hlm name="lucideArrowRight" size="xs"></ng-icon>
			</div>
		</span>
	\`,
})
export class Badge18Component {}`;
