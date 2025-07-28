import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-10',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: `
		<span hlmBadge variant="outline">
			<div class="flex items-center justify-center gap-1.5">
				<div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
				<span>Badge</span>
			</div>
		</span>
	`,
})
export class Badge10Component {}

export const badge10Code = `import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-badge-10',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: \`
		<span hlmBadge variant="outline">
			<div class="flex items-center justify-center gap-1.5">
				<div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
				<span>Badge</span>
			</div>
		</span>
	\`,
})
export class Badge10Component {}`;
