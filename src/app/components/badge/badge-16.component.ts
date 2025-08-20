import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-16',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: `
		<span hlmBadge size="lg" variant="outline" class="w-full rounded-md py-[3px] pl-[3px]">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
						<span class="truncate">Version 2.0</span>
					</div>
				</span>
				<span class="truncate">New release, try it?</span>
				<ng-icon hlm name="lucideArrowRight" size="xs"></ng-icon>
			</div>
		</span>
	`,
})
export class Badge16Component {}

export const badge16Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-16',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadge, HlmIcon, NgIcon],
	template: \`
		<span hlmBadge size="lg" variant="outline" class="w-full rounded-md py-[3px] pl-[3px]">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="rounded-sm">
					<div class="flex items-center justify-center gap-1.5">
						<div class="h-3 w-3 rounded-full border-[3px] border-emerald-100 bg-emerald-500"></div>
						<span class="truncate">Version 2.0</span>
					</div>
				</span>
				<span class="truncate">New release, try it?</span>
				<ng-icon hlm name="lucideArrowRight" size="xs"></ng-icon>
			</div>
		</span>
	\`,
})
export class Badge16Component {}`;
