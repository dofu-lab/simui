import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
	selector: 'sim-badge-08',
	standalone: true,
	imports: [HlmBadgeDirective],
	template: `
		<span hlmBadge variant="outline">
			<div class="flex items-center justify-center gap-1.5">
				<div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
				<span>Badge</span>
			</div>
		</span>
	`,
})
export class Badge08Component {}

export const badge08Code = `
import { Component } from '@angular/core';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'sim-badge-08',
  standalone: true,
  imports: [HlmBadgeDirective],
  template: \`
    <span hlmBadge variant="outline">
      <div class="flex items-center justify-center gap-1.5">
        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
        <span> Badge </span>
      </div>
    </span>
  \`,
})
export class Badge08Component {}
`;
