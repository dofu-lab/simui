import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
	selector: 'sim-badge-13',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: `
		<span hlmBadge variant="outline" class="rounded-sm">
			<div class="flex items-center justify-center gap-1.5">
				<div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
				<span>Badge</span>
			</div>
		</span>
	`,
})
export class Badge13Component {}

export const badge13Code = `
import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'sim-badge-13',
  standalone: true,
  imports: [HlmBadgeDirective],
  template: \`
    <span hlmBadge variant="outline" class="rounded-sm">
      <div class="flex items-center justify-center gap-1.5">
        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
        <span> Badge </span>
      </div>
    </span>
  \`,
})
export class Badge13Component {}
`;
