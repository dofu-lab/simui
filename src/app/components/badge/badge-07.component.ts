import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-07',
	standalone: true,
	imports: [HlmBadge],
	template: `
		<span hlmBadge class="rounded-full">
			<div class="flex items-center justify-center gap-1">
				<span>Messages</span>
				<span class="text-primary-foreground/60 text-[0.625rem]">12</span>
			</div>
		</span>
	`,
})
export class Badge07Component {}

export const badge07Code = `import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-07',
	standalone: true,
	imports: [HlmBadge],
	template: \`
		<span hlmBadge class="rounded-full">
			<div class="flex items-center justify-center gap-1">
				<span>Messages</span>
				<span class="text-primary-foreground/60 text-[0.625rem]">12</span>
			</div>
		</span>
	\`,
})
export class Badge07Component {}`;
