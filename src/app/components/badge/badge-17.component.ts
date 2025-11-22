import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-17',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span hlmBadge size="lg" variant="outline" class="w-full rounded-md py-[3px] pl-[3px]">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-amber-100 bg-amber-500 dark:border-amber-900"></div>
						<span class="truncate">Warning</span>
					</div>
				</span>
				<span class="truncate">Might be a problem</span>
				<ng-icon hlm name="lucideArrowRight" size="xs"></ng-icon>
			</div>
		</span>
	`,
})
export class Badge17Component {}

export const badge17Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-17',
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: \`
		<span hlmBadge size="lg" variant="outline" class="w-full rounded-md py-[3px] pl-[3px]">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-amber-100 bg-amber-500 dark:border-amber-900"></div>
						<span class="truncate">Warning</span>
					</div>
				</span>
				<span class="truncate">Might be a problem</span>
				<ng-icon hlm name="lucideArrowRight" size="xs"></ng-icon>
			</div>
		</span>
	\`,
})
export class Badge17Component {}`;
