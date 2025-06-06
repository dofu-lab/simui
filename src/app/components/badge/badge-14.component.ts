import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
	selector: 'sim-badge-14',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: `
		<span hlmBadge variant="outline" class="rounded-sm">
			<div class="flex items-center justify-center gap-1.5">
				<div class="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
				<span>Badge</span>
			</div>
		</span>
	`,
})
export class Badge14Component {}

export const badge14Code = `
import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'sim-badge-14',
  standalone: true,
  imports: [HlmBadgeDirective],
  template: \`
    <span hlmBadge variant="outline" class="rounded-sm">
      <div class="flex items-center justify-center gap-1.5">
        <div class="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
        <span> Badge </span>
      </div>
    </span>
  \`,
})
export class Badge14Component {}
`;
