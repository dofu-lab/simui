import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowUp } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-12',
	standalone: true,
	providers: [provideIcons({ lucideArrowUp })],
	imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
	template: `
		<span hlmBadge variant="outline">
			<div class="flex items-center justify-center gap-1">
				<span>Icon badge</span>
				<ng-icon hlm name="lucideArrowUp" size="xs" class="text-primary" />
			</div>
		</span>
	`,
})
export class Badge12Component {}

export const badge12Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowUp } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-badge-12',
	standalone: true,
	providers: [provideIcons({ lucideArrowUp })],
	imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
	template: \`
		<span hlmBadge variant="outline">
			<div class="flex items-center justify-center gap-1">
				<span>Icon badge</span>
				<ng-icon hlm name="lucideArrowUp" size="xs" class="text-primary" />
			</div>
		</span>
	\`,
})
export class Badge12Component {}`;
